from app.models.job import seed_jobs
from app import create_app

app = create_app()
with app.app_context():
    seed_jobs()
    print("Job data seeded successfully.")
