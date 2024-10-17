'use client'; // クライアントコンポーネントとして動作

import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../lib/firebase'; // Firebase設定からインポート

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // ローディング状態を有効にする
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in');
            setError(''); // エラーメッセージをクリア
        } catch (err) {
            setError('Failed to sign in');
            console.error('Error during sign in:', err);
        } finally {
            setLoading(false); // ローディング終了
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default LoginForm;
