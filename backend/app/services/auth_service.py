# backend/app/services/auth_service.py
# from firebase_admin import auth as firebase_auth
# from app.models.user import User
# from app.utils.db import get_db_session
# from datetime import datetime, timezone

# def register_user(token: str, user_data: dict):
#     try:
#         # 必要になった時点でインポート
#         db_session = get_db_session()
        
#         # Firebaseトークンの検証
#         decoded_token = firebase_auth.verify_id_token(token)
#         uid = decoded_token['uid']

#         # データベースでユーザーを検索
#         user = db_session.query(User).filter_by(id=uid).first()
#         if user:
#             return {'success': False, 'message': 'User already exists'}

#         user = User(
#             id=uid,
#             role=user_data.get('userType'),
#             name=user_data.get('name'),
#             address=user_data.get('address'),
#             phone_number=user_data.get('phoneNumber'),
#             created_at=datetime.now(timezone.utc),
#             updated_at=datetime.now(timezone.utc)
#         )
#         db_session.add(user)
#         db_session.commit()
#         return {'success': True}
#     except Exception as e:
#         return {'success': False, 'message': str(e)}

# def login_user(token: str):
#     try:
#         decoded_token = firebase_auth.verify_id_token(token)
#         uid = decoded_token['uid']
#         user = db_session.query(User).filter_by(id=uid).first()

#         if not user:
#             return {'success': False, 'message': 'User not found'}

#         return {'success': True, 'userType': user.role}
#     except Exception as e:
#         return {'success': False, 'message': str(e)}

# def get_user_type(token: str):
#     return login_user(token)

# ーーーーーーーーーーーーーーーーーーーーーーーーーーーー

# # backend/app/services/auth_service.py
# from firebase_admin import auth as firebase_auth
# from app.models.user import User
# from app.utils.db import get_db_session
# from datetime import datetime, timezone

# def register_user(token: str, user_data: dict):
#     try:
#         db_session = get_db_session()
#         decoded_token = firebase_auth.verify_id_token(token)
#         uid = decoded_token['uid']

#         user = db_session.query(User).filter_by(id=uid).first()
#         if user:
#             return {'success': False, 'message': 'User already exists'}

#         user = User(
#             id=uid,
#             role=user_data.get('userType'),
#             name=user_data.get('name'),
#             address=user_data.get('address'),
#             phone_number=user_data.get('phoneNumber'),
#             created_at=datetime.now(timezone.utc),
#             updated_at=datetime.now(timezone.utc)
#         )
#         db_session.add(user)
#         db_session.commit()
#         return {'success': True}
#     except Exception as e:
#         return {'success': False, 'message': str(e)}

# def login_user(token: str):
#     try:
#         db_session = get_db_session()
#         decoded_token = firebase_auth.verify_id_token(token)
#         uid = decoded_token['uid']

#         user = db_session.query(User).filter_by(id=uid).first()
#         if not user:
#             return {'success': False, 'message': 'User not found'}

#         return {'success': True, 'userType': user.role}
#     except Exception as e:
#         return {'success': False, 'message': str(e)}

# ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
# backend/app/services/auth_service.py

from firebase_admin import auth as firebase_auth
from app.models.user import User
from app.utils.db import db_session
from datetime import datetime, timezone
import logging

def register_user(token: str, user_data: dict):
    try:
        # Firebaseトークンの検証
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']
        email = decoded_token.get('email')

        # データベースでユーザーを検索
        user = User.query.filter_by(id=uid).first()
        if user:
            return {'success': False, 'message': 'User already exists'}

        # 新規ユーザーの作成
        user = User(
            id=uid,
            role=user_data.get('userType'),
            name=user_data.get('name'),
            address=user_data.get('address', ''),
            phone_number=user_data.get('phoneNumber', ''),
            created_at=datetime.now(timezone.utc),
            updated_at=datetime.now(timezone.utc)
        )
        db_session.add(user)
        db_session.commit()
        return {'success': True}
    except Exception as e:
        logging.error(f"Error in register_user: {e}")
        return {'success': False, 'message': 'Registration failed'}

def get_user_type(token: str):
    try:
        # Firebaseトークンの検証
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']

        # データベースからユーザーを取得
        user = User.query.filter_by(id=uid).first()
        if not user:
            return {'success': False, 'message': 'User not found'}

        return {'success': True, 'userType': user.role}
    except Exception as e:
        logging.error(f"Error in get_user_type: {e}")
        return {'success': False, 'message': 'Authentication failed'}

