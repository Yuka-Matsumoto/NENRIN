from app import db
from app.models.user import seed_users, User
from app.models.union_profile import UnionProfile
from app.models.senior_profile import SeniorProfile
from app.models.service import Service
from app.models.scoring import Scoring
from app.models.message import Message
from app.models.job import Job
from app.models.application import Application
from app import create_app
from datetime import datetime, timezone
import uuid

# シーディング用関数
def seed_users():
    users = [
        User(id="1", uid="oerhiroerig", role="senior_user", name="高橋 健一", address="東京都港区南青山1-2-3", phone_number="03-1111-2222", email="aaahhello@gmai.com"),
        User(id="2", uid="oerhiroeria", role="senior_user", name="佐藤 花子", address="神奈川県横浜市中区桜木町4-5-6", phone_number="045-3333-4444", email="baahhello@gmai.com"),
        User(id="3", uid="oerhiroerib", role="senior_user", name="鈴木 大輔", address="大阪府大阪市中央区難波7-8-9", phone_number="06-5555-6666", email="caahhello@gmai.com"),
        User(id="4", uid="oerhiroeric", role="senior_user", name="中村 美紀", address="愛知県名古屋市中区栄1-2-3", phone_number="052-7777-8888", email="daahhello@gmai.com"),
        User(id="5", uid="oerhiroerid", role="senior_user", name="小林 健二", address="福岡県福岡市中央区天神5-6-7", phone_number="092-9999-0000", email="eaahhello@gmai.com"),
        User(id="6", uid="oerhiroerie", role="union_user", name="佐々木 亮太", address="東京都渋谷区代々木3-4-5", phone_number="03-1234-5678", email="faahhello@gmai.com"),
        User(id="7", uid="oerhiroerif", role="union_user", name="松本 美咲", address="大阪府大阪市北区梅田4-5-6", phone_number="06-2345-6789", email="gaahhello@gmai.com"),
        User(id="8", uid="oerhiroerih", role="union_user", name="渡辺 翔太", address="愛知県名古屋市中村区名駅2-3-4", phone_number="052-3456-7890", email="haahhello@gmai.com"),
        User(id="9", uid="oerhiroerii", role="union_user", name="藤本 裕子", address="福岡県福岡市博多区博多駅前3-4-5", phone_number="092-4567-8901", email="iaahhello@gmai.com"),
        User(id="10", uid="oerhiroerij", role="union_user", name="石井 隆志", address="北海道札幌市北区北7条西3-4-5", phone_number="011-5678-9012", email="jaahhello@gmai.com")
]
    db.session.query(User).delete()
    db.session.commit()
    db.session.bulk_save_objects(users)
    db.session.commit()
    print("10件のユーザーデータを追加しました。")
    return users
def seed_union_profiles(users):
    # UnionProfileモデルのサンプルデータを作成
    union_profiles = []
    for user in users:
        if user.role == "union_user":
            union_profiles.append(UnionProfile(
                id=str(uuid.uuid4()),
                user_id=user.id,
                union_name="Union Organization 1",
                representative_name="John Doe",
                address="123 Union St",
                date_of_foundation=datetime(2010, 5, 15, tzinfo=timezone.utc),
                overview="An organization dedicated to union members.",
                created_at=datetime.now(timezone.utc),
                updated_at=datetime.now(timezone.utc)
            ))
    
    db.session.add_all(union_profiles)
    db.session.commit()
    print("UnionProfileデータをシードしました。")

def seed_senior_profiles(users):
    # `role="senior"` のユーザーに対してSeniorProfileを作成
    senior_profiles = []
    for user in users:
        if user.role == "senior_user":
            senior_profiles.append(SeniorProfile(
                user_id=user.id,
                name=user.name,
                id=str(uuid.uuid4()),
                address="456 Senior Rd",
                age=70,
                gender="male" if "1" in user.uid else "female",
                industry="Healthcare",
                job_title="Retired Nurse",
                years_of_experience=40,
                currently_employed=False,
                currently_studying=False,
                has_hobby=True,
                lives_alone=True,
                goes_out_once_a_week=True,
                created_at=datetime.now(timezone.utc),
                updated_at=datetime.now(timezone.utc)
            ))

    db.session.add_all(senior_profiles)
    db.session.commit()
    print("SeniorProfileデータをシードしました。")

def seed_jobs():
    union_profiles = UnionProfile.query.all()  # すべてのUnionProfileを取得

    # UnionProfileごとにJobを作成
    for union_profile in union_profiles:
        jobs = [
            Job(
                id=str(uuid.uuid4()),
                union_profile_id=union_profile.id,
                title="シニア向けヘルパー募集",
                job_title="ヘルパー",
                description="シニアの生活サポート業務。",
                location="東京都",
                salary=1500.0,
                status="open",
                industry="介護",
                is_resume_required=True,
                is_work_history_required=False,
                is_photo_required=True,
                created_at=datetime.now(timezone.utc),
                updated_at=datetime.now(timezone.utc)
            ),
            Job(
                id=str(uuid.uuid4()),
                union_profile_id=union_profile.id,
                title="料理サポートスタッフ募集",
                job_title="キッチンスタッフ",
                description="シニア向けの料理サポート業務。",
                location="大阪府",
                salary=1200.0,
                status="open",
                industry="飲食",
                is_resume_required=False,
                is_work_history_required=True,
                is_photo_required=False,
                created_at=datetime.now(timezone.utc),
                updated_at=datetime.now(timezone.utc)
            ),
        ]

        # データベースにJobを追加
        for job in jobs:
            db.session.add(job)

    # コミットしてデータベースに保存
    db.session.commit()
    print("Jobsのシードデータを挿入しました。")

# アプリケーションコンテキストでシーディングを実行
if __name__ == "__main__":
    app = create_app()  # Flaskアプリケーションを作成
    with app.app_context():  # アプリケーションコンテキストを設定
        db.session.query(Job).delete()
        db.session.query(UnionProfile).delete()
        db.session.query(SeniorProfile).delete()
        db.session.query(User).delete()
        db.session.commit()
        users=seed_users()
        seed_union_profiles(users)  # ユーザー情報を基にUnionProfileをシード    
        seed_senior_profiles(users)
        seed_jobs()