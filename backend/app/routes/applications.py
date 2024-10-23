from flask import Blueprint, request, jsonify
from app.models.application import Application
from app.models.scoring import Scoring
from app.models.senior_profile import SeniorProfile
from app import db

applications_bp = Blueprint('applications', __name__)

@applications_bp.route('/jobs/<job_id>/ranked-applications', methods=['GET'])
def get_ranked_applications(job_id):
    applications = db.session.query(Application).filter_by(job_id=job_id).all()
    print(f"Job ID: {job_id}, Applications Found: {len(applications)}")  # ログを追加
    if not applications:
        return jsonify({"error": "該当する応募者が見つかりません"}), 404

    ranked_applications = []
    for application in applications:
        scoring_entry = db.session.query(Scoring).filter_by(application_id=application.id).first()
        if scoring_entry:
            ranked_applications.append({
                "application_id": application.id,
                "score": scoring_entry.score,
                "criteria_met": scoring_entry.criteria_met
            })

    ranked_applications.sort(key=lambda x: x['score'], reverse=True)
    
    # UTF-8でJSONを返す
    response = jsonify(ranked_applications)
    response.headers["Content-Type"] = "application/json; charset=utf-8"
    return response, 200

# すべての応募者を取得するエンドポイントを追加
@applications_bp.route('/all', methods=['GET'])
def get_all_applications():
    applications = db.session.query(Application).all()
    if not applications:
        return jsonify({"error": "応募者が見つかりません"}), 404

    all_applications = []
    for application in applications:
        senior_profile = db.session.query(SeniorProfile).filter_by(id=application.senior_profile_id).first()
        if senior_profile:
            all_applications.append({
                "application_id": application.id,
                "name": senior_profile.name,
                "age": senior_profile.age,
                "gender": senior_profile.gender,
                "address": senior_profile.address,
                "industry": senior_profile.industry,
                "job_title": senior_profile.job_title,
                "years_of_experience": senior_profile.years_of_experience
            })
    
    # UTF-8でJSONを返す
    response = jsonify(all_applications)
    response.headers["Content-Type"] = "application/json; charset=utf-8"
    return response, 200

@applications_bp.route('/<application_id>/details', methods=['GET'])
def get_application_details(application_id):
    application = db.session.query(Application).filter_by(id=application_id).first()
    if not application:
        return jsonify({"error": "応募者が見つかりません"}), 404

    senior_profile = db.session.query(SeniorProfile).filter_by(id=application.senior_profile_id).first()
    if not senior_profile:
        return jsonify({"error": "シニアプロファイルが見つかりません"}), 404

    # UTF-8でJSONを返す
    response = jsonify({
        "application_id": application_id,
        "name": senior_profile.name,
        "age": senior_profile.age,
        "gender": senior_profile.gender,
        "address": senior_profile.address,
        "industry": senior_profile.industry,
        "job_title": senior_profile.job_title,
        "years_of_experience": senior_profile.years_of_experience,
    })
    response.headers["Content-Type"] = "application/json; charset=utf-8"
    return response, 200
