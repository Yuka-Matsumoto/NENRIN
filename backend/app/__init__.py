from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from app.utils.firebase_admin import initialize_firebase  # Firebaseの初期化
from dotenv import load_dotenv


# SQLAlchemy と Migrate のインスタンス作成
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    load_dotenv()
    app = Flask(__name__)

    # Firebase Admin SDKの初期化
    initialize_firebase()

    # CORSを有効にする
    CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})

    # 環境変数から接続情報を取得
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

    db.init_app(app)
    migrate.init_app(app, db)
   
    # `db` を `app` モジュールに含める
    __all__ = ['db']

    # モデルのインポート
    with app.app_context():
        from app import models  # modelsパッケージのインポートをここで行う

    # ルートやBlueprintを登録
    from app.routes.search import search_bp
    from app.routes.users import users_bp
    from app.routes.jobs import jobs_bp
    from app.routes.services import services_bp
    from app.routes.applications import applications_bp
    from app.routes.apply import apply_bp
    from app.routes.unions import unions_bp
    from app.routes.auth import auth_bp
    from app.routes.profile import profile_bp
    from app.routes.messages import messages_bp

    app.register_blueprint(search_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(jobs_bp)
    app.register_blueprint(services_bp)
    app.register_blueprint(applications_bp, url_prefix='/applications')
    app.register_blueprint(apply_bp)
    app.register_blueprint(unions_bp, url_prefix='/unions')
    app.register_blueprint(auth_bp)
    app.register_blueprint(profile_bp)
    app.register_blueprint(messages_bp, url_prefix='/messages')

    return app

app = create_app()