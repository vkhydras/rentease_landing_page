import React from 'react';

 const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">Simplify Property Management with RentEase</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-700">A comprehensive software solution for managing buildings, tracking tenant payments, and generating reports.</p>
                <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">Sign Up for a Demo</button>
            </div>
        </div>
    );
};

export default Home;
