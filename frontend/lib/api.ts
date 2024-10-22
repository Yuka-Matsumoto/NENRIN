// // lib/api.ts
// import axios from 'axios';

// export const apiClient = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Firebaseトークンをバックエンドで検証するための関数
// export const verifyToken = async (token: string, userData?: { [key: string]: any }) => {
//     try {
//         const data: any = { token };
//         if (userData) {
//             Object.assign(data, userData);
//         }
//         const response = await apiClient.post('/api/verify-token', data);
//         return response.data;
//     } catch (error) {
//         console.error('Token verification failed', error);
//         return { success: false, message: 'Token verification failed' };
//     }
// };

// // 認証トークンを付与してリクエストを行うヘルパー関数
// export const fetchWithAuth = async (url: string, token: string) => {
//     return apiClient.get(url, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };



// frontend/lib/api.ts
import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});