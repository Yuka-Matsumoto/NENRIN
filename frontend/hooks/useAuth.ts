// frontend/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });

        return unsubscribe; // コンポーネントのアンマウント時にリスナーを解除
    }, []);

    const logout = async () => {
        await signOut(auth);
        setUser(null); // ログアウト時にユーザー情報をリセット
    };

    return { user, loading, logout };
};