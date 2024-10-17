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
