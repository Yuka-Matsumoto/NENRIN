// frontend/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/navigation';
import { verifyToken } from '../lib/api';

interface UseAuthReturn {
    user: User | null;
    loading: boolean;
    error: string | null;
    token: string | null;
}

export const useAuth = (): UseAuthReturn => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    // ユーザーが存在する場合、トークンを取得してバックエンドに検証をリクエスト
                    const idToken = await currentUser.getIdToken();
                    const result = await verifyToken(idToken);

                    if (result.success) {
                        setUser(currentUser);
                        setToken(idToken);
                    } else {
                        setError('トークンの検証に失敗しました');
                        setUser(null);
                        router.push('/account/login'); // トークン検証に失敗した場合はログインページへリダイレクト
                    }
                } catch (err) {
                    console.error('Error verifying token:', err);
                    setError('トークンの検証に失敗しました');
                    setUser(null);
                    router.push('/account/login');
                }
            } else {
                setUser(null);
                router.push('/account/login'); // ログアウト状態の場合はログインページへリダイレクト
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    return { user, loading, error, token };

}
