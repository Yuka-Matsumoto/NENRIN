# backend/app/utils/firebase_admin.py
# import firebase_admin
# from firebase_admin import credentials
# import os

# def initialize_firebase():
#     if not firebase_admin._apps:
#         cred_path = os.environ.get('FIREBASE_SERVICE_ACCOUNT_KEY')
#         cred = credentials.Certificate(cred_path)
#         firebase_admin.initialize_app(cred)

# -----------------------------------------------------
# backend/app/utils/firebase_admin.py
import firebase_admin
from firebase_admin import credentials
import json
import os

def initialize_firebase():
    if not firebase_admin._apps:
        # 環境変数からサービスアカウントキーのJSON文字列を取得
        service_account_info = os.environ.get('FIREBASE_SERVICE_ACCOUNT_KEY')

        # JSON文字列をPythonの辞書型に変換
        cred_dict = json.loads(service_account_info)

        # Firebaseの初期化
        cred = credentials.Certificate(cred_dict)
        firebase_admin.initialize_app(cred)
