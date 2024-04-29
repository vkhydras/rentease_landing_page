import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waitlist = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const subscribeResponse = await fetch("http://localhost:4000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const addUserResponse = await fetch("http://localhost:4000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (subscribeResponse.ok) {
        console.log("User subscribed successfully");
        toast.success("Thank you for subscribing!");
        alert('Subscribe Succefuly')
        setSubscribed(true);
        navigate("/");
      } else {
        console.error(
          "Failed to subscribe user:",
          subscribeResponse.statusText
        );
        return;
      }

      if (addUserResponse.ok) {
        console.log("User added successfully");
      } else {
        console.error("Failed to add user:", addUserResponse.statusText);
      }
    } catch (error) {
      console.error("Failed to subscribe or add user:", error.message);
    }
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
          {subscribed ? (
            <p className="mt-2 text-lg text-gray-700">
              Thank you for subscribing!
            </p>
          ) : (
            <p className="mt-2 text-lg text-gray-700">
              Be the first to know when RentEase is available.
            </p>
          )}
        </div>
        {!subscribed && (
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
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Waitlist;
