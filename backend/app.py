# import os
# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from routes.payments import payments


# app = Flask(__name__)

# # 環境変数から接続情報を取得
# app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://lastProject_user:lastProject@db/lastProject')

# db = SQLAlchemy(app)

# app.register_blueprint(payments, url_prefix='/payments')

# # ルート定義
# @app.route('/')
# def hello_world():
#     return "Hello, World!"

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.0', port=4000)

import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import stripe

load_dotenv()

app = Flask(__name__)
CORS(app)

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

@app.route('/api/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.sessions.create(
            line_items=[
                {
                    'price': 'price_1QATrTE4JGNMTzFKlJUKkCqT',  # 環境変数にいれる
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=request.headers.get('Origin') + '?success=true',
            cancel_url=request.headers.get('Origin') + '?canceled=true',
        )
        return jsonify({"url": checkout_session.url})
    except Exception as e:
        return jsonify(error=str(e)), 403

if __name__ == '__main__':
    app.run(port=4000)