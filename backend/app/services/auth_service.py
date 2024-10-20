from firebase_admin import auth as firebase_auth
from app.models.user import User
from app.utils.db import db_session
from datetime import datetime, timezone

def verify_token(token: str, user_data: dict = None):
    try:
        # Firebaseトークンの検証
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']

        # データベースでユーザーを検索
        user = db_session.query(User).filter_by(id=uid).first()

        if not user:
            if user_data:
                # 新規ユーザーの場合、データベースにユーザーを作成
                user_type = user_data.get('userType')
                name = user_data.get('name')
                address = user_data.get('address', '')
                phone_number = user_data.get('phoneNumber', '')

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
                return {'success': True, 'user_id': user.id, 'user_type': user.role, 'new_user': True}
            else:
                # ユーザーが存在せず、ユーザーデータがない場合はエラー
                return {'success': False, 'message': 'User not found and no user data provided'}
        else:
            # 既存ユーザーの場合は、ユーザータイプを返す
            return {'success': True, 'user_id': user.id, 'user_type': user.role, 'new_user': False}
    except Exception as e:
        return {'success': False, 'message': str(e)}



