# backend/app/models/message.py
from app import db
from datetime import datetime
import uuid

class Message(db.Model):
    __tablename__ = 'messages'
    
    id = db.Column(db.String(36), primary_key=True)
    sender_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    receiver_id = db.Column(db.String(36), db.ForeignKey('users.id'), nullable=False)
    job_id = db.Column(db.String(36), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    sender = db.relationship("User", foreign_keys=[sender_id], backref="sent_messages")
    receiver = db.relationship("User", foreign_keys=[receiver_id], backref="received_messages")

# シードデータを挿入するための関数
def seed_messages():
    messages = [
        Message(
            id=str(uuid.uuid4()),
            sender_id="2b5c9f13-3b59-4d99-adc9-65d68dcebb3c",  # 高橋 健一
            receiver_id="fec7972c-db3d-4e05-933f-3be989d4ba0c",  # 佐々木 亮太
            job_id="c83da707-ead0-4416-8028-12e84ecfb063",
            content="お忙しいところ、サービスにお時間を割いていただきありがとうございました。おかげで当社の業務も非常に円滑に進みました。また機会があれば、ぜひお願いしたいと思っています。",
            created_at=datetime.utcnow()
        ),
        Message(
            id=str(uuid.uuid4()),
            sender_id="ba59d13d-a222-4b68-8e31-aa2455545e59",  # 佐藤 花子
            receiver_id="ba9cf802-8866-44a8-97bb-c705fc0c1400",  # 松本 美咲
            job_id="c83da707-ead0-4416-8028-12e84ecfb063",
            content="本日は本当にありがとうございました。とても助かりましたし、皆様からの好評もいただいています。これからも一緒に活動できることを楽しみにしています。",
            created_at=datetime.utcnow()
        ),
        Message(
            id=str(uuid.uuid4()),
            sender_id="cb43ed76-e22d-4bef-b7f8-7ac1e08baed4",  # 鈴木 大輔
            receiver_id="29fab106-aeea-4dec-92d5-b22f392fd62b",  # 渡辺 翔太
            job_id="c83da707-ead0-4416-8028-12e84ecfb063",
            content="先日のサポートに感謝しております。おかげで予定通りの進行ができました。また何かお力添えが必要な時は、ぜひご協力をお願いしたいと考えております。",
            created_at=datetime.utcnow()
        ),
        Message(
            id=str(uuid.uuid4()),
            sender_id="d85a2b32-4ece-47ec-a83b-d24a136b3b0f",  # 中村 美紀
            receiver_id="387da7c0-e76d-4bc1-9b73-8692e5923816",  # 藤本 裕子
            job_id="c83da707-ead0-4416-8028-12e84ecfb063",
            content="プロジェクトでのご協力に感謝しています。ご支援のおかげで、私たちの目標に近づくことができました。引き続きのご指導、ご協力をお願い申し上げます。",
            created_at=datetime.utcnow()
        ),
        Message(
            id=str(uuid.uuid4()),
            sender_id="13b82f84-e081-4cca-aad9-271c805364da",  # 小林 健二
            receiver_id="38f04ca1-3d1b-4953-80e5-007ebf421c9b",  # 石井 隆志
            job_id="c83da707-ead0-4416-8028-12e84ecfb063",
            content="大変お世話になりました。あなたのご協力のおかげで、我々の取り組みは大成功を収めました。今後も一緒に成長していきたいと思います。",
            created_at=datetime.utcnow()
        ),
    ]

    # データベースに挿入
    db.session.bulk_save_objects(messages)
    db.session.commit()
    print("Messages seeded successfully!")
