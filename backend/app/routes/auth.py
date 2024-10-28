# backend/app/routes/auth.py
from flask import Blueprint, request, jsonify
from app.services.auth_service import register_user, get_user_type, get_user_info  # get_user_infoをインポート
import logging

auth_bp = Blueprint('auth', __name__)

def get_token_from_header():
    auth_header = request.headers.get('Authorization', '')
    if auth_header.startswith('Bearer '):
        return auth_header[len('Bearer '):]
    return None

@auth_bp.route('/api/register', methods=['POST', 'OPTIONS'])
def register_route():
    if request.method == 'OPTIONS':
        return jsonify({"message": "CORS preflight successful"}), 200

    logging.info("Register route called")

    # リクエストデータを取得し、内容をログに出力
    data = request.get_json()
    if not data:
        logging.error("No data provided for registration")
        return jsonify({'success': False, 'message': 'No data provided'}), 400

    # 必須フィールドが含まれているかチェック
    uid = data.get("uid")
    email = data.get("email")
    if not uid or not email:
        logging.error("UIDまたはEmailが提供されていません")
        return jsonify({'success': False, 'message': 'UID and email are required'}), 400

    # 登録処理を呼び出し
    result = register_user(data)
    status_code = 200 if result['success'] else 400
    return jsonify(result), status_code

@auth_bp.route('/api/get-user-type', methods=['POST'])
def get_user_type_route():
    token = get_token_from_header()
    if not token:
        logging.error("Authorization token missing in get-user-type route")
        return jsonify({'success': False, 'message': 'Authorization token missing'}), 401

    result = get_user_type(token)
    status_code = 200 if result['success'] else 401
    return jsonify(result), status_code

# ユーザーがログインした際に、ユーザーのプロフィール情報（IDやその他の属性）を取得できるエンドポイント
@auth_bp.route('/api/get-user-info', methods=['POST'])
def get_user_info_route():
    token = get_token_from_header()
    if not token:
        logging.error("Authorization token missing in get-user-info route")
        return jsonify({'success': False, 'message': 'Authorization token missing'}), 401

    # ユーザー情報の取得処理
    user_info = get_user_info(token)  # auth_service.pyからの呼び出し
    logging.info(f"User info retrieved: {user_info}")
    if user_info['success']:
        return jsonify({'success': True, 'userInfo': user_info['data']}), 200  # user_info['data']にはuidなど必要な情報を含める
    else:
        logging.error(f"Failed to retrieve user info: {user_info}")
        return jsonify(user_info), 401
