// BASE_URL の定義
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// 求人検索API
export const fetchJobs = async (query: { title?: string, location?: string }) => {
    const url = new URL(`${BASE_URL}/search/jobs`);
    if (query.title) url.searchParams.append("title", query.title);
    if (query.location) url.searchParams.append("location", query.location);

  
    const response = await fetch(url.toString());
  
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
  
    return response.json();
};

// 個別求人情報を取得するAPI
export const fetchJobById = async (id: string) => {
    const response = await fetch(`${BASE_URL}/jobs/${id}`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch job');
    }
  
    return response.json();
};

// サービス検索API
export const fetchServices = async (query: { name?: string, category?: string }) => {
    const url = new URL(`${BASE_URL}/search/services`);
    if (query.name) url.searchParams.append("name", query.name);
    if (query.category) url.searchParams.append("category", query.category);


    const response = await fetch(url.toString());

    if (!response.ok) {

      throw new Error('Failed to fetch services');
    }

    return response.json();
};

// 個別サービス情報を取得するAPI
export const fetchServiceById = async (id: string) => {
    const response = await fetch(`${BASE_URL}/services/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch service');

        throw new Error('Failed to fetch jobs');

    }

    return response.json();
};
