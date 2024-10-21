from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# PostgreSQLデータベースの設定
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
db = SQLAlchemy(app)

# 求人モデルの定義
class JobPosting(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.String(100), nullable=False)

@app.route('/api/job-postings', methods=['POST'])
def create_job_posting():
    data = request.json
    new_job = JobPosting(
        title=data['title'],
        description=data['description'],
        location=data['location'],
        salary=data['salary']
    )
    db.session.add(new_job)
    db.session.commit()
    return jsonify({"message": "求人が正常に登録されました"}), 201

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)