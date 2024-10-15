import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)

# CORSを追加
CORS(app)

# 環境変数から接続情報を取得
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

db = SQLAlchemy(app)

# ルート定義
@app.route('/')
def hello_world():
    return "Hello, World!"
# モック
@app.route('/api/mock', methods=['GET'])
def get_mock_data():
    data = {
        "message": "Hello from Flask API! If this text display, fornt connect API!",
        "status": "success"
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)

