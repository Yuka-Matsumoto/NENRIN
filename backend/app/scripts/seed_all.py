# backend/app/scripts/seed_all.py

from app.models.user import seed_users
from app.models.senior_profile import seed_senior_profiles
from app.models.union_profile import seed_union_profiles
from app.models.job import seed_jobs
from app.models.application import seed_applications
from app.models.service import seed_services
from app.models.message import seed_messages
from app.models.payment import seed_payments
from app.models.scoring import seed_scoring

def run_seeding():
    seed_users()
    seed_senior_profiles()
    seed_union_profiles()
    seed_jobs()
    # seed_applications()
    seed_services()
    # seed_messages()
    # seed_payments()
    # seed_scoring()
    print("All data seeded successfully.")

if __name__ == '__main__':
    from app import create_app
    app = create_app()
    with app.app_context():
        run_seeding()
