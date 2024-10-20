from app import db
import uuid
from datetime import datetime, timezone

class Application(db.Model):
    __tablename__ = 'applications'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    senior_profile_id = db.Column(db.String(36), db.ForeignKey('senior_profiles.id'), nullable=False)
    job_id = db.Column(db.String(36), db.ForeignKey('jobs.id'), nullable=False)
    status = db.Column(db.String(50), nullable=False)  # 応募ステータス
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

# シーディング用関数
def seed_applications():
    try:
        # サンプルデータを追加
        applications = [
            Application(
                senior_profile_id="b24dba7a-830c-4828-af74-711d6540ca8a",  # 高橋 健一
                job_id="491e591b-0076-47f3-a9a3-7292c80c0635",  # シニア向けプログラミング教室講師
                status="選考中",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  # 現在日時
            ),
            Application(
                senior_profile_id="9dbdc744-abc0-45cd-a68b-fdd605688cb3",  # 佐藤 花子
                job_id="09a874d7-57f8-4b8e-b3f7-2620a2963ac6",  # 英会話講師
                status="合格",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  # 現在日時
            ),
            Application(
                senior_profile_id="6043a52b-986b-4c6d-ad02-46f88a9b8ca5",  # 鈴木 大輔
                job_id="0ebb1f3e-e520-4545-9d9c-53cc26db85f0",  # 料理教室講師
                status="不合格",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  # 現在日時
            ),
            Application(
                senior_profile_id="0d9602b4-5cce-4fdf-84d1-a3117d8d02f3",  # 中村 美紀
                job_id="2b2aa94c-90c5-4f3a-afe4-802ce466961d",  # ガーデニング指導
                status="選考中",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  # 現在日時
            ),
            Application(
                senior_profile_id="c1c89acc-9989-4cdd-bffd-e0b5c4cff5e2",  # 小林 健二
                job_id="2500736e-2bab-4a20-b73f-09176d4d1b3f",  # ヨガ教室インストラクター
                status="合格",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  # 現在日時
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
    app = create_app()
    with app.app_context():
        seed_applications()