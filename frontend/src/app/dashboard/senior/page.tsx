// frontend/app/dashboard/senior/page.tsx
'use client';

import { useAuth } from '../../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { fetchWithAuth } from '../../../../lib/api';
import { useRouter } from 'next/navigation';

export default function SeniorDashboard() {
    const { user, loading, token, userType } = useAuth();
    const [backendData, setBackendData] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!loading && (!user || userType !== 'senior')) {
            router.push('/account/login');
        }
    }, [user, loading, router, userType]);

    useEffect(() => {
        if (token) {
            fetchWithAuth('/api/user', token)
                .then((response) => {
                    setBackendData(response.data.message); // サーバーからのメッセージを保存
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [token]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Welcome, {user?.displayName || 'Senior User'}!</h1>
            <p>Email: {user?.email}</p>
            {backendData && <p>Server says: {backendData}</p>}
        </div>
    );
}


