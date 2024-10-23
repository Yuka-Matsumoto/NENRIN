// kino
// 

// frontend/lib/api.ts

import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 認証トークンを付与してリクエストを行うヘルパー関数
export const fetchWithAuth = async (url: string, token: string, options = {}) => {
    return apiClient.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        ...options,
    });
};


// ---------------------------------------------------------------------------------

// yuka
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

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
