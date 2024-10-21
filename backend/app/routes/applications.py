from flask import Blueprint, request, jsonify
from app.models.application import Application
from app.models.scoring import Scoring
from app.models.senior_profile import SeniorProfile
from app import db

applications_bp = Blueprint('applications', __name__)

@applications_bp.route('/jobs/<job_id>/ranked-applications', methods=['GET'])
def get_ranked_applications(job_id):
    applications = db.session.query(Application).filter_by(job_id=job_id).all()
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
    return jsonify(ranked_applications), 200


@applications_bp.route('/<application_id>/details', methods=['GET'])
def get_application_details(application_id):
    application = db.session.query(Application).filter_by(id=application_id).first()
    if not application:
        return jsonify({"error": "応募者が見つかりません"}), 404

    senior_profile = db.session.query(SeniorProfile).filter_by(id=application.senior_profile_id).first()
    if not senior_profile:
        return jsonify({"error": "シニアプロファイルが見つかりません"}), 404

    return jsonify({
        "application_id": application_id,
        "name": senior_profile.name,
        "years_of_experience": senior_profile.years_of_experience,
        "industry": senior_profile.industry,
        "job_title": senior_profile.job_title,
        "currently_employed": senior_profile.currently_employed,
        "currently_studying": senior_profile.currently_studying,
        "has_hobby": senior_profile.has_hobby,
        "lives_alone": senior_profile.lives_alone,
        "goes_out_once_a_week": senior_profile.goes_out_once_a_week
    }), 200
