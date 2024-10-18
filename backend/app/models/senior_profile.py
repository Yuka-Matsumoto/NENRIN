# プロフィールモデル（シニア）

from app import db
import uuid
from datetime import datetime, timezone

class SeniorProfile(db.Model):
    __tablename__ = 'senior_profiles'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(10))
    career = db.Column(db.Text)
    license = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    user = db.relationship('User', backref=db.backref('senior_profiles', lazy=True))

# シードデータを追加する関数
def seed_senior_profiles():
    if SeniorProfile.query.count() == 0:
        sample_senior_profile = SeniorProfile(
            user_id="09887bd5-1e06-4dd5-9ada-85b28d75eb21",
            name="Sample Senior User",
            address="123 Senior Street",
            age=65,
            gender="Male",
            career="Retired professional with 40 years of experience in IT",
            license="Certified Engineer"
        )
        db.session.add(sample_senior_profile)
        db.session.commit()
        print("Senior profilesのシードデータを挿入しました。")
    else:
        print("Senior profilesのシードデータは既に存在します。")
