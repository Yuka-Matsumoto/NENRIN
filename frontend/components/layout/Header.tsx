import React from 'react'
import Link from 'next/link';

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <Link href="/" passHref>
                <h1 className="text-brown-700 text-3xl font-bold p-1">N E N R I N</h1>
            </Link>
            <p className="text-brown-700 ml-auto pr-1">L O G I N(会員の方)</p>
        </div>
    )
}

export default Header;