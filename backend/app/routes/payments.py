# routes/payments.py
from flask import Blueprint, redirect, request
from services.payment_service import initiate_payment

payments = Blueprint('payments', __name__)

@payments.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    price_id = request.form.get('price_id')  # フォームから価格IDを取得
    try:
        # 支払いセッションを初期化し、決済URLを取得
        checkout_url = initiate_payment(price_id)
        return redirect(checkout_url, code=303)
    except Exception as e:
        return str(e), 500
