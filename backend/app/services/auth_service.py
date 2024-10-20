from firebase_admin import auth as firebase_auth
from app.models.user import User
from app.utils.db import db_session

def verify_token(token: str, user_type: str = None):
    try:
        decoded_token = firebase_auth.verify_id_token(token)
        uid = decoded_token['uid']
        email = decoded_token.get('email')

        user = db_session.query(User).filter_by(firebase_uid=uid).first()

        if not user:
            # 新規ユーザーの場合、データベースにユーザーを作成
            user = User(firebase_uid=uid, email=email, user_type=user_type)
            db_session.add(user)
            db_session.commit()
            return {'success': True, 'user_id': user.id, 'email': user.email, 'new_user': True}
        else:
            return {'success': True, 'user_id': user.id, 'email': user.email, 'new_user': False}
    except Exception as e:
        return {'success': False, 'message': str(e)}
