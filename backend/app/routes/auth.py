# backend/app/routes/auth.py
# from flask import Blueprint, request, jsonify
# from app.services.auth_service import verify_token

# auth_bp = Blueprint('auth', __name__)

# @auth_bp.route('/api/verify-token', methods=['POST'])
# def verify_token_route():
#     try:
#         data = request.get_json()
#         token = data.get('token')
#         user_type = data.get('userType')  # 追加

#         result = verify_token(token, user_type)
#         status_code = 200 if result['success'] else 401
#         return jsonify(result), status_code
#     except Exception as e:
#         return jsonify({'success': False, 'message': str(e)}), 500


# backend/app/routes/auth.py

from flask import Blueprint, request, jsonify
from app.services.auth_service import register_user, login_user

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/register', methods=['POST'])
def register_route():
    try:
        data = request.get_json()
        token = data.get('token')
        user_data = data.copy()
        user_data.pop('token', None)

        result = register_user(token, user_data)
        status_code = 200 if result['success'] else 400
        return jsonify(result), status_code
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@auth_bp.route('/api/login', methods=['POST'])
def login_route():
    try:
        data = request.get_json()
        token = data.get('token')

        result = login_user(token)
        status_code = 200 if result['success'] else 401
        return jsonify(result), status_code
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
