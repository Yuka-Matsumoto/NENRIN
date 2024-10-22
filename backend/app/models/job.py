# 求人モデル

from app import db
import uuid
from datetime import datetime, timezone

class Job(db.Model):
    __tablename__ = 'jobs'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    union_profile_id = db.Column(db.String(36), db.ForeignKey('union_profiles.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.Numeric, nullable=False)
    status = db.Column(db.String(50), nullable=False, default='open')
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    union_profile = db.relationship('UnionProfile', backref=db.backref('jobs', lazy=True))

# シーディング用関数
def seed_jobs():
    if Job.query.count() == 0:
        sample_job = Job(
            union_profile_id="79d3e024-e9d8-404d-800f-1bba42ce3a09",
            title="Sample Job Title",
            description="This is a sample job description.",
            location="Tokyo",
            salary=50000,
            status="open"
        )
        db.session.add(sample_job)
        db.session.commit()
        print("jobsテーブルにシードデータを挿入しました。")
    else:
        print("jobsテーブルには既にデータが存在します。")


