import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-30 bg-transparent text-zinc-100 mt-1">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    World Liberation Outreach Ministry (WOLOM)🕊️
                    <span className="block text-sm font-normal">
                        aka Living Word Global Freedom Ministry
                    </span>
                </h1>
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col md:flex-row md:flex space-x-0 md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4 text-lg font-medium">
                        <li>
                            <Link to="/" className="hover:text-gray-400 block px-4 py-2">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-400 block px-4 py-2">About Us</Link>
                        </li>
                        <li>
                            <Link to="/sermons" className="hover:text-gray-400 block px-4 py-2">Sermons</Link>
                        </li>
                        <li>
                            <Link to="/events" className="hover:text-gray-400 block px-4 py-2">Events</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-400 block px-4 py-2">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;