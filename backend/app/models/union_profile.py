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

# シーディング用関数
def seed_union_profiles():

    try:
        union_profiles = [
            UnionProfile(
                user_id="fec7972c-db3d-4e05-933f-3be989d4ba0c",
                union_name="テック企業A",
                representative_name="佐々木 亮太",
                address="東京都渋谷区代々木3-4-5",
                date_of_foundation="2005-05-10",
                overview="テクノロジーサービスを提供する企業です。"
            ),
            UnionProfile(
                user_id="ba9cf802-8866-44a8-97bb-c705fc0c1400",
                union_name="デザインスタジオB",
                representative_name="松本 美咲",
                address="大阪府大阪市北区梅田4-5-6",
                date_of_foundation="2010-08-15",
                overview="デジタルとグラフィックデザインを専門としています。"
            ),
            UnionProfile(
                user_id="29fab106-aeea-4dec-92d5-b22f392fd62b",
                union_name="マーケティング会社C",
                representative_name="渡辺 翔太",
                address="愛知県名古屋市中村区名駅2-3-4",
                date_of_foundation="2012-02-20",
                overview="マーケティングリサーチとコンサルティングを行っています。"
            ),
            UnionProfile(
                user_id="387da7c0-e76d-4bc1-9b73-8692e5923816",
                union_name="飲食店チェーンD",
                representative_name="藤本 裕子",
                address="福岡県福岡市博多区博多駅前3-4-5",
                date_of_foundation="2000-04-01",
                overview="全国に店舗展開する飲食店チェーンです。"
            ),
            UnionProfile(
                user_id="38f04ca1-3d1b-4953-80e5-007ebf421c9b",
                union_name="教育機関E",
                representative_name="石井 隆志",
                address="北海道札幌市北区北7条西3-4-5",
                date_of_foundation="2015-09-10",
                overview="専門学校や語学学校を運営しています。"
            )
        ]

        # 新しいデータを挿入
        db.session.bulk_save_objects(union_profiles)

        db.session.commit()
        print("新しいユニオンプロファイルのシードデータを挿入しました。")
    
    except Exception as e:
        db.session.rollback()  # エラー発生時にロールバック
        print(f"エラーが発生しました: {e}")

# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    app = create_app()  # Flaskアプリケーションを作成
    with app.app_context():  # アプリケーションコンテキストを設定
        seed_union_profiles()
