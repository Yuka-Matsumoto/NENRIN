from app import db
import uuid
from datetime import datetime, timezone

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    role = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200))
    phone_number = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

# シーディング用関数
def seed_users():
    users = [
        User(role="senior_user", name="高橋 健一", address="東京都港区南青山1-2-3", phone_number="03-1111-2222"),
        User(role="senior_user", name="佐藤 花子", address="神奈川県横浜市中区桜木町4-5-6", phone_number="045-3333-4444"),
        User(role="senior_user", name="鈴木 大輔", address="大阪府大阪市中央区難波7-8-9", phone_number="06-5555-6666"),
        User(role="senior_user", name="中村 美紀", address="愛知県名古屋市中区栄1-2-3", phone_number="052-7777-8888"),
        User(role="senior_user", name="小林 健二", address="福岡県福岡市中央区天神5-6-7", phone_number="092-9999-0000"),
        User(role="union_user", name="佐々木 亮太", address="東京都渋谷区代々木3-4-5", phone_number="03-1234-5678"),
        User(role="union_user", name="松本 美咲", address="大阪府大阪市北区梅田4-5-6", phone_number="06-2345-6789"),
        User(role="union_user", name="渡辺 翔太", address="愛知県名古屋市中村区名駅2-3-4", phone_number="052-3456-7890"),
        User(role="union_user", name="藤本 裕子", address="福岡県福岡市博多区博多駅前3-4-5", phone_number="092-4567-8901"),
        User(role="union_user", name="石井 隆志", address="北海道札幌市北区北7条西3-4-5", phone_number="011-5678-9012")
]
    db.session.bulk_save_objects(users)
    db.session.commit()
    print("10件のユーザーデータを追加しました。")


# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    app = create_app()  # Flaskアプリケーションを作成
    with app.app_context():  # アプリケーションコンテキストを設定
        seed_users()
