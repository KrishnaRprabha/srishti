import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-amber-50 text-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been sent to us via WhatsApp. We’ll contact you soon to confirm details and any customization.
        </p>
        <Link
          to="/"
          className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
