from firebase_admin import auth as firebase_auth
from app.models.user import User
from app.utils.db import db_session
# import uuid
from datetime import datetime, timezone

def verify_token(token: str, user_data: dict):
    try:
        # Firebaseトークンの検証
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']
        user_type = user_data.get('userType')
        name = user_data.get('name')
        address = user_data.get('address', '')
        phone_number = user_data.get('phoneNumber', '')

        # データベースでユーザーを検索
        user = db_session.query(User).filter_by(id=uid).first()

        if not user:
            # 新規ユーザーの場合、データベースにユーザーを作成
            user = User(
                id=uid,  # FirebaseのUIDをPostgreSQLのユーザーIDとして使用
                role=user_type,
                name=name,
                address=address,
                phone_number=phone_number,
                created_at=datetime.now(timezone.utc),
                updated_at=datetime.now(timezone.utc)
            )
            db_session.add(user)
            db_session.commit()
            return {'success': True, 'user_id': user.id, 'new_user': True}
        
        # 既存ユーザーの場合は、データをそのまま返す
        return {'success': True, 'user_id': user.id, 'new_user': False}
    except Exception as e:
        return {'success': False, 'message': str(e)}


