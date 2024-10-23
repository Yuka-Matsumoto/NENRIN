from app import create_app, db
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
        job_id = "c83da707-ead0-4416-8028-12e84ecfb063"  # 同じ求人IDに応募
        
        applications = [
            Application(
                senior_profile_id="ce4ac2ba-bfe9-42de-8b67-3e1c56ce769f",  # 高橋 健一
                job_id=job_id, 
                status="選考中",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  # 現在日時
            ),
            Application(
                senior_profile_id="6f9adb57-203e-41ec-b0d6-49f4b52fdd9f",  # 佐藤 花子
                job_id=job_id, 
                status="合格",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  
            ),
            Application(
                senior_profile_id="89373fbc-04df-4918-aceb-debce655337b",  # 鈴木 大輔
                job_id=job_id,  
                status="不合格",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  
            ),
            Application(
                senior_profile_id="0e393f7e-90c3-42f5-a677-5832dc4b62cc",  # 中村 美紀
                job_id=job_id,  
                status="選考中",  # 応募ステータス
                created_at=datetime.now(timezone.utc)  
            ),
            Application(
                senior_profile_id="5d84419e-8986-4b71-9842-b26b87a68fee",  # 小林 健二
                job_id=job_id,  
                status="合格",  # 応募ステータス
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
