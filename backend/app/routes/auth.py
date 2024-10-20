from flask import Blueprint, request, jsonify
from app.services.auth_service import verify_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/verify-token', methods=['POST'])
def verify_token_route():
    try:
        data = request.get_json()
        token = data.get('token')
        user_type = data.get('userType')  # 追加

        result = verify_token(token, user_type)
        status_code = 200 if result['success'] else 401
        return jsonify(result), status_code
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

