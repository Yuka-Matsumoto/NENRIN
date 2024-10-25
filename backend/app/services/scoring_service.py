from app.models.scoring import Scoring
from app.models.application import Application
from app.models.senior_profile import SeniorProfile
from app.models.job import Job
from app import db

def calculate_score(application_id):
    application = Application.query.get(application_id)
    if not application:
        raise ValueError(f"応募ID {application_id} が見つかりません")

    senior_profile = SeniorProfile.query.get(application.senior_profile_id)
    if not senior_profile:
        raise ValueError(f"シニアプロファイルID {application.senior_profile_id} が見つかりません")

    job = Job.query.get(application.job_id)
    if not job:
        raise ValueError(f"求人ID {application.job_id} が見つかりません")

    score = 0
    criteria_met = {}

    # スコアリング基準
    if senior_profile.industry == job.industry:
        score += 10
        criteria_met["業種"] = "マッチ"
    if senior_profile.job_title == job.title:
        score += 10
        criteria_met["職種"] = "マッチ"

    years_of_experience = senior_profile.years_of_experience or 0
    score += min(years_of_experience, 10)
    criteria_met["経験年数"] = f"{years_of_experience}年"

    if not senior_profile.currently_employed:
        score += 5
        criteria_met["現在仕事"] = "いいえ"
    if not senior_profile.currently_studying:
        score += 5
        criteria_met["現在勉強中"] = "いいえ"
    if not senior_profile.has_hobby:
        score += 5
        criteria_met["趣味"] = "なし"
    if senior_profile.lives_alone:
        score += 5
        criteria_met["一人暮らし"] = "はい"
    if not senior_profile.goes_out_once_a_week:
        score += 5
        criteria_met["週一日以上外出"] = "いいえ"

    scoring = Scoring(application_id=application_id, score=score, criteria_met=criteria_met)
    db.session.add(scoring)
    db.session.commit()

    return score, criteria_met
