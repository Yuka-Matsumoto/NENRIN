# backend/app/utils/db.py

from contextlib import contextmanager
from sqlalchemy.orm import sessionmaker
from app.utils.db_config import db

Session = sessionmaker(bind=db.engine)

@contextmanager
def get_db_session():
    session = Session()
    try:
        yield session
    finally:
        session.close()



