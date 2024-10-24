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
    const [address, setAddress] = useState(''); // 追加
    const [phoneNumber, setPhoneNumber] = useState(''); // 追加
    const [userType, setUserType] = useState<'senior_user' | 'union_user'>('senior_user');
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
                    address,
                    phoneNumber,
                    uid
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // ユーザータイプに応じてリダイレクト
            router.push(userType === 'senior_user' ? '/profile/senior' : '/profile/union');
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="名前"
                required
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="住所"
                required
            />
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="電話番号"
                required
            />
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
            <select value={userType} onChange={(e) => setUserType(e.target.value as 'senior_user' | 'union_user')}>
                <option value="senior">シニア</option>
                <option value="union">団体</option>
            </select>
            {error && <p>{error}</p>}
            <button type="submit">アカウント作成</button>
        </form>
    );
};

export default SignupForm;


