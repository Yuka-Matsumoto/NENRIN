import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

# 環境変数から接続情報を取得
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

# データベースとマイグレーションの設定
db = SQLAlchemy(app)
migrate = Migrate(app, db)  # Flask-MigrateとSQLAlchemyを関連付け

# ルート定義
@app.route('/')
def hello_world():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')