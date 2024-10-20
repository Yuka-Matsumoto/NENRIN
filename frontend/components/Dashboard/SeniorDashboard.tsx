import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SeniorDashboard = () => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/account/login');
        }
    }, [user, loading, router]);

    if (loading) return <p>Loading...</p>;

    return <div>Welcome to the Senior Dashboard!</div>;
};

export default SeniorDashboard;
