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

def seed_jobs():
    jobs = [
        Job(union_profile_id="12195565-18e5-4b2f-9d87-4fdfc63ed039", title="シニア向けプログラミング教室講師", description="シニア向けのプログラミング教室で講師を募集します。", location="東京都", salary=3000.00, status="available"),
        Job(union_profile_id="160a5dd2-aee4-411c-ba8f-985fbb8272d9", title="英会話講師", description="初心者向けの英会話講座の講師を募集します。", location="神奈川県", salary=3500.00, status="available"),
        Job(union_profile_id="c5d92b23-4afe-4da7-a48d-46bf030c9bb9", title="料理教室講師", description="料理を教える教室の講師を募集しています。", location="大阪府", salary=2500.00, status="available"),
        Job(union_profile_id="38c64314-219d-4230-b6e3-1128c1f8fe70", title="ガーデニング指導", description="ガーデニングの技術を教える指導者を募集中。", location="愛知県", salary=2000.00, status="available"),
        Job(union_profile_id="dc9b95ba-ac69-4a2a-8a1f-e66ef9065e87", title="ヨガ教室インストラクター", description="リラックスしたヨガ教室のインストラクターを探しています。", location="福岡県", salary=4000.00, status="available"),
        Job(union_profile_id="12195565-18e5-4b2f-9d87-4fdfc63ed039", title="ITサポート", description="シニア向けのITサポートを提供するスタッフを募集。", location="東京都", salary=2800.00, status="available"),
        Job(union_profile_id="160a5dd2-aee4-411c-ba8f-985fbb8272d9", title="音楽教室講師", description="音楽を教える講師を募集します。", location="北海道", salary=3000.00, status="available"),
        Job(union_profile_id="c5d92b23-4afe-4da7-a48d-46bf030c9bb9", title="アート教室講師", description="アートを教える教室の講師を募集しています。", location="埼玉県", salary=3200.00, status="available"),
        Job(union_profile_id="38c64314-219d-4230-b6e3-1128c1f8fe70", title="健康相談員", description="シニア向けの健康相談を行うスタッフを募集中。", location="東京都", salary=3500.00, status="available"),
        Job(union_profile_id="dc9b95ba-ac69-4a2a-8a1f-e66ef9065e87", title="フィットネスインストラクター", description="シニア向けのフィットネス教室のインストラクターを探しています。", location="神奈川県", salary=3700.00, status="available")
    ]

    db.session.bulk_save_objects(jobs)
    db.session.commit()
    print("10件の求人データを追加しました。")

    # アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        seed_jobs()