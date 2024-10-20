from app import db
import uuid
from datetime import datetime, timezone

class Service(db.Model):
    __tablename__ = 'services'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    senior_profile_id = db.Column(db.String(36), db.ForeignKey('senior_profiles.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=True)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric, nullable=False)
    status = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    senior_profile = db.relationship('SeniorProfile', backref=db.backref('services', lazy=True))

# シーディング用関数
def seed_services():
    services = [
        Service(senior_profile_id="b24dba7a-830c-4828-af74-711d6540ca8a", name="プログラミング教室", description="初めてのプログラミングを学ぶための教室です。", price=5000, status="available"),
        Service(senior_profile_id="9dbdc744-abc0-45cd-a68b-fdd605688cb3", name="英会話レッスン", description="楽しく英会話を学べるプライベートレッスン。", price=7000, status="available"),
        Service(senior_profile_id="6043a52b-986b-4c6d-ad02-46f88a9b8ca5", name="料理教室", description="家庭料理を学ぶための教室。", price=6000, status="available"),
        Service(senior_profile_id="0d9602b4-5cce-4fdf-84d1-a3117d8d02f3", name="ガーデニング", description="初心者向けのガーデニングレッスン。", price=4000, status="available"),
        Service(senior_profile_id="c1c89acc-9989-4cdd-bffd-e0b5c4cff5e2", name="ヨガ教室", description="リラックスとストレッチを中心としたヨガ教室。", price=8000, status="available"),
        Service(senior_profile_id="b24dba7a-830c-4828-af74-711d6540ca8a", name="ITサポートサービス", description="シニア向けのITサポートを提供します。", price=3000, status="available"),
        Service(senior_profile_id="9dbdc744-abc0-45cd-a68b-fdd605688cb3", name="音楽レッスン", description="シニア向けの音楽レッスンを行います。", price=4500, status="available"),
        Service(senior_profile_id="6043a52b-986b-4c6d-ad02-46f88a9b8ca5", name="アートセラピー", description="アートを通じて心の健康を支えます。", price=5000, status="available"),
        Service(senior_profile_id="0d9602b4-5cce-4fdf-84d1-a3117d8d02f3", name="健康相談", description="シニア向けの健康相談を提供します。", price=2500, status="available"),
        Service(senior_profile_id="c1c89acc-9989-4cdd-bffd-e0b5c4cff5e2", name="フィットネスレッスン", description="シニア向けのフィットネスレッスンを行います。", price=3500, status="available")
    ]

    db.session.bulk_save_objects(services)
    db.session.commit()
    print("10件のサービスデータを追加しました。")

# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        seed_services()