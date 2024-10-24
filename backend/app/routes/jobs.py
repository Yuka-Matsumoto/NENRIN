from flask import Blueprint, jsonify, request
from app.models.job import Job  # データベースモデルをインポート
from app import db  # app.py からインポート

# Blueprintの作成
jobs_bp = Blueprint('jobs', __name__)

# 求人の登録エンドポイント
@jobs_bp.route('/job-postings', methods=['POST'])
def create_job_posting():
    data = request.json
    try:
        new_job = Job(
            union_profile_id=data['union_profile_id'],  # フロントから送られる union_profile_id を使用
            title=data['title'],
            description=data['description'],
            location=data['location'],
            salary=float(data['salary']),  # salary を数値として処理
            status="open"  # デフォルトで "open" 状態に設定
        )
        db.session.add(new_job)
        db.session.commit()
        return jsonify({"message": "求人が正常に登録されました"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

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
        }), 200
    return jsonify({'message': 'Job not found'}), 404

# ユーザーの求人情報を取得するエンドポイント
@jobs_bp.route('/jobs/user/<user_id>', methods=['GET'])
def get_user_jobs(user_id):
    jobs = Job.query.filter_by(union_profile_id=user_id).all()  # union_profile_idでフィルタリング
    jobs_list = [
        {
            "id": job.id,
            "title": job.title,
            "description": job.description,
            "location": job.location,
            "salary": str(job.salary),  # 数値を文字列に変換
            "status": job.status
        }
        for job in jobs
    ]
    return jsonify(jobs_list), 200
