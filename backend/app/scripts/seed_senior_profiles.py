from app.models.senior_profile import seed_senior_profiles
from app import create_app

app = create_app()
with app.app_context():
    seed_senior_profiles()
    print("Senior profile data seeded successfully.")
