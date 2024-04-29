import React, { useState } from 'react';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-white text-lg font-bold">RentEase</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#features" className="text-white hover:text-gray-300">Features</a>
                        <a href="#how-it-works" className="text-white hover:text-gray-300">How It Works</a>
                        <a href="#benefits" className="text-white hover:text-gray-300">Benefits</a>
                        <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
                        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            {showMenu ? 'Close' : 'Menu'}
                        </button>
                    </div>
                </div>
                {showMenu && (
                    <div className="mt-4 md:hidden">
                        <a href="#features" className="block text-white py-2">Features</a>
                        <a href="#how-it-works" className="block text-white py-2">How It Works</a>
                        <a href="#benefits" className="block text-white py-2">Benefits</a>
                        <a href="#testimonials" className="block text-white py-2">Testimonials</a>
                        <a href="#contact" className="block text-white py-2">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
