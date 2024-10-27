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

            // バックエンドからユーザータイプを取得
            const response = await apiClient.post(
                '/api/get-user-type',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const userType = response.data?.userType;

            if (!userType) {
                setError("ユーザータイプの取得に失敗しました。");
                return;
            }

            // userType に基づいてリダイレクト
            router.push(userType === 'senior_user' ? '/dashboard/senior' : '/dashboard/union');
        } catch (error: any) {
            if (error.response?.status === 401) {
                setError("認証エラー: トークンが無効です。再度ログインしてください。");
            } else {
                setError("ログインまたはユーザータイプ取得に失敗しました。再試行してください。");
            }
            console.error("Error during login:", error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレス"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="パスワード"
                required
            />
            {error && <p>{error}</p>}
            <button type="submit">ログイン</button>
        </form>
    );
};

export default LoginForm;
