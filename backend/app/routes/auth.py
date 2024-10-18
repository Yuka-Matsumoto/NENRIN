from flask import Blueprint, request, jsonify
from firebase_admin import auth as firebase_auth
from .utils.firebase_admin import firebase_admin

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/auth/verify-token', methods=['POST'])
def verify_token():
    id_token = request.json.get('token')
    if not id_token:
        return jsonify({'error': 'Token is missing'}), 400

    try:
        # IDトークンの検証
        decoded_token = firebase_auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        return jsonify({'message': 'Token is valid', 'uid': uid}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 401
