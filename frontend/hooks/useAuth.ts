// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User, getIdToken } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                const token = await getIdToken(firebaseUser);
                setToken(token);
            } else {
                setUser(null);
                setToken(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setToken(null);
    };

    return { user, loading, token, logout };
};
