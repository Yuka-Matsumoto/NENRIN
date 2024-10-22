# backend/app/utils/firebase_admin.py
import firebase_admin
from firebase_admin import credentials
import os

def initialize_firebase():
    if not firebase_admin._apps:
        cred_path = os.environ.get('FIREBASE_SERVICE_ACCOUNT_KEY_PATH', 'path/to/serviceAccountKey.json')
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)