'use client';

import { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithEmailAndPassword } from '../../lib/firebase';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // エラーをリセット

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in');
        } catch (err: any) {
            // Firebaseエラーコードに基づいて適切なメッセージを設定
            switch (err.code) {
                case 'auth/invalid-email':
                    setError('Invalid email address.');
                    break;
                case 'auth/user-disabled':
                    setError('This account has been disabled.');
                    break;
                case 'auth/user-not-found':
                    setError('No user found with this email.');
                    break;
                case 'auth/wrong-password':
                    setError('Incorrect password.');
                    break;
                default:
                    setError('Failed to sign in. Please try again later.');
            }
        } finally {
            setLoading(false);
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

