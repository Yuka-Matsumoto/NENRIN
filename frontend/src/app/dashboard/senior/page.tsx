// frontend/app/dashboard/senior/page.tsx
'use client';

import { useAuth } from '../../../../hooks/useAuth';

const SeniorDashboard = () => {
    const { user } = useAuth();

    if (!user || user.userType !== 'senior') {
        return <p>アクセス権がありません</p>;
    }

    return (
        <div>
            <h1>シニアダッシュボードへようこそ</h1>
            {/* その他のコンテンツ */}
        </div>
    );
};

export default SeniorDashboard;



