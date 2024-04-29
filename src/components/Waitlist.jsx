import React, { useState } from "react";
import { Link } from "react-router-dom";

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your waitlist submission logic here
    console.log("Email submitted:", email);
    // Reset the email input
    setEmail("");
  };

  return (
    <section
      id="waitlist"
      className="h-screen flex justify-center items-center bg-gray-200"
    >
      <div className="max-w-lg mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Join the Waitlist
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Be the first to know when RentEase is available.
          </p>
        </div>
        <div className="mt-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-0 sm:mr-2 mb-2 sm:mb-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
            >
              Join Now
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            By joining the waitlist, you agree to receive email updates about
            RentEase. You can unsubscribe at any time.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block text-sm text-gray-600 underline"
          >
            back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
