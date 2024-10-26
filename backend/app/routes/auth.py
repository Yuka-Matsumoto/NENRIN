# backend/app/routes/auth.py
from flask import Blueprint, request, jsonify
from app.services.auth_service import register_user, get_user_type

auth_bp = Blueprint('auth', __name__)

def get_token_from_header():
    auth_header = request.headers.get('Authorization', '')
    if auth_header.startswith('Bearer '):
        return auth_header[len('Bearer '):]
    return None

@auth_bp.route('/api/register', methods=['POST'])
def register_route():
    print ('REGUSTER'),
    # token = get_token_from_header()
    # if not token:
    #     return jsonify({'success': False, 'message': 'Authorization token missing'}), 401

    data = request.get_json()
    user_data = data.copy() if data else {}
    print (data),
    result = register_user(data)
    # status_code = 200 if result['success'] else 400
    return jsonify([]), 200
    

@auth_bp.route('/api/get-user-type', methods=['POST'])
def get_user_type_route():
    token = get_token_from_header()
    if not token:
        return jsonify({'success': False, 'message': 'Authorization token missing'}), 401

    result = get_user_type(token)
    status_code = 200 if result['success'] else 401
    return jsonify(result), status_code

