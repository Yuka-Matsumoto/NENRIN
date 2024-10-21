from app import db, create_app
import uuid
from datetime import datetime, timezone

class Job(db.Model):
    __tablename__ = 'jobs'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    union_profile_id = db.Column(db.String(36), db.ForeignKey('union_profiles.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)  # 求人タイトル
    job_title = db.Column(db.String(50), nullable=False)  # 職種
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.Numeric, nullable=False)
    status = db.Column(db.String(50), nullable=False, default='open')
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
    industry = db.Column(db.String(50), nullable=True)  # NULLを許容する

    union_profile = db.relationship('UnionProfile', backref=db.backref('jobs', lazy=True))

# industry が NULL のデータにデフォルト値を設定する関数
def fill_industry_for_null_jobs():
    jobs_with_null_industry = Job.query.filter(Job.industry == None).all()
    for job in jobs_with_null_industry:
        job.industry = "IT"  # デフォルト値を設定
    db.session.commit()
    print(f"{len(jobs_with_null_industry)} 件のレコードにデフォルトの industry データを設定しました。")
    
# job_title が NULL のデータにデフォルト値を設定する関数
def fill_job_title_for_null_or_empty_jobs():
    jobs_with_null_or_empty_job_title = Job.query.filter(
        (Job.job_title == None) | (Job.job_title == "")
    ).all()
    for job in jobs_with_null_or_empty_job_title:
        job.job_title = "講師"  # デフォルト値を設定
    db.session.commit()
    print(f"{len(jobs_with_null_or_empty_job_title)} 件のレコードにデフォルトの job_title データを設定しました。")

# サンプルの求人データを追加する関数
def seed_jobs():
    jobs = [
        Job(union_profile_id="12195565-18e5-4b2f-9d87-4fdfc63ed039", title="シニア向けプログラミング教室講師", job_title="講師", description="シニア向けのプログラミング教室で講師を募集します。", location="東京都", salary=3000.00, status="available", industry="教育"),
        Job(union_profile_id="160a5dd2-aee4-411c-ba8f-985fbb8272d9", title="英会話講師", job_title="講師", description="初心者向けの英会話講座の講師を募集します。", location="神奈川県", salary=3500.00, status="available", industry="教育"),
        Job(union_profile_id="c5d92b23-4afe-4da7-a48d-46bf030c9bb9", title="料理教室講師", job_title="講師", description="料理を教える教室の講師を募集しています。", location="大阪府", salary=2500.00, status="available", industry="料理"),
        Job(union_profile_id="38c64314-219d-4230-b6e3-1128c1f8fe70", title="ガーデニング指導", job_title="指導者", description="ガーデニングの技術を教える指導者を募集中。", location="愛知県", salary=2000.00, status="available", industry="農業"),
        Job(union_profile_id="dc9b95ba-ac69-4a2a-8a1f-e66ef9065e87", title="ヨガ教室インストラクター", job_title="インストラクター", description="リラックスしたヨガ教室のインストラクターを探しています。", location="福岡県", salary=4000.00, status="available", industry="健康"),
        Job(union_profile_id="12195565-18e5-4b2f-9d87-4fdfc63ed039", title="ITサポート", job_title="スタッフ", description="シニア向けのITサポートを提供するスタッフを募集。", location="東京都", salary=2800.00, status="available", industry="IT"),
        Job(union_profile_id="160a5dd2-aee4-411c-ba8f-985fbb8272d9", title="音楽教室講師", job_title="講師", description="音楽を教える講師を募集します。", location="北海道", salary=3000.00, status="available", industry="音楽"),
        Job(union_profile_id="c5d92b23-4afe-4da7-a48d-46bf030c9bb9", title="アート教室講師", job_title="講師", description="アートを教える教室の講師を募集しています。", location="埼玉県", salary=3200.00, status="available", industry="アート"),
        Job(union_profile_id="38c64314-219d-4230-b6e3-1128c1f8fe70", title="健康相談員", job_title="相談員", description="シニア向けの健康相談を行うスタッフを募集中。", location="東京都", salary=3500.00, status="available", industry="健康"),
        Job(union_profile_id="dc9b95ba-ac69-4a2a-8a1f-e66ef9065e87", title="フィットネスインストラクター", job_title="インストラクター", description="シニア向けのフィットネス教室のインストラクターを探しています。", location="神奈川県", salary=3700.00, status="available", industry="健康")
    ]

    db.session.bulk_save_objects(jobs)
    db.session.commit()
    print("10件の求人データを追加しました。")

# アプリケーションコンテキストで削除とシーディングを実行
if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        fill_industry_for_null_jobs()  # industryがNULLのレコードにデフォルト値を設定
        fill_job_title_for_null_or_empty_jobs()  # job_titleがNULLまたは空のレコードにデフォルト値を設定
        seed_jobs()  # 新しいデータを追加
