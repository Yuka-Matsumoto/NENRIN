'use client';

import { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';#TODO:delete
import { auth, createUserWithEmailAndPassword } from '../../lib/firebase';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // エラーをリセット

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up');
        } catch (err: any) {
            // Firebaseエラーコードに基づいて適切なメッセージを設定
            switch (err.code) {
                case 'auth/email-already-in-use':
                    setError('This email is already in use.');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email address.');
                    break;
                case 'auth/weak-password':
                    setError('Password is too weak.');
                    break;
                default:
                    setError('Failed to sign up. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
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
                {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default SignupForm;

