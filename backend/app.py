import os
from flask import Flask
from flask_cors import CORS 
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.routes.users import users_bp
from app.routes.jobs import jobs_bp
from app.routes.services import services_bp

app = Flask(__name__)

# CORSを設定してフロントエンドからのリクエストを許可
CORS(app)

# 環境変数から接続情報を取得
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

# データベースとマイグレーションの設定
db = SQLAlchemy()  # db =SQLAlchemy(app)を変更した
migrate = Migrate(app, db)  # Flask-MigrateとSQLAlchemyを関連付け

# Blueprintをアプリに登録
app.register_blueprint(users_bp, url_prefix='/api')  #　/api/resister-seniorエンドポイントが有効になる
app.register_blueprint(jobs_bp, url_prefix='/api')  # /api/job-posting
app.register_blueprint(services_bp, url_prefix='/api') #  /api/services


# ログ出力で確認
print("Before db.init_app")
# SQLAlchemyをFlaskアプリに関連付ける
db.init_app(app)
# ログ出力で確認
print("After db.init_app")

# ルート定義
@app.route('/')
def hello_world():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)