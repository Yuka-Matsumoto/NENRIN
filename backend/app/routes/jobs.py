from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from app.models.job import Job  # データベースモデルをインポート

app = Flask(__name__)
CORS(app)

# PostgreSQLデータベースの設定
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
db = SQLAlchemy(app)

# 求人の登録エンドポイント
@app.route('/api/job-postings', methods=['POST'])
def create_job_posting():
    data = request.json
    try:
        new_job = Job(
            union_profile_id=data['union_profile_id'],  # フロントから送られる union_profile_id を使用
            title=data['title'],
            description=data['description'],
            location=data['location'],
            salary=float(data['salary']),  # salary を数値として処理
            status="open"  # デフォルトで "open" 状態に設定
        )
        db.session.add(new_job)
        db.session.commit()
        return jsonify({"message": "求人が正常に登録されました"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    db.create_all()  # テーブルが存在しない場合に作成
    app.run(debug=True)
