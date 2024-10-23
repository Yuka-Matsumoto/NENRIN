// frontend/hooks/useAuth.ts

'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/navigation';
import { apiClient } from '../lib/api';

interface AuthState {
    user: FirebaseUser | null;
    userType: 'senior' | 'union' | null;
    loading: boolean;
}

export const useAuth = () => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        userType: null,
        loading: true,
    });
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // ユーザーがログインしている場合、バックエンドからユーザータイプを取得
                const token = await user.getIdToken();
                try {
                    const response = await apiClient.post('/api/get-user-type', { token });
                    const userType = response.data.userType;
                    setAuthState({ user, userType, loading: false });
                } catch (error) {
                    console.error('Failed to get user type:', error);
                    setAuthState({ user: null, userType: null, loading: false });
                    router.push('/account/login');
                }
            } else {
                setAuthState({ user: null, userType: null, loading: false });
                router.push('/account/login');
            }
        });

        return () => unsubscribe();
    }, [router]);

    return authState;
};
