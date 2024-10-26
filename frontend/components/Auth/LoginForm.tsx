// frontend/components/Auth/LoginForm.tsx

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
            // Firebaseでログイン
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();

            // バックエンドからユーザータイプを取得（トークンをヘッダーに含める）
            const response = await apiClient.post(
                '/api/get-user-type',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const userType = response.data.userType;

            // ユーザータイプに応じてリダイレクト
            router.push(userType === 'senior' ? '/dashboard/senior' : '/dashboard/union');
        } catch (error: any) {
            setError(error.message);
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
