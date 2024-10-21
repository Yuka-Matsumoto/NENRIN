# from firebase_admin import auth as firebase_auth
# from app.models.user import User
# from app.utils.db import db_session
# from datetime import datetime, timezone

# backend/app/services/auth_service.py
from firebase_admin import auth as firebase_auth
from app.models.user import User
from app.utils.db import db_session
from datetime import datetime, timezone

def register_user(token: str, user_data: dict):
    try:
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']

        user = db_session.query(User).filter_by(id=uid).first()
        if user:
            return {'success': False, 'message': 'User already exists'}

        user = User(
            id=uid,
            role=user_data.get('userType'),
            name=user_data.get('name'),
            address=user_data.get('address'),
            phone_number=user_data.get('phoneNumber'),
            created_at=datetime.now(timezone.utc),
            updated_at=datetime.now(timezone.utc)
        )
        db_session.add(user)
        db_session.commit()
        return {'success': True}
    except Exception as e:
        return {'success': False, 'message': str(e)}

def login_user(token: str):
    try:
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']
        user = db_session.query(User).filter_by(id=uid).first()

        if not user:
            return {'success': False, 'message': 'User not found'}

        return {'success': True, 'userType': user.role}
    except Exception as e:
        return {'success': False, 'message': str(e)}

def get_user_type(token: str):
    return login_user(token)




# def verify_token(token: str, user_data: dict = None):
#     try:
#         # ダミーのトークン検証
#         if token != "dummy_token_value":
#             return {'success': False, 'message': 'Invalid token'}

#         uid = "dummy_uid"  # ダミーUID

#         # 以下のユーザー検索とデータベース処理も同様にダミーに変更
#         user = None  # 実際にはdb_session.query(User).filter_by(id=uid).first()

#         if not user:
#             if user_data:
#                 user_type = user_data.get('userType')
#                 name = user_data.get('name')
#                 address = user_data.get('address', '')
#                 phone_number = user_data.get('phoneNumber', '')

#                 user = User(
#                     id=uid,
#                     role=user_type,
#                     name=name,
#                     address=address,
#                     phone_number=phone_number,
#                     created_at=datetime.now(timezone.utc),
#                     updated_at=datetime.now(timezone.utc)
#                 )
#                 # db_session.add(user)
#                 # db_session.commit()
#                 return {'success': True, 'user_id': user.id, 'user_type': user.role, 'new_user': True}
#             else:
#                 return {'success': False, 'message': 'User not found and no user data provided'}
#         else:
#             return {'success': True, 'user_id': user.id, 'user_type': user.role, 'new_user': False}
#     except Exception as e:
#         return {'success': False, 'message': str(e)}
