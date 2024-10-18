# サービスモデル

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
    if Service.query.count() == 0:
        # サンプルサービスデータを追加
        sample_service = Service(
            senior_profile_id="5e91334f-4405-4f96-969d-4ede117ed2c3",
            name="Sample Service",
            category="Consulting",
            description="Sample service description.",
            price=5000,
            status="available"
        )
        db.session.add(sample_service)
        db.session.commit()
        print("Servicesのシードデータを挿入しました。")
    else:
        print("Servicesのシードデータは既に存在します。")
