# ユーザーモデル（シニアと団体）

from app import db
import uuid
from datetime import datetime, timezone

class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    role = db.Column(db.String(50), nullable=False)  # シニアか団体か
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200))
    phone_number = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))  # タイムゾーン対応
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

def seed_users():
    if User.query.count() == 0:
        # サンプルユーザーを追加
        senior_user = User(
            role="senior_user",
            name="Senior Sample User",
            address="456 Senior Ave",
            phone_number="987-654-3210"
        )
        
        union_user = User(
            role="union_user",
            name="Union Sample User",
            address="789 Union Blvd",
            phone_number="555-555-5555"
        )

        db.session.add(senior_user)
        db.session.add(union_user)
        db.session.commit()
        print("シードデータを挿入しました。")
    else:
        print("既にユーザーが存在します。")
