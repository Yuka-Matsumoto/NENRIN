// lib/api.ts
import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000', // 環境変数からAPIのURLを取得
    headers: {
        'Content-Type': 'application/json',
    },
});

// 認証トークン付きでリクエストを行うヘルパー関数
export const fetchWithAuth = async (url: string, token: string) => {
    return apiClient.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
