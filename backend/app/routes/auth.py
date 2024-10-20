from flask import Blueprint, request, jsonify
from app.services.auth_service import verify_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/verify-token', methods=['POST'])
def verify_token_route():
    try:
        data = request.get_json()
        token = data.get('token')
        user_data = data.copy()
        user_data.pop('token', None)

        result = verify_token(token, user_data if user_data else None)
        status_code = 200 if result['success'] else 401
        return jsonify(result), status_code
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


