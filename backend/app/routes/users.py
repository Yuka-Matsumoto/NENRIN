from flask import Blueprint, jsonify, request
from app.models.senior_profile import SeniorProfile
from app import db

users_bp = Blueprint('users', __name__)

# シニアユーザープロフィール
@users_bp.route('/api/register-senior', methods=['POST'])
def register_senior():
    data = request.json
    new_senior = SeniorProfile(
        user_id=data['user_id'],  # フロントから送られてくるデータに合わせて修正
        name=data['name'],
        address=data['address'],  # adress-> prefecture, and city に変更する？
        age=int(data['age']),
        gender=data['gender'],
        career=data['career'],
        license=data['license']
    )
    db.session.add(new_senior)
    db.session.commit()
    return jsonify({"message": "Senior user registered successfully"}), 201  # シニアユーザー登録が成功しました
