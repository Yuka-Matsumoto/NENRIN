'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/navigation';
import { apiClient } from '../../lib/api';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();

            if (!token) {
                setError("トークンの取得に失敗しました。");
                return;
            }

            // バックエンドからユーザー情報を取得
            const userInfoResponse = await apiClient.post(
                '/api/get-user-info',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("User info response:", userInfoResponse.data); // デバッグ用

            const userInfo = userInfoResponse.data;

            if (!userInfo || !userInfo.success || !userInfo.userInfo) {
                setError("ユーザー情報の取得に失敗しました。");
                console.error("User info response:", userInfoResponse.data); // デバッグ用
                return;
            }

            // ユーザー情報の取得
            const { name, role, uid } = userInfo.userInfo; // userInfoから必要な情報を取得

            // ユーザータイプを取得
            const userType = role; // userInfoからroleを取得

            // ユーザーIDをURLに含めてリダイレクト
            router.push(userType === 'senior_user' ? `/dashboard/senior/${uid}` : `/dashboard/union/${uid}`);
        } catch (error: any) {
            if (error.response?.status === 401) {
                setError("認証エラー: トークンが無効です。再度ログインしてください。");
            } else {
                setError("ログインまたはユーザー情報取得に失敗しました。再試行してください。");
            }
            console.error("Error during login:", error);
        }
    };

    return (
        // <form onSubmit={handleLogin}>
        //     <input
        //         type="email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //         placeholder="メールアドレス"
        //         required
        //     />
        //     <input
        //         type="password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //         placeholder="パスワード"
        //         required
        //     />
        //     {error && <p>{error}</p>}
        //     <button type="submit">ログイン</button>
        // </form>
        // {min-h-screen}
        <div className="bg-[#e6f3ef] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">ログイン</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">パスワード</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e8b57] focus:border-transparent"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                        >
                            ログイン
                        </button>
                    </form>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                    アカウントをお持ちでない方は
                    <a href="/account/create" className="font-medium text-[#2e8b57] hover:text-[#236b44]">
                        こちら
                    </a>
                    から新規登録
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
