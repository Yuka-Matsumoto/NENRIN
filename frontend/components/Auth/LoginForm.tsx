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
            // Firebaseでのログイン
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();

            // バックエンドにトークンを送信してユーザータイプを取得
            const response = await apiClient.post('/api/login', { token });
            const { userType } = response.data;

            router.push(userType === 'senior' ? '/dashboard/senior' : '/dashboard/union');
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {/* フォームフィールド */}
        </form>
    );
};

export default LoginForm;



