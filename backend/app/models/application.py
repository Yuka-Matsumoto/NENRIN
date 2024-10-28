from app import create_app, db
import uuid
from datetime import datetime, timezone

class Application(db.Model):
    __tablename__ = 'applications'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = db.Column(db.String(100), nullable=True)
    address = db.Column(db.String(200))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(10))
    industry = db.Column(db.String(50))
    job_title = db.Column(db.String(50))
    years_of_experience = db.Column(db.Integer)
    resume = db.Column(db.String(200), nullable=True)  # 任意項目（履歴書）
    work_history = db.Column(db.String(200), nullable=True)  # 任意項目（職務経歴書）
    photo = db.Column(db.String(200), nullable=True)  # 任意項目（顔写真）
    job_id = db.Column(db.String(36), db.ForeignKey('jobs.id'), nullable=False)  # 外部キー（Jobsテーブル）
    senior_profile_id = db.Column(db.String(36), db.ForeignKey('senior_profiles.id'), nullable=False)  # 外部キー（SeniorProfile）
    status = db.Column(db.String(20), nullable=False, default="選考中")  # 応募ステータス

    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    # Jobsとのリレーション
    job = db.relationship('Job', backref=db.backref('applications', lazy=True))
    # SeniorProfileとのリレーション
    senior_profile = db.relationship('SeniorProfile', backref=db.backref('applications', lazy=True))

# def upgrade():
#     # applicationsテーブルにstatusカラムを追加
#     with op.batch_alter_table('applications', schema=None) as batch_op:
#         batch_op.add_column(sa.Column('status', sa.String(length=20), nullable=False, server_default='選考中'))

# def downgrade():
#     # applicationsテーブルからstatusカラムを削除
#     with op.batch_alter_table('applications', schema=None) as batch_op:
#         batch_op.drop_column('status')

# シーディング用関数
def seed_applications():
    try:
        # サンプルデータを追加
        job_id = "c83da707-ead0-4416-8028-12e84ecfb063"  # 同じ求人IDに応募
        
        applications = [
            Application(
                senior_profile_id="ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f",  # 高橋 健一
                job_id=job_id, 
                status="選考中",  # 応募ステータス
                resume="resume_takahashi.pdf",  # 任意の履歴書ファイル名
                work_history="work_history_takahashi.pdf",  # 任意の職務経歴書ファイル名
                photo="photo_takahashi.jpg",  # 任意の写真ファイル名
                created_at=datetime.now(timezone.utc)
            ),
            Application(
                senior_profile_id="6f9adb57-203e-41ec-b0d6-49f4b52fdd9f",  # 佐藤 花子
                job_id=job_id, 
                status="合格",  # 応募ステータス
                resume="resume_sato.pdf",  # 任意の履歴書ファイル名
                work_history="work_history_sato.pdf",  # 任意の職務経歴書ファイル名
                photo="photo_sato.jpg",  # 任意の写真ファイル名
                created_at=datetime.now(timezone.utc)
            ),
            Application(
                senior_profile_id="89373fbc-04df-4918-aceb-debce655337b",  # 鈴木 大輔
                job_id=job_id, 
                status="不合格",  # 応募ステータス
                resume="resume_suzuki.pdf",  # 任意の履歴書ファイル名
                work_history="work_history_suzuki.pdf",  # 任意の職務経歴書ファイル名
                photo="photo_suzuki.jpg",  # 任意の写真ファイル名
                created_at=datetime.now(timezone.utc)
            ),
            Application(
                senior_profile_id="0e393f7e-90c3-42f5-a677-5832dc4b62cc",  # 中村 美紀
                job_id=job_id, 
                status="選考中",  # 応募ステータス
                resume="resume_nakamura.pdf",  # 任意の履歴書ファイル名
                work_history="work_history_nakamura.pdf",  # 任意の職務経歴書ファイル名
                photo="photo_nakamura.jpg",  # 任意の写真ファイル名
                created_at=datetime.now(timezone.utc)
            ),
            Application(
                senior_profile_id="5d84419e-8986-4b71-9842-b26b87a68fee",  # 小林 健二
                job_id=job_id, 
                status="合格",  # 応募ステータス
                resume="resume_kobayashi.pdf",  # 任意の履歴書ファイル名
                work_history="work_history_kobayashi.pdf",  # 任意の職務経歴書ファイル名
                photo="photo_kobayashi.jpg",  # 任意の写真ファイル名
                created_at=datetime.now(timezone.utc)
            )
        ]

        # 新しいデータを挿入
        db.session.bulk_save_objects(applications)
        db.session.commit()
        print("新しい応募データのシードデータを挿入しました。")
    
    except Exception as e:
        db.session.rollback()  # エラー発生時にロールバック
        print(f"エラーが発生しました: {e}")

# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    app = create_app()  # アプリケーションインスタンスを作成
    with app.app_context():  # アプリケーションコンテキストを作成
        seed_applications()  # シーディングを実行
