# backend/app/__init__.py
from flask import Flask
from flask_cors import CORS
from app.utils.firebase_admin import initialize_firebase

def create_app():
    app = Flask(__name__)
    CORS(app)
    initialize_firebase()

    # Blueprintの登録
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    return app


