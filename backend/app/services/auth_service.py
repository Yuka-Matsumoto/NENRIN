# backend/app/services/auth_service.py
from app.models.user import User
from app import db
from datetime import datetime, timezone
from firebase_admin import auth as firebase_auth  # Firebase Admin SDKでのトークン検証
import logging

# ユーザー登録関数
def register_user(user_data: dict):
    try:
        # UIDとEmailを取得し、Noneでないことを確認
        uid = user_data.get('uid')
        email = user_data.get('email')
        if not uid or not email:
            logging.error("UIDまたはEmailが提供されていません")
            return {'success': False, 'message': 'UID and Email are required'}

        # UIDでユーザーがすでに存在するか確認
        existing_user = User.query.filter_by(uid=uid).first()
        if existing_user:
            logging.info(f"User with UID {uid} already exists in the database.")
            return {'success': True, 'message': 'User already exists'}

        # 新しいユーザーを作成し、必要なフィールドを設定
        new_user = User(
            uid=uid,
            role=user_data.get('userType'),
            name=user_data.get('name'),
            address=user_data.get('address', ''),
            phone_number=user_data.get('phoneNumber', ''),
            email=email,  # emailを追加
            created_at=datetime.now(timezone.utc),
            updated_at=datetime.now(timezone.utc)
        )

        # ユーザーをデータベースに追加
        db.session.add(new_user)
        db.session.commit()
        
        logging.info("User successfully registered in the database.")
        return {'success': True, 'message': 'User registered successfully'}
    except Exception as e:
        logging.error(f"Error in register_user: {e}")
        return {'success': False, 'message': 'Registration failed'}

# ユーザータイプ取得関数
def get_user_type(token: str):
    try:
        # FirebaseトークンをデコードしてUIDを取得
        decoded_token = firebase_auth.verify_id_token(token)  # トークンのデコードを実行
        uid = decoded_token.get('uid')
        
        if not uid:
            logging.error("Token validation failed: UID not found")
            return {'success': False, 'message': 'Invalid token'}

        # UIDでユーザーを検索
        user = User.query.filter_by(uid=uid).first()
        if user:
            return {'success': True, 'userType': user.role}
        else:
            return {'success': False, 'message': 'User not found'}
    except Exception as e:
        logging.error(f"Error in get_user_type: {e}")
        return {'success': False, 'message': 'Authentication failed'}

# ユーザー情報取得関数
def get_user_info(token: str):
    try:
        # Firebaseトークンの検証
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token.get('uid')

        # UIDでユーザーを検索
        user = User.query.filter_by(uid=uid).first()
        if user:
            return {
                'success': True,
                'data': {
                    'uid': user.uid,
                    'name': user.name,
                    'role': user.role,
                    'address': user.address,
                    'phone_number': user.phone_number,
                    'email': user.email
                }
            }
        else:
            return {'success': False, 'message': 'User not found'}
    except Exception as e:
        logging.error(f"Error in get_user_info: {e}")
        return {'success': False, 'message': 'Failed to retrieve user info'}
