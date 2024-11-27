import React, { useState } from 'react';
import logo from '../assets/tilt1.png';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className="bg-[#190000] shadow-lg py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0">
                        <img src={logo} alt="Logo" className="h-10" />
                    </div>

                    {/* Centered navigation items */}
                    <ul className="hidden flex-1 md:flex justify-center space-x-6 text-white">
                        <li className="transition-all hover:text-red-300">
                            <a href="#">L</a>
                        </li>
                        <li className="transition-all hover:text-red-300">
                            <a href="#">Services</a>
                        </li>
                        <li className="transition-all hover:text-red-300">
                            <a href="#">Reviews</a>
                        </li>
                        <li className="transition-all hover:text-red-300">
                            <a href="#">Blog</a>
                        </li>
                        <li className="transition-all hover:text-red-300">
                            <a href="#">Jobs</a>
                        </li>
                    </ul>

                    {/* Buttons on the right (hidden on small screens) */}
                    <div className="hidden md:flex space-x-4">
                        <button className="bg-red-700 text-white px-2 py-1 rounded-full hover:bg-white hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all">
                            Start a project
                        </button>
                    </div>

                    {/* Mobile menu button (hamburger) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:bg-red-700 p-2 rounded-md"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 12h18M3 6h18M3 18h18"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu (conditionally shown based on isMenuOpen state) */}
                <div
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-red-900 text-white space-y-4 p-4`}
                >
                    <a href="#" className="block px-4 py-2 hover:bg-red-700">Home</a>
                    <a href="#" className="block px-4 py-2 hover:bg-red-700">About</a>
                    <a href="#" className="block px-4 py-2 hover:bg-red-700">Services</a>
                    <a href="#" className="block px-4 py-2 hover:bg-red-700">Portfolio</a>
                    <a href="#" className="block px-4 py-2 hover:bg-red-700">Contact</a>
                </div>
            </nav>
        </>
    )
}

export default NavBar