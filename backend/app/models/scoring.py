from app import db
import uuid
from datetime import datetime, timezone

class Scoring(db.Model):
    __tablename__ = 'scoring'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    application_id = db.Column(db.String(36), db.ForeignKey('applications.id'), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    criteria_met = db.Column(db.JSON)  # スコアリング基準を満たしているかの情報
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    application = db.relationship('Application', backref=db.backref('scorings', lazy=True))


# シーディング用関数
def seed_scoring():
    try:
        # サンプルデータを追加
        scoring_data = [
            Scoring(
                application_id="f305c46a-b6a4-4b11-965e-002bb50fdb2e",  # 応募ID
                score=85,
                criteria_met={
                    "経験業種": "IT",
                    "経験年数": 30,
                    "現在仕事": True,
                    "趣味": True,
                    "一人暮らし": False,
                    "外出頻度": "週一日以上"
                }
            ),
            Scoring(
                application_id="391f4b51-fb82-4532-ba69-931b623c80af",  # 応募ID
                score=90,
                criteria_met={
                    "経験業種": "教育",
                    "経験年数": 20,
                    "現在仕事": True,
                    "趣味": False,
                    "一人暮らし": True,
                    "外出頻度": "週一日以上"
                }
            ),
            Scoring(
                application_id="446e2ee9-8025-4226-821f-af89d585fef5",  # 応募ID
                score=75,
                criteria_met={
                    "経験業種": "建設",
                    "経験年数": 40,
                    "現在仕事": False,
                    "趣味": True,
                    "一人暮らし": True,
                    "外出頻度": "週一日以上"
                }
            ),
            Scoring(
                application_id="ee7143e0-de33-48b4-b4bf-2385d4a2965a",  # 応募ID
                score=80,
                criteria_met={
                    "経験業種": "ヘルスケア",
                    "経験年数": 25,
                    "現在仕事": True,
                    "趣味": True,
                    "一人暮らし": False,
                    "外出頻度": "週一日以上"
                }
            ),
            Scoring(
                application_id="e0aea1f7-9c6f-4bde-b643-d7ac4f1d4414",  # 応募ID
                score=70,
                criteria_met={
                    "経験業種": "製造",
                    "経験年数": 35,
                    "現在仕事": True,
                    "趣味": False,
                    "一人暮らし": True,
                    "外出頻度": "週一日以上"
                }
            )
        ]

        # 新しいデータを挿入
        db.session.bulk_save_objects(scoring_data)
        db.session.commit()
        print("新しいスコアリングデータを挿入しました。")
    
    except Exception as e:
        db.session.rollback()  # エラー発生時にロールバック
        print(f"エラーが発生しました: {e}")

# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    from app import create_app
    app = create_app()
    with app.app_context():
        seed_scoring()