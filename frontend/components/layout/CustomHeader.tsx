// components/layout/CustomHeader.tsx
import React from 'react';
import Link from 'next/link';

const CustomHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <Link href="/" passHref>
                <h1 className="text-green-700 text-3xl font-bold p-1">カスタム N E N R I N</h1>
            </Link>
            <Link href="/" passHref>
                <p className="text-green-700 ml-auto pr-1 cursor-pointer">
                    カスタム
                </p>
            </Link>
        </div>
    );
}

export default CustomHeader;