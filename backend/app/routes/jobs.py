from flask import Blueprint, jsonify, request
from app.models.job import Job  # データベースモデルをインポート
from app import db  # app.py からインポート

# Blueprintの定義
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
