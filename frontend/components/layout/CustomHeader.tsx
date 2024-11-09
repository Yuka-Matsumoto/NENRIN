// components/layout/CustomHeader.tsx
import React from 'react';
import Link from 'next/link';

const CustomHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <Link href="/" passHref>
                <h1 className="text-brown-700 text-3xl font-bold p-1">N E N R I N</h1>
            </Link>
        </div>
    );
}

export default CustomHeader;