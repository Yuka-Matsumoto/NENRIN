from app import db
import uuid
from datetime import datetime, timezone

class UnionProfile(db.Model):
    __tablename__ = 'union_profiles'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    union_name = db.Column(db.String(100), nullable=False)
    representative_name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200))
    date_of_foundation = db.Column(db.Date)
    overview = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    user = db.relationship('User', backref=db.backref('union_profiles', lazy=True))

def seed_union_profiles():
    if UnionProfile.query.count() == 0:
        # サンプルのUnionProfileを追加
        sample_union_profile = UnionProfile(
            user_id="既存のユーザーIDを指定してください",
            union_name="Sample Union",
            representative_name="John Doe",
            address="123 Union St",
            date_of_foundation="2020-01-01",
            overview="Sample union profile overview."
        )
        db.session.add(sample_union_profile)
        db.session.commit()
        print("Union profilesのシードデータを挿入しました。")
    else:
        print("Union profilesのシードデータは既に存在します。")
