// frontend/app/dashboard/senior/page.tsx
// 'use client';

// import { useAuth } from '../../../../hooks/useAuth';

// export default function SeniorDashboard() {
//     const { user, loading } = useAuth();

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (!user) {
//         return <p>Please sign in to access your dashboard.</p>;
//     }

//     return (
//         <div>
//             <h1>Welcome, {user.displayName || 'Senior User'}!</h1>
//             <p>Email: {user.email}</p>
//             {/* 他のダッシュボードのコンテンツ */}
//         </div>
//     );
// }


// frontend/app/dashboard/senior/page.tsx
'use client';

import { useAuth } from '../../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { fetchWithAuth } from '../../../../lib/api';

export default function SeniorDashboard() {
    const { user, loading, token } = useAuth();
    const [backendData, setBackendData] = useState<string | null>(null);

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

    if (!user) {
        return <p>Please sign in to access your dashboard.</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.displayName || 'Senior User'}!</h1>
            <p>Email: {user.email}</p>
            {backendData && <p>Server says: {backendData}</p>}
        </div>
    );
}
