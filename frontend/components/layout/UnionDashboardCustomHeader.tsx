// components/layout/CustomHeader.tsx
import React from 'react';
import Link from 'next/link';

const UnionDashboardCustomHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <Link href="/" passHref>
                <h1 className="text-brown-700 text-3xl font-bold p-1">求人登録</h1>
            </Link>
            <Link href="/" passHref>
                <h1 className="text-brown-700 text-3xl font-bold p-1">プロフィール</h1>
            </Link>
            <Link href="/" passHref>
                <h1 className="text-brown-700 text-3xl font-bold p-1">依頼済みのサービス一覧</h1>
            </Link>
            <Link href="/" passHref>
                <h1 className="text-brown-700 text-3xl font-bold p-1">サービスの一覧</h1>
            </Link>
        </div>
    );
}

export default UnionDashboardCustomHeader;