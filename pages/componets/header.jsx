import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <>
            <header className="bg-gray-800 text-white p-4">
                <nav>
                    <ul className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8">
                        <li>
                            <Link href="/">
                                <span className="hover:text-yellow-500 transition-all duration-300 py-2 px-4">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className="hover:text-yellow-500 transition-all duration-300 py-2 px-4">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="hover:text-yellow-500 transition-all duration-300 py-2 px-4">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    )
}

export default Header