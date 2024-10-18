// frontend/app/dashboard/senior/page.tsx
'use client';

import { useAuth } from '../../../../hooks/useAuth';

export default function SeniorDashboard() {
    const { user, loading } = useAuth();

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
            {/* 他のダッシュボードのコンテンツ */}
        </div>
    );
}
