from flask import Blueprint, jsonify
from app.models import SeniorProfile

seniors_bp = Blueprint('seniors', __name__)

# シニアプロフィール取得エンドポイント
@seniors_bp.route('/<string:senior_id>', methods=['GET'])
def get_senior_by_id(senior_id):
    senior = SeniorProfile.query.filter_by(id=senior_id).first()
    if not senior:
        return jsonify({"error": "シニアが見つかりません"}), 404
    return jsonify({"senior_name": senior.union_name}), 200
    