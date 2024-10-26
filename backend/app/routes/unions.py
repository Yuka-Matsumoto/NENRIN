from flask import Blueprint, jsonify
from app.models import UnionProfile  # UnionProfileモデルが存在することを確認

unions_bp = Blueprint('unions', __name__)

@unions_bp.route('/<string:union_id>', methods=['GET'])
def get_union_by_id(union_id):
    union = UnionProfile.query.filter_by(id=union_id).first()
    if not union:
        return jsonify({"error": "団体が見つかりません"}), 404
    return jsonify({"union_name": union.union_name}), 200
