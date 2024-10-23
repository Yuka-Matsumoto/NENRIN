import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

# backend/app/models/__init__.py
from .user import User
from .senior_profile import SeniorProfile
from .union_profile import UnionProfile
from .job import Job
from .service import Service


# SQLAlchemy と Migrate のインスタンス作成
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    # CORSを有効にする
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

    # 環境変数から接続情報を取得
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

    # SQLAlchemyとFlask-Migrateをアプリに初期化
    db.init_app(app)
    migrate.init_app(app, db)

    # ルートやBlueprintを登録
    from app.routes.search import search_bp
    from app.routes.users import users_bp
    from app.routes.services import services_bp
    from app.routes.jobs import jobs_bp

    app.register_blueprint(search_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(services_bp)
    app.register_blueprint(jobs_bp)

    return app
