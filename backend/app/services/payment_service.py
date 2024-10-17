# services/payment_service.py
from utils.stripe_utils import create_checkout_session

def initiate_payment(price_id: str, quantity: int = 1):
    """支払いの初期化処理"""
    session = create_checkout_session(price_id, quantity)
    if session:
        return session.url  # フロントエンドに返すURL
    else:
        raise Exception("Failed to create Stripe checkout session")
