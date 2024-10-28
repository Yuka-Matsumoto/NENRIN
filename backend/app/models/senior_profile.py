from app import db
import uuid
from datetime import datetime, timezone

class SeniorProfile(db.Model):
    __tablename__ = 'senior_profiles'
    
    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(10))
    industry = db.Column(db.String(50))  # 業種
    job_title = db.Column(db.String(50))  # 職種
    years_of_experience = db.Column(db.Integer)  # 経験年数
    currently_employed = db.Column(db.Boolean)  # 現在仕事をしていますか？
    currently_studying = db.Column(db.Boolean)  # 現在勉強をしていますか？
    has_hobby = db.Column(db.Boolean)  # 趣味はありますか？
    lives_alone = db.Column(db.Boolean)  # 一人暮らしですか？
    goes_out_once_a_week = db.Column(db.Boolean)  # 週一日以上外出しますか？
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    user = db.relationship('User', backref=db.backref('senior_profiles', lazy=True))


# シーディング用関数
def seed_senior_profiles():

    try:
        # サンプルデータを追加
        senior_profiles = [
            SeniorProfile(
                user_id="2b5c9f13-3b59-4d99-adc9-65d68dcebb3c",
                name="高橋 健一",
                address="東京都港区南青山1-2-3",
                age=70,
                gender="男性",
                industry="IT",  # 業種
                job_title="ソフトウェアエンジニア",  # 職種
                years_of_experience=30,  # 経験年数
                currently_employed=False,  # 現在仕事をしていますか？
                currently_studying=False,  # 現在勉強をしていますか？
                has_hobby=True,  # 趣味はありますか？
                lives_alone=True,  # 一人暮らしですか？
                goes_out_once_a_week=True,  # 週一日以上外出しますか？
            ),
            SeniorProfile(
                user_id="ba59d13d-a222-4b68-8e31-aa2455545e59",
                name="佐藤 花子",
                address="神奈川県横浜市中区桜木町4-5-6",
                age=68,
                gender="女性",
                industry="教育",  # 業種
                job_title="教員",  # 職種
                years_of_experience=20,  # 経験年数
                currently_employed=True,  # 現在仕事をしていますか？
                currently_studying=False,  # 現在勉強をしていますか？
                has_hobby=True,  # 趣味はありますか？
                lives_alone=False,  # 一人暮らしですか？
                goes_out_once_a_week=True,  # 週一日以上外出しますか？
            ),
            SeniorProfile(
                user_id="cb43ed76-e22d-4bef-b7f8-7ac1e08baed4",
                name="鈴木 大輔",
                address="大阪府大阪市中央区難波7-8-9",
                age=72,
                gender="男性",
                industry="建設",  # 業種
                job_title="建築士",  # 職種
                years_of_experience=40,  # 経験年数
                currently_employed=True,  # 現在仕事をしていますか？
                currently_studying=False,  # 現在勉強をしていますか？
                has_hobby=False,  # 趣味はありますか？
                lives_alone=True,  # 一人暮らしですか？
                goes_out_once_a_week=True,  # 週一日以上外出しますか？
            ),
            SeniorProfile(
                user_id="d85a2b32-4ece-47ec-a83b-d24a136b3b0f",
                name="中村 美紀",
                address="愛知県名古屋市中区栄1-2-3",
                age=65,
                gender="女性",
                industry="ヘルスケア",  # 業種
                job_title="看護師",  # 職種
                years_of_experience=25,  # 経験年数
                currently_employed=False,  # 現在仕事をしていますか？
                currently_studying=True,  # 現在勉強をしていますか？
                has_hobby=True,  # 趣味はありますか？
                lives_alone=False,  # 一人暮らしですか？
                goes_out_once_a_week=True,  # 週一日以上外出しますか？
            ),
            SeniorProfile(
                user_id="13b82f84-e081-4cca-aad9-271c805364da",
                name="小林 健二",
                address="福岡県福岡市中央区天神5-6-7",
                age=69,
                gender="男性",
                industry="製造",  # 業種
                job_title="生産管理者",  # 職種
                years_of_experience=35,  # 経験年数
                currently_employed=True,  # 現在仕事をしていますか？
                currently_studying=False,  # 現在勉強をしていますか？
                has_hobby=True,  # 趣味はありますか？
                lives_alone=True,  # 一人暮らしですか？
                goes_out_once_a_week=False,  # 週一日以上外出しますか？
            )
        ]

        # 新しいデータを挿入
        db.session.bulk_save_objects(senior_profiles)

        db.session.commit()
        print("新しいシニアプロファイルのシードデータを挿入しました。")
    
    except Exception as e:
        db.session.rollback()  # エラー発生時にロールバック
        print(f"エラーが発生しました: {e}")

# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    # from app import create_app
    app = create_app()
    with app.app_context():
        seed_senior_profiles() 



