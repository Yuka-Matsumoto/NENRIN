'use client';

import { useState } from 'react';
// import { sendPasswordResetEmail } from 'firebase/auth';# TODO:delete
import { auth, sendPasswordResetEmail } from '../../lib/firebase';

const PasswordResetForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess('Password reset email sent. Please check your inbox.');
        } catch (err: any) {
            switch (err.code) {
                case 'auth/invalid-email':
                    setError('Invalid email address.');
                    break;
                case 'auth/user-not-found':
                    setError('No user found with this email.');
                    break;
                default:
                    setError('Failed to send password reset email. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handlePasswordReset}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Reset Password'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </form>
    );
};

export default PasswordResetForm;
