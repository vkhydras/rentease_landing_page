import React from 'react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-12 bg-gray-200 h-screen overflow-hidden flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">How ReEase Works</h2>
                    <p className="mt-2 text-lg text-gray-700">Explore the seamless workflow of ReEase in managing properties.</p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <div className="mr-6">
                            <img src="/images/step1.png" alt="Step 1" className="w-16 h-16" />
                        </div> */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2"> Agency Setup</h3>
                            <p className="text-gray-700">Agencies create accounts and set up their properties, including building details, tenant information, and rent amounts.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <div className="mr-6">
                            <img src="/images/step2.png" alt="Step 2" className="w-16 h-16" />
                        </div> */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2"> Tenant Management</h3>
                            <p className="text-gray-700">Agencies manage tenant rent payment schedules within the ReEase platform.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <div className="mr-6">
                            <img src="/images/step3.png" alt="Step 3" className="w-16 h-16" />
                        </div> */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2"> Rent Collection</h3>
                            <p className="text-gray-700">ReEase automatically sends rent reminders and collects payments from tenants through various payment methods.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <div className="mr-6">
                            <img src="/images/step4.png" alt="Step 4" className="w-16 h-16" />
                        </div> */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance Tracking</h3>
                            <p className="text-gray-700">Agencies track and manage maintenance requests, repairs, and expenses for each property, ensuring timely resolution.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
                        {/* <div className="mr-6">
                            <img src="/images/step5.png" alt="Step 5" className="w-16 h-16" />
                        </div> */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2"> Reporting and Insights</h3>
                            <p className="text-gray-700">ReEase generates detailed reports on rent collection, expenses, vacancies, and more, providing agencies with valuable insights for decision-making.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
