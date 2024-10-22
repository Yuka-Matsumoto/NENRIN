# app/utils/db.py

from app.utils.db_config import db

def get_db_session():
    return db.session


