import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

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
    app.register_blueprint(search_bp)

    return app
