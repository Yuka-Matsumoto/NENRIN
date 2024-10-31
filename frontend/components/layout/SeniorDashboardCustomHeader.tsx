// components/layout/CustomHeader.tsx
import React from 'react';
import Link from 'next/link';

const SeniorDashboardCustomHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <Link href="/" passHref>
                <h1 className="text-brown-700 text-3xl font-bold p-1">N E N R I N</h1>
            </Link>
            <Link href="/" passHref>
                <h1>サービス登録</h1>
            </Link>
            <Link href="/" passHref>
                <h1>求人を見る</h1>
            </Link>
            <Link href="/" passHref>
                <h1>プロフィール</h1>
            </Link>
            <Link href="/" passHref>
                <h1>サービス依頼の一覧</h1>
            </Link>
            <Link href="/" passHref>
                <h1>応募求人の一覧</h1>
            </Link>
        </div>
    );
}

export default SeniorDashboardCustomHeader;