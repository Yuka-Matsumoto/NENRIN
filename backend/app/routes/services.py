from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from marshmallow import Schema, fields, ValidationError

app = Flask(__name__)
CORS(app)

# PostgreSQLデータベースの設定
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# サービスモデルの定義
class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    service_name = db.Column(db.String(100), nullable=False)
    service_details = db.Column(db.Text, nullable=False)
    service_price = db.Column(db.Integer, nullable=False)

# バリデーション用のスキーマ
class ServiceSchema(Schema):
    service_name = fields.Str(required=True, validate=lambda x: len(x) <= 100)
    service_details = fields.Str(required=True)
    service_price = fields.Int(required=True, validate=lambda x: x >= 0)

# サービス登録APIエンドポイント
@app.route('/api/services', methods=['POST'])
def create_service():
    schema = ServiceSchema()
    try:
        # リクエストデータのバリデーション
        data = schema.load(request.json)
    except ValidationError as err:
        return jsonify(err.messages), 400

    # 新しいサービスの作成
    new_service = Service(
        service_name=data['service_name'],
        service_details=data['service_details'],
        service_price=data['service_price']
    )

    try:
        # データベースに保存
        db.session.add(new_service)
        db.session.commit()
        return jsonify({"message": "サービスが正常に登録されました", "id": new_service.id}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "サービスの登録に失敗しました", "error": str(e)}), 500

# サービス一覧取得APIエンドポイント
@app.route('/api/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    schema = ServiceSchema(many=True)
    return jsonify(schema.dump(services)), 200

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)