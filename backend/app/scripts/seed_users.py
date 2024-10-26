from app.models.user import seed_users
from app import create_app

app = create_app()
with app.app_context():
    seed_users()
    print("User data seeded successfully.")

