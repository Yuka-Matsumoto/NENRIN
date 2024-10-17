from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app.models import user  # モデルのインポート
