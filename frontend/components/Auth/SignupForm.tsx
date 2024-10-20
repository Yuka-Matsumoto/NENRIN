'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { verifyToken } from '../../lib/api';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // 名前
    const [address, setAddress] = useState(''); // 住所
    const [phoneNumber, setPhoneNumber] = useState(''); // 電話番号
    const [userType, setUserType] = useState<'senior' | 'union'>('senior'); // シニアか団体かの選択
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();

            // バックエンドに送信するデータにユーザー情報を追加
            const result = await verifyToken(token, {
                userType,
                name,
                address,
                phoneNumber,
            });

            if (result.success) {
                router.push(userType === 'senior' ? '/dashboard/senior' : '/dashboard/union');
            } else {
                setError('サインアップに失敗しました');
            }
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
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
            />
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
            />
            <select
                value={userType}
                onChange={(e) => setUserType(e.target.value as 'senior' | 'union')}
            >
                <option value="senior">シニア</option>
                <option value="union">団体</option>
            </select>
            {error && <p>{error}</p>}
            <button type="submit">サインアップ</button>
        </form>
    );
};

export default SignupForm;

