from app.models.union_profile import seed_union_profiles
from app import create_app

app = create_app()
with app.app_context():
    seed_union_profiles()
    print("Union profile data seeded successfully.")
