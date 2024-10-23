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
                application_id="0cd4166a-572b-47b6-9d85-a5af12812125",  # 高橋 健一
                score=85,
                criteria_met={
                    "業種": "IT",
                    "職種": "ソフトウェアエンジニア",
                    "経験年数": 30,
                    "現在仕事": False,
                    "現在勉強中": False,
                    "趣味": True,
                    "一人暮らし": True,
                    "週一日以上外出": True
                }
            ),
            Scoring(
                application_id="a954877b-1d11-44bd-8f22-d8678a1825ad",  # 佐藤 花子
                score=90,
                criteria_met={
                    "業種": "教育",
                    "職種": "教員",
                    "経験年数": 20,
                    "現在仕事": True,
                    "現在勉強中": False,
                    "趣味": True,
                    "一人暮らし": False,
                    "週一日以上外出": True
                }
            ),
            Scoring(
                application_id="16b00ea2-3a78-4729-a570-d6c976363226",  # 鈴木 大輔
                score=75,
                criteria_met={
                    "業種": "建設",
                    "職種": "建築士",
                    "経験年数": 40,
                    "現在仕事": True,
                    "現在勉強中": False,
                    "趣味": False,
                    "一人暮らし": True,
                    "週一日以上外出": True
                }
            ),
            Scoring(
                application_id="b83b8907-f62d-43b4-a04f-d3ac3a306b75",  # 中村 美紀
                score=80,
                criteria_met={
                    "業種": "ヘルスケア",
                    "職種": "看護師",
                    "経験年数": 25,
                    "現在仕事": False,
                    "現在勉強中": True,
                    "趣味": True,
                    "一人暮らし": False,
                    "週一日以上外出": True
                }
            ),
            Scoring(
                application_id="aca977ee-8a02-4006-b2eb-45041cffdfc0",  # 小林 健二
                score=70,
                criteria_met={
                    "業種": "製造",
                    "職種": "生産管理者",
                    "経験年数": 35,
                    "現在仕事": True,
                    "現在勉強中": False,
                    "趣味": False,
                    "一人暮らし": True,
                    "週一日以上外出": False
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
