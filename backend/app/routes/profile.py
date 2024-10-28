# backend/routes/profile.py
from flask import Blueprint, request, jsonify
from firebase_admin import auth as firebase_auth
from app.models import SeniorProfile  # SeniorProfileモデルをインポート
from app import db

profile_bp = Blueprint('profile', __name__)

# UIDを使ってデータベースから該当するシニアユーザーのプロフィール情報を取得するAPI
@profile_bp.route('/api/profile', methods=['GET'])
def get_profile():
    # リクエストヘッダーからトークンを取得
    auth_header = request.headers.get('Authorization', '')
    if not auth_header.startswith('Bearer '):
        return jsonify({"error": "Authorization header missing or incorrect"}), 401
    token = auth_header.split("Bearer ")[1]

    try:
        # FirebaseトークンをデコードしてUIDを取得
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']

        # UIDを使ってSeniorProfileテーブルからユーザー情報を取得
        profile = SeniorProfile.query.filter_by(user_id=uid).first()

        if profile:
            # プロフィール情報を辞書形式で返す
            profile_data = {
                "name": profile.name,
                "email": profile.email,
                "address": profile.address,
                "age": profile.age,
                "gender": profile.gender,
                "industry": profile.industry,
                "job_title": profile.job_title,
                "years_of_experience": profile.years_of_experience,
                "currently_employed": profile.currently_employed,
                "currently_studying": profile.currently_studying,
                "has_hobby": profile.has_hobby,
                "lives_alone": profile.lives_alone,
                "goes_out_once_a_week": profile.goes_out_once_a_week,
            }
            return jsonify(profile_data), 200
        else:
            return jsonify({"error": "Profile not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500
