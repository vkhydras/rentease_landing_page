import React from 'react';

const Benefits = () => {
    return (
        <section id="benefits" className="py-12 bg-gray-100 h-screen overflow-hidden flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Benefits of RentEase</h2>
                    <p className="mt-2 text-lg text-gray-700">Discover the advantages of using RentEase for property management.</p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <img src="/images/benefit1.png" alt="Benefit 1" className="w-16 h-16 mb-4" /> */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Time Savings</h3>
                        <p className="text-gray-700 text-center">Automate tedious tasks and focus more on strategic property management decisions.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <img src="/images/benefit2.png" alt="Benefit 2" className="w-16 h-16 mb-4" /> */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Accuracy</h3>
                        <p className="text-gray-700 text-center">Reduce errors in rent collection, tenant management, and reporting with RentEase's automated system.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <img src="/images/benefit3.png" alt="Benefit 3" className="w-16 h-16 mb-4" /> */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Better Communication</h3>
                        <p className="text-gray-700 text-center">Enhance communication with tenants and landlords through the RentEase platform, improving overall satisfaction.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
