from flask import Blueprint, jsonify, request
from app.models.senior_profile import SeniorProfile
from app.models.union_profile import UnionProfile
from app import db
from datetime import datetime

users_bp = Blueprint('users', __name__)

# シニアユーザープロフィール
@users_bp.route('/register-senior', methods=['POST', 'OPTIONS'])
def register_senior():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'CORS preflight successful'}), 200

    data = request.json
    new_senior = SeniorProfile(
        user_id=data['user_id'],  # フロントから送られてくるデータに合わせて修正
        name=data['name'],
        address=data['address'],
        age=int(data['age']),
        gender=data['gender'],
        industry=data['industry'],  # 業種を追加
        job_title=data['job_title'],  # 職種を追加
        years_of_experience=int(data['years_of_experience']),  # 経験年数を追加
        currently_employed=data['currently_employed'],  # 現在仕事をしていますか？
        currently_studying=data['currently_studying'],  # 現在勉強をしていますか？
        has_hobby=data['has_hobby'],  # 趣味はありますか？
        lives_alone=data['lives_alone'],  # 一人暮らしですか？
        goes_out_once_a_week=data['goes_out_once_a_week'],  # 週一日以上外出しますか？
    )
    db.session.add(new_senior)
    db.session.commit()
    return jsonify({"message": "Senior user registered successfully"}), 201

# ユニオンユーザープロフィール
@users_bp.route('/register-union', methods=['POST'])
def register_union():
    data = request.json
    
    new_union = UnionProfile(
        user_id=data['user_id'],  # フロントから送られてくるユーザーID
        union_name=data['organizationName'],  # 団体名
        representative_name=data['representativeName'],  # 代表者名
        address=data['address'],  # フロントエンドで統合された address をそのまま使用
        date_of_foundation=datetime.strptime(data['establishmentDate'], '%Y-%m-%d').date(),  # 設立年月日
        overview=data['organizationOverview']  # 組織概要
    )
    db.session.add(new_union)
    db.session.commit()
    return jsonify({"message": "Union user registered successfully"}), 201  # ユニオンユーザー登録が成功しました

@users_bp.route('/user', methods=['GET'])
def get_user():
    if current_user.is_authenticated:  # 認証されたユーザーか確認
        user_data = {
            'id': current_user.id,
            'name': current_user.name,
            'role': current_user.role
        }
        return jsonify(user_data), 200
    return jsonify({'error': 'Unauthorized'}), 401