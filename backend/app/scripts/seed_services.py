from app.models.service import seed_services
from app import create_app

app = create_app()
with app.app_context():
    seed_services()
    print("Job data seeded successfully.")
