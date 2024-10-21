// frontend/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/navigation';
import { apiClient } from '../lib/api';

interface User {
    firebaseUser: FirebaseUser;
    userType: string;
}

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const token = await firebaseUser.getIdToken();
                const response = await apiClient.post('/api/get-user-type', { token });
                const { userType } = response.data;

                setUser({ firebaseUser, userType });
            } else {
                setUser(null);
                router.push('/account/login');
            }
        });

        return () => unsubscribe();
    }, [router]);

    return { user };
};



