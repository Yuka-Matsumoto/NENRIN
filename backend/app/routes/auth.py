# backend/app/routes/auth.py
from flask import Blueprint, request, jsonify
from app.services.auth_service import register_user, login_user, get_user_type

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    token = data.get('token')
    user_data = data.copy()
    user_data.pop('token', None)

    result = register_user(token, user_data)
    status_code = 200 if result['success'] else 400
    return jsonify(result), status_code

@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    token = data.get('token')

    result = login_user(token)
    status_code = 200 if result['success'] else 401
    return jsonify(result), status_code

@auth_bp.route('/api/get-user-type', methods=['POST'])
def get_user_type_route():
    data = request.get_json()
    token = data.get('token')

    result = get_user_type(token)
    status_code = 200 if result['success'] else 401
    return jsonify(result), status_code



