// frontend/components/Auth/SignupForm.tsx
'use client';  // クライアントコンポーネントとしてマーク

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { verifyToken } from '../../lib/api';
import { useRouter } from 'next/navigation';  // next/routerの代わりにnext/navigationを使用

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userType, setUserType] = useState('senior'); // 'senior' または 'union'
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // ユーザータイプをFirestoreまたはカスタムクレームに保存する必要があります
            const token = await userCredential.user.getIdToken();
            const result = await verifyToken(token, userType);

            if (result.success) {
                // サインアップ成功後のリダイレクト
                router.push('/dashboard/senior');
            } else {
                setError('サインアップに失敗しました');
            }
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
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
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                required
            />
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required
            />
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="senior">シニア</option>
                <option value="union">団体</option>
            </select>
            {error && <p>{error}</p>}
            <button type="submit">新規登録</button>
        </form>
    );
};

export default SignupForm;


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// 'use client';  // クライアントコンポーネントとしてマーク

// import { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../lib/firebase';
// import { verifyToken } from '../../lib/api';
// import { useRouter } from 'next/navigation';  // next/routerの代わりにnext/navigationを使用

// const SignupForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [userType, setUserType] = useState('senior'); // 'senior' または 'union'
//     const [error, setError] = useState<string | null>(null);
//     const router = useRouter();

//     const handleSignup = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//             // ユーザータイプをFirestoreまたはカスタムクレームに保存する必要があります
//             const token = await userCredential.user.getIdToken();

//             // バックエンドにユーザー情報を送信して登録
//             // const result = await verifyToken(token, userType, {
//             //     name,
//             //     address,
//             //     phoneNumber,
//             // });

//             if (result.success) {
//                 // サインアップ成功後のリダイレクト
//                 router.push('/dashboard/senior');
//             } else {
//                 setError('サインアップに失敗しました');
//             }
//         } catch (error: any) {
//             setError(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSignup}>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//             />
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//                 required
//             />
//             <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder="Address"
//                 required
//             />
//             <input
//                 type="tel"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Phone Number"
//                 required
//             />
//             <select value={userType} onChange={(e) => setUserType(e.target.value)}>
//                 <option value="senior">シニア</option>
//                 <option value="union">団体</option>
//             </select>
//             {error && <p>{error}</p>}
//             <button type="submit">サインアップ</button>
//         </form>
//     );
// };

// export default SignupForm;

