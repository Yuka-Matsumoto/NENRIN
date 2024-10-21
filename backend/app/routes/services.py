from flask import Blueprint, jsonify, request
from app.models.service import Service  # データベースモデルをインポート
from app import db  # app.py からインポート

# Blueprintの定義
services_bp = Blueprint('services', __name__)

# サービス登録APIエンドポイント
@services_bp.route('/services', methods=['POST'])
def create_service():
    data = request.json
    try:
        new_service = Service(
            senior_profile_id=data['senior_profile_id'],  # フロントエンドから送られる senior_profile_id
            name=data['name'],
            category=data.get('category', None),  # category はオプション
            description=data['description'],
            price=float(data['price']),  # price を数値に変換
            status="available"  # デフォルトで "available" 状態に設定
        )
        db.session.add(new_service)
        db.session.commit()
        return jsonify({"message": "サービスが正常に登録されました", "id": new_service.id}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# サービス一覧取得APIエンドポイント
@services_bp.route('/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    services_list = [
        {
            "id": service.id,
            "name": service.name,
            "category": service.category,
            "description": service.description,
            "price": str(service.price),
            "status": service.status
        }
        for service in services
    ]
    return jsonify(services_list), 200
