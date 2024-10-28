from flask import Blueprint, jsonify, request
from app import db
from app.models.senior_profile import SeniorProfile
from app.models.union_profile import UnionProfile
from datetime import datetime
from app.models.user import User


users_bp = Blueprint('users', __name__)

@users_bp.route('/user/<string:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify({"id": user.id, "name": user.name, "role": user.role}), 200
    else:
        return jsonify({"message": "User not found"}), 404
    
# シニアプロフィール取得エンドポイント
@users_bp.route('/senior-profile/<string:user_id>', methods=['GET'])
def get_senior_profile(user_id):
    profile = SeniorProfile.query.filter_by(user_id=user_id).first()
    if profile:
        return jsonify({
            "id": profile.id,
            "user_id": profile.user_id,
            "name": profile.name,
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
            "created_at": profile.created_at,
            "updated_at": profile.updated_at
        }), 200
    else:
        return jsonify({"message": "Senior profile not found"}), 404

# シニアユーザープロフィール
@users_bp.route('/register-senior', methods=['POST'])
def register_senior():
    data = request.json
    user_id = data['user_id']
    print(user_id)

    response = jsonify({'message': 'Profile created successfully'})
    return response, 201

    
# ユニオンユーザープロフィール

@users_bp.route('/union-profile/<string:user_id>', methods=['GET'])
def get_union_profile(user_id):
    profile = UnionProfile.query.filter_by(user_id=user_id).first()
    if profile:
        return jsonify({
            "id": profile.id,
            "user_id": profile.user_id,
            "union_name": profile.name,
            "representative_name": profile.representative_name,
            "address": profile.address,
            "date_of_foundation": profile.date_of_foundation,
            "overview": profile.overview,
            "created_at": profile.created_at,
            "updated_at": profile.updated_at
        }), 200
    else:
        return jsonify({"message": "Union profile not found"}), 404
    

@users_bp.route('/register-union', methods=['POST'])
def register_union():
    data = request.json
    user_id = data['user_id']
    print(user_id)

    response = jsonify({'message': 'Profile created successfully'})
    return response, 201
    
    # new_union = UnionProfile(
    #     user_id=data['user_id'],  # フロントから送られてくるユーザーID
    #     union_name=data['organizationName'],  # 団体名
    #     representative_name=data['representativeName'],  # 代表者名
    #     address=data['address'],  # フロントエンドで統合された address をそのまま使用
    #     date_of_foundation=datetime.strptime(data['establishmentDate'], '%Y-%m-%d').date(),  # 設立年月日
    #     overview=data['organizationOverview']  # 組織概要
    # )
    # db.session.add(new_union)
    # db.session.commit()
    # return jsonify({"message": "Union user registered successfully"}), 201  # ユニオンユーザー登録が成功しました

