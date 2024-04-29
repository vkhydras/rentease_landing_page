import React, { useState } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([
        {
            quote: "We've been using RentEase for over a year now, and it has made a significant difference in our efficiency and accuracy. The customer support team is also very responsive and helpful.",
            author: "Jane Smith, Real Estate Agency Owner"
        },
        {
            quote: "RentEase has been a game-changer for WiwaTech Agencies. It has streamlined our property management processes and improved our overall efficiency.",
            author: "WiwaTech Agencies"
        }
    ]);

    // const addTestimonial = () => {
    //     // Add new testimonial to the existing list
    //     setTestimonials([...testimonials, {
    //         quote: "New testimonial quote",
    //         author: "New testimonial author"
    //     }]);
    // };

    return (
        <section id="testimonials" className="py-12 bg-gray-200 h-screen overflow-hidden flex justify-center items-center">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
                    <p className="mt-2 text-lg text-gray-700">See what our clients have to say about RentEase.</p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-2 place-items-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                            <p className="text-gray-900 font-bold">{testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
