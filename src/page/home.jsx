import React from "react";

function Next() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="border-2 border-green-500 shadow-lg rounded-2xl w-full max-w-md p-6 sm:p-8 bg-white">
        
        {/* Title */}
        <p className="font-serif text-center text-2xl sm:text-3xl font-semibold text-gray-800">
          Shopify Ticket Upload
        </p>
        <hr className="mt-2 border-gray-300" />

        {/* Upload Box */}
        <div className="border-2 border-gray-400 h-32 w-full rounded-lg flex items-center justify-center mt-6">
          <p className="font-serif text-gray-600">Upload an image</p>
        </div>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <p className="font-medium text-gray-700">Full Name:</p>
            <input 
              type="text"
              className="border border-gray-400 h-12 w-full rounded-lg px-4 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <p className="font-medium text-gray-700">E-mail:</p>
            <input 
              type="email"
              className="border border-gray-400 h-12 w-full rounded-lg px-4 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Generate Button */}
        <button className="mt-6 w-full bg-green-800 text-white py-3 rounded-lg text-base font-medium hover:bg-green-700 transition">
          Generate
        </button>
      </div>

      {/* Back Button */}
      <a href="/" className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg text-base font-medium hover:bg-green-500 transition">
        Go Back
      </a>
    </div>
  );
}

export default Next;

