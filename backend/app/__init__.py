# backend/app/__init__.py
from flask import Flask
from app.routes.auth import auth_bp  # 必要なBlueprintをインポート
from app.utils.firebase_admin import initialize_firebase

def create_app():
    app = Flask(__name__)

    # Firebaseの初期化
    initialize_firebase()

    # Blueprintの登録
    app.register_blueprint(auth_bp)

    # 他の設定や拡張機能の初期化

    return app

