import firebase_admin
from firebase_admin import credentials, auth

# Firebaseの認証情報を指定して初期化
cred = credentials.Certificate('path/to/serviceAccountKey.json')
firebase_admin.initialize_app(cred)
