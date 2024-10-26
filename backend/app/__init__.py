
from flask import Flask  # Flaskをインポート

import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
# from app.utils.db_config import db
from app.utils.firebase_admin import initialize_firebase  # 追加
from dotenv import load_dotenv

# SQLAlchemy と Migrate のインスタンス作成
# app = Flask(__name__)
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    load_dotenv()
    app = Flask(__name__)

    # Firebase Admin SDKの初期化
    initialize_firebase()  # 追加

    # CORSを有効にする
    CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})

    # 環境変数から接続情報を取得
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

    # SQLAlchemyとFlask-Migrateをアプリに初期化
    db.init_app(app)
    migrate.init_app(app, db)

    # ルートやBlueprintを登録
    from app.routes.search import search_bp
    from app.routes.users import users_bp
    from app.routes.jobs import jobs_bp
    from app.routes.services import services_bp  # services_bpをインポート
    from app.routes.applications import applications_bp  # applications_bpをインポート
    from app.routes.apply import apply_bp  # apply_bpをインポート
    from app.routes.unions import unions_bp

    app.register_blueprint(search_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(jobs_bp)
    app.register_blueprint(services_bp)  # services_bpを登録
    app.register_blueprint(applications_bp, url_prefix='/applications')  # applications_bpを登録
    app.register_blueprint(apply_bp)
    app.register_blueprint(unions_bp, url_prefix='/unions')

    # Blueprintの登録
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    return app

# アプリケーションのインスタンスを作成
app = create_app()
