from flask import Blueprint, jsonify
from app.models.service import Service

# Blueprintの作成
services_bp = Blueprint('services', __name__)

# 個別サービス情報取得エンドポイント
@services_bp.route('/services/<service_id>', methods=['GET'])
def get_service(service_id):
    service = Service.query.filter_by(id=service_id).first()
    if service:
        return jsonify({
            'id': service.id,
            'name': service.name,
            'category': service.category,
            'description': service.description,
            'price': service.price,
            'status': service.status,
            'created_at': service.created_at,
            'updated_at': service.updated_at,
        }), 200
    return jsonify({'message': 'Service not found'}), 404
