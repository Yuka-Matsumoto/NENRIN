from flask import Flask
from app.routes import auth_bp  # 他のBlueprintもインポート
from app.utils.firebase_admin import initialize_firebase

def create_app():
    app = Flask(__name__)

    # Firebase初期化
    initialize_firebase()

    # Blueprintの登録
    app.register_blueprint(auth_bp)

    # # 他の設定や拡張機能の初期化

    # return app
