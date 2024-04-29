import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-12 bg-gray-100 h-screen overflow-hidden flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                    <p className="mt-2 text-lg text-gray-700">RentEase offers a range of features to simplify property management for agencies.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900">Automated Rent Collection</h3>
                        <p className="mt-2 text-gray-700">Easily collect rent from tenants using automated payment methods.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900">Tenant Management</h3>
                        <p className="mt-2 text-gray-700">Manage tenant information</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900">Maintenance Tracking</h3>
                        <p className="mt-2 text-gray-700">Track maintenance requests, repairs, and expenses for each property.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900">Customizable Reporting</h3>
                        <p className="mt-2 text-gray-700">Generate detailed reports on rent collection, expenses, vacancies, and more.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
