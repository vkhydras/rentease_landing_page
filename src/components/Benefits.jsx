import React from 'react';

const Benefits = () => {
    return (
        <section id="benefits" className="py-12 bg-gray-100 h-screen overflow-hidden flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Benefits of ReEase</h2>
                    <p className="mt-2 text-lg text-gray-700">Discover the advantages of using ReEase for property management.</p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">1. Save Time</h3>
                        <p className="text-gray-700 text-center">Automate tedious tasks and save time, allowing you to focus more on strategic property management decisions.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">2. Improved Accuracy</h3>
                        <p className="text-gray-700 text-center">Reduce errors in rent collection, tenant management, and reporting by up to 95% with ReEase's automated system.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">3. Better Communication</h3>
                        <p className="text-gray-700 text-center">Enhance communication with tenants and landlords, leading to improved satisfaction rates by 20% through the ReEase platform.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
