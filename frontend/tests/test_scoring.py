# テスト用コード：シニアプロフィールと応募データを手動で作成して、スコアを確認
from app.models.application import Application
from app.models.senior_profile import SeniorProfile
from app.models.job import Job
from app.services.scoring_service import calculate_score


def test_calculate_score():
    # 任意のシニアプロフィール、応募、求人を手動で作成
    senior_profile = SeniorProfile(
        id="test_senior_profile_id",
        industry="IT",
        job_title="ソフトウェアエンジニア",
        years_of_experience=30,
        currently_employed=False,
        currently_studying=False,
        has_hobby=True,
        lives_alone=True,
        goes_out_once_a_week=True
    )

    job = Job(
        id="test_job_id",
        industry="IT",
        title="ソフトウェアエンジニア"
    )

    application = Application(
        id="test_application_id",
        senior_profile_id=senior_profile.id,
        job_id=job.id,
        status="選考中"
    )

    # 手動で作成したデータでスコアを計算
    score, criteria_met = calculate_score(application.id)

    # 結果を確認
    print(f"計算されたスコア: {score}")
    print(f"スコアリング基準: {criteria_met}")

# テスト実行
test_calculate_score()
