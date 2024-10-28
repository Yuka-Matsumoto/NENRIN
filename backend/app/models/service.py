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
        Service(senior_profile_id="ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f", name="プログラミング教室", category="教育", description="初めてのプログラミングを学ぶための教室です。", price=5000, status="available"),
        Service(senior_profile_id="6f9adb57-203e-41ec-b0d6-49f4b52fdd9f", name="英会話レッスン", category="教育", description="楽しく英会話を学べるプライベートレッスン。", price=7000, status="available"),
        Service(senior_profile_id="89373fbc-04df-4918-aceb-debce655337b", name="料理教室", category="教育", description="家庭料理を学ぶための教室。", price=6000, status="available"),
        Service(senior_profile_id="0e393f7e-90c3-42f5-a677-5832dc4b62cc", name="ガーデニング", category="趣味", description="初心者向けのガーデニングレッスン。", price=4000, status="available"),
        Service(senior_profile_id="5d84419e-8986-4b71-9842-b26b87a68fee", name="ヨガ教室", category="フィットネス", description="リラックスとストレッチを中心としたヨガ教室。", price=8000, status="available"),
        Service(senior_profile_id="ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f", name="ITサポートサービス", category="技術", description="シニア向けのITサポートを提供します。", price=3000, status="available"),
        Service(senior_profile_id="6f9adb57-203e-41ec-b0d6-49f4b52fdd9f", name="音楽レッスン", category="教育", description="シニア向けの音楽レッスンを行います。", price=4500, status="available"),
        Service(senior_profile_id="89373fbc-04df-4918-aceb-debce655337b", name="アートセラピー", category="メンタルヘルス", description="アートを通じて心の健康を支えます。", price=5000, status="available"),
        Service(senior_profile_id="0e393f7e-90c3-42f5-a677-5832dc4b62cc", name="健康相談", category="健康", description="シニア向けの健康相談を提供します。", price=2500, status="available"),
        Service(senior_profile_id="5d84419e-8986-4b71-9842-b26b87a68fee", name="フィットネスレッスン", category="フィットネス", description="シニア向けのフィットネスレッスンを行います。", price=3500, status="available")
    ]

    db.session.bulk_save_objects(services)
    db.session.commit()
    print("10件のサービスデータを追加しました。")

# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    # from app import create_app
    app = create_app()
    with app.app_context():
        seed_services()
