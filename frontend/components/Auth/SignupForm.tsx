// frontend/components/Auth/SignupForm.tsx
'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/navigation';
import { apiClient } from '../../lib/api';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [userType, setUserType] = useState<'senior' | 'union'>('senior');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Firebaseでユーザー作成
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            const uid = await userCredential.user.uid
            // バックエンドにユーザー情報を送信（トークンをヘッダーに含める）
            await apiClient.post(
                '/api/register',
                {
                    userType,
                    name,
                    uid
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // ユーザータイプに応じてリダイレクト
            router.push(userType === 'senior' ? '/profile/senior' : '/profile/union');
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
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
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="名前"
                required
            />
            <select value={userType} onChange={(e) => setUserType(e.target.value as 'senior' | 'union')}>
                <option value="senior">シニア</option>
                <option value="union">団体</option>
            </select>
            {error && <p>{error}</p>}
            <button type="submit">アカウント作成</button>
        </form>
    );
};

export default SignupForm;


