from flask import Blueprint, request, jsonify, make_response
from app import db
from app.models import SeniorProfile, Job  # 依存するモデルをインポート
from app.models.application import Application  # Applicationモデルをインポート
from werkzeug.utils import secure_filename
import os
import uuid

apply_bp = Blueprint('apply', __name__)

# ファイル保存に使用するフォルダの設定
UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'uploads/')

# ファイルを保存する関数
def save_file(file):
    filename = secure_filename(file.filename)
    # ファイル名にUUIDを追加して一意にする
    unique_filename = f"{uuid.uuid4()}_{filename}"
    file_path = os.path.join(UPLOAD_FOLDER, unique_filename)

    # アップロードフォルダが存在しない場合は作成
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    # ファイルを保存
    file.save(file_path)
    return file_path

@apply_bp.route('/api/apply', methods=['POST'])
def apply_for_job():
    data = request.json
    resume = request.files.get('resume')
    work_history = request.files.get('work_history')
    photo = request.files.get('photo')

    # ファイルをサーバーに保存
    resume_path = save_file(resume) if resume else None
    work_history_path = save_file(work_history) if work_history else None
    photo_path = save_file(photo) if photo else None

    # 応募情報をデータベースに保存
    new_application = Application(
        # senior_profile_id=data['senior_profile_id'],
        senior_profile_id="2693f9e2-c427-404d-aaf2-1d96bb6619a1",#佐藤花子さん
        job_id=data['job_id'],
        resume=resume_path,
        work_history=work_history_path,
        photo=photo_path
    )
    db.session.add(new_application)
    db.session.commit()

    return jsonify({"message": "応募が完了しました"}), 201

# ジョブ詳細データ取得エンドポイント
@apply_bp.route('/jobs/<job_id>', methods=['GET'])
def get_job(job_id):
    job = Job.query.get(job_id)
    if not job:
        return jsonify({"message": "ジョブデータが見つかりません"}), 404

    return jsonify({
        "id": job.id,
        "title": job.title,
        "description": job.description,
        "requireResume": job.require_resume,
        "requireWorkHistory": job.require_work_history,
        "requirePhoto": job.require_photo
    }), 200

# シニアプロフィール取得エンドポイント
@apply_bp.route('/api/senior-profile/<senior_profile_id>', methods=['GET'])
def get_senior_profile(senior_profile_id):
    profile = SeniorProfile.query.get(senior_profile_id)
    if profile:
        return jsonify({
            'name': profile.name,
            'address': profile.address,
            'age': profile.age,
            'gender': profile.gender,
            'industry': profile.industry,
            'job_title': profile.job_title,
            'years_of_experience': profile.years_of_experience,
        }), 200
    else:
        return jsonify({'message': 'プロフィールが見つかりません'}), 404
