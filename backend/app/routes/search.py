from flask import Blueprint, request, jsonify
from app.models.job import Job
from app.models.service import Service

# Blueprintを作成
search_bp = Blueprint('search', __name__)

# 求人検索エンドポイント
@search_bp.route('/search/jobs', methods=['GET'])
def search_jobs():
    title = request.args.get('title')
    location = request.args.get('location')

    query = Job.query

    if title:
        query = query.filter(Job.title.ilike(f'%{title}%'))
    if location:
        query = query.filter(Job.location.ilike(f'%{location}%'))

    jobs = query.all()

    result = [
        {
            "id": job.id,
            "title": job.title,
            "description": job.description,
            "location": job.location,
            "salary": job.salary,
            "status": job.status
        } for job in jobs
    ]

    return jsonify(result)

# サービス検索エンドポイント
@search_bp.route('/search/services', methods=['GET'])
def search_services():
    name = request.args.get('name')
    category = request.args.get('category')

    query = Service.query

    if name:
        query = query.filter(Service.name.ilike(f'%{name}%'))
    if category:
        query = query.filter(Service.category.ilike(f'%{category}%'))

    services = query.all()

    result = [
        {
            "id": service.id,
            "name": service.name,
            "category": service.category,
            "price": service.price,
            "status": service.status
        } for service in services
    ]

    return jsonify(result)
