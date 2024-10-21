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
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userType, setUserType] = useState<'senior' | 'union'>('senior');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Firebaseでのユーザー作成
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();

            // バックエンドにユーザー情報を送信
            const response = await apiClient.post('/api/register', {
                token,
                userType,
                name,
                address,
                phoneNumber,
            });

            if (response.data.success) {
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
            {/* フォームフィールド */}
        </form>
    );
};

export default SignupForm;


