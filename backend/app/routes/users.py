from flask import Blueprint, jsonify, request
from app.models.senior_profile import SeniorProfile
from app.models.union_profile import UnionProfile
from app import db
from datetime import datetime

users_bp = Blueprint('users', __name__)

# シニアユーザープロフィール
@users_bp.route('/register-senior', methods=['POST'])
def register_senior():
    data = request.json
    new_senior = SeniorProfile(
        user_id=data['user_id'],  # フロントから送られてくるデータに合わせて修正
        name=data['name'],
        address=data['address'],  # prefecture と city が統合された address
        age=int(data['age']),
        gender=data['gender'],
        career=data['career'],  # フロントエンドの "background" がバックエンドの "career" にマップ
        license=data['license']  # フロントエンドの "qualifications" がバックエンドの "license" にマップ
    )
    db.session.add(new_senior)
    db.session.commit()
    return jsonify({"message": "Senior user registered successfully"}), 201 # シニアユーザー登録が成功しました

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
