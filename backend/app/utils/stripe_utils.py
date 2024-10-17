# utils/stripe_utils.py
import os
import stripe

# Stripeのシークレットキーを環境変数から取得
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

def create_checkout_session(price_id: str, quantity: int = 1):
    """StripeのCheckoutセッションを作成"""
    YOUR_DOMAIN = 'http://localhost:4000'
    try:
        session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': price_id,
                    'quantity': quantity,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '?success=true',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
        )
        return session
    except Exception as e:
        print(f"Error creating checkout session: {e}")
        return None
