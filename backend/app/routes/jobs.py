from flask import Blueprint, jsonify, request
from app.models.job import Job  # データベースモデルをインポート
from app import db  # app.py からインポート

# Blueprintの作成
jobs_bp = Blueprint('jobs', __name__)

# 求人の登録エンドポイント
@jobs_bp.route('/jobs/register', methods=['POST'])
def register_job():
    data = request.json
    new_job = Job(
        union_profile_id=data['union_profile_id'],  # フロントから送られる union_profile_id を使用
        title=data['title'],
        description=data['description'],
        location=data['location'],
        salary=float(data['salary']),  # salary を数値として処理
        require_resume=data.get('requireResume', False),
        require_work_history=data.get('requireWorkHistory', False),
        require_photo=data.get('requirePhoto', False),
        status="open"  # デフォルトで "open" 状態に設定
    )
    db.session.add(new_job)
    db.session.commit()
    return jsonify({"message": "求人が正常に登録されました"}), 201

# 個別求人情報取得エンドポイント
@jobs_bp.route('/jobs/<job_id>', methods=['GET'])
def get_job(job_id):
    job = Job.query.filter_by(id=job_id).first()
    if job:
        return jsonify({
            'id': job.id,
            'title': job.title,
            'description': job.description,
            'location': job.location,
            'salary': job.salary,
            'status': job.status,
            'created_at': job.created_at,
            'updated_at': job.updated_at,
            'requireResume': job.is_resume_required,
            'workHistoryRequired': job.is_work_history_required,
            'photoRequired': job.is_photo_required,
        }), 200
    return jsonify({'message': 'Job not found'}), 404

# 特定の団体が登録した求人を取得するエンドポイント
@jobs_bp.route('/jobs/union/<union_profile_id>', methods=['GET'])
def get_jobs_by_union(union_profile_id):
    jobs = Job.query.filter_by(union_profile_id=union_profile_id).all()
    if not jobs:
        return jsonify({"message": "求人が見つかりません"}), 404
    
    jobs_list = []
    for job in jobs:
        jobs_list.append({
            'id': job.id,
            'title': job.title,
            'description': job.description,
            'location': job.location,
            'salary': job.salary,
            'created_at': job.created_at,
        })
    return jsonify(jobs_list), 200
