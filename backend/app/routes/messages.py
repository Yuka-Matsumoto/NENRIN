from flask import Blueprint, request, jsonify
from app import db
from app.models import db, Message
from app.models.message import Message
# from firebase_admin import auth as firebase_auth  # Firebaseトークン検証用
# import logging

messages_bp = Blueprint('messages', __name__)

# トークンからユーザーIDを取得
def get_user_id_from_token(token):
    try:
        decoded_token = firebase_auth.verify_id_token(token)
        return decoded_token['uid']
    except Exception as e:
        logging.error("トークンの検証に失敗しました: %s", e)
        return None

@messages_bp.route('/api/messages', methods=['POST'])
def send_message():
    token = request.headers.get('Authorization', '').split(' ')[1]
    user_id = get_user_id_from_token(token)
    
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    data = request.get_json()
    new_message = Message(
        sender_id=user_id,
        receiver_id=data['receiver_id'],
        job_id=data.get('job_id'),
        content=data['content']
    )
    db.session.add(new_message)
    db.session.commit()
    
    return jsonify({"success": True, "message": "Message sent"})

@messages_bp.route('/api/messages/<job_id>', methods=['GET'])
def get_messages(job_id):
    token = request.headers.get('Authorization', '').split(' ')[1]
    user_id = get_user_id_from_token(token)
    
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    messages = Message.query.filter_by(job_id=job_id).filter(
        (Message.sender_id == user_id) | (Message.receiver_id == user_id)
    ).all()
    
    return jsonify([{"id": m.id, "content": m.content, "sender_id": m.sender_id, "receiver_id": m.receiver_id} for m in messages])
