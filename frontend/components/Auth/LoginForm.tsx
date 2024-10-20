'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { verifyToken } from '../../lib/api';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState<'senior' | 'union'>('senior'); // ユーザータイプを選択
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Firebaseでのログイン処理
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();

            // トークンとユーザータイプをバックエンドに送信して検証
            const result = await verifyToken(token, userType);

            if (result.success) {
                // ログイン成功後のリダイレクト
                router.push(userType === 'senior' ? '/dashboard/senior' : '/dashboard/union');
            } else {
                setError('ログインに失敗しました');
            }
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
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <select
                value={userType}
                onChange={(e) => setUserType(e.target.value as 'senior' | 'union')}
            >
                <option value="senior">シニア</option>
                <option value="union">団体</option>
            </select>
            {error && <p>{error}</p>}
            <button type="submit">ログイン</button>
        </form>
    );
};

export default LoginForm;

