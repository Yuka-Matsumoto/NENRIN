from flask import Blueprint, jsonify
from app.models.job import Job

# Blueprintの作成
jobs_bp = Blueprint('jobs', __name__)

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
