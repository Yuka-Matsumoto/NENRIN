from flask import Blueprint, request, jsonify, make_response
from app import db
from app.models import SeniorProfile, Job  # 依存するモデルをインポート
from app.models.application import Application  # Applicationモデルをインポート
from werkzeug.utils import secure_filename
import os
import uuid

apply_bp = Blueprint('apply', __name__)

@apply_bp.route('/apply/<job_id>', methods=['GET'])
def get_application_form(job_id):
    print(f"Received request for job_id: {job_id}")  # デバッグ用の出力
    senior_profile = SeniorProfile.query.filter_by(user_id=current_user.id).first()  # 適切なフィルタを適用

    if senior_profile is None:
        return make_response(jsonify({'error': 'Senior profile not found'}), 404)

    job = Job.query.get(job_id)

    if job is None:
        return make_response(jsonify({'error': 'Job not found'}), 404)

    application_conditions = {
        'is_resume_required': job.is_resume_required,
        'is_work_history_required': job.is_work_history_required,
        'is_photo_required': job.is_photo_required,
    }

    response_data = {
        'senior_profile': {
            'name': senior_profile.name,
            'address': senior_profile.address,
            'age': senior_profile.age,
            'gender': senior_profile.gender,
            'industry': senior_profile.industry,
            'job_title': senior_profile.job_title,
            'years_of_experience': senior_profile.years_of_experience,
        },
        'application_conditions': application_conditions,
    }
    
    response = make_response(jsonify(response_data), 200)
    response.headers['Content-Type'] = 'application/json'  # 明示的にContent-Typeを設定
    return response

@apply_bp.route('/apply', methods=['POST'])
def apply():
    name = request.form.get('name')
    address = request.form.get('address')
    age = request.form.get('age')
    gender = request.form.get('gender')
    industry = request.form.get('industry')
    job_title = request.form.get('job_title')
    years_of_experience = request.form.get('years_of_experience')

    resume = request.files.get('resume')
    work_history = request.files.get('work_history')
    photo = request.files.get('photo')

    if not os.path.exists('uploads'):
        os.makedirs('uploads')

    resume_path = None
    work_history_path = None
    photo_path = None

    if resume:
        resume_filename = f"{uuid.uuid4()}_{secure_filename(resume.filename)}"
        resume_path = os.path.join('uploads', resume_filename)
        resume.save(resume_path)

    if work_history:
        work_history_filename = f"{uuid.uuid4()}_{secure_filename(work_history.filename)}"
        work_history_path = os.path.join('uploads', work_history_filename)
        work_history.save(work_history_path)

    if photo:
        photo_filename = f"{uuid.uuid4()}_{secure_filename(photo.filename)}"
        photo_path = os.path.join('uploads', photo_filename)
        photo.save(photo_path)

    new_application = Application(
        name=name,
        address=address,
        age=age,
        gender=gender,
        industry=industry,
        job_title=job_title,
        years_of_experience=years_of_experience,
        resume=resume_path,
        work_history=work_history_path,
        photo=photo_path,
    )

    db.session.add(new_application)
    db.session.commit()

    return make_response(jsonify({'message': 'Application submitted successfully'}), 200)
