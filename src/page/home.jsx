import React, { useState } from "react";

function Next() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: null, 
  });

  const [errors, setErrors] = useState({});
  const [ticket, setTicket] = useState(null);
  const [preview, setPreview] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      setFormData({ ...formData, avatar: file });

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Valid email is required.";
    if (!formData.avatar) tempErrors.avatar = "Please upload an image.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTicket(formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="border-2 border-green-500 shadow-lg rounded-2xl w-full max-w-md p-6 sm:p-8 bg-white">
        
        {/* Title */}
        <p className="font-serif text-center text-2xl sm:text-3xl font-semibold text-gray-800">
          Confrence Ticket Generator
        </p>
        <hr className="mt-2 border-gray-300" />

        {/* Upload Image */}
        <div className="mt-6">
          <label className="block font-medium text-gray-700">Upload an Image:</label>
          <div className="border-2 border-gray-400 h-32 w-full rounded-lg flex items-center justify-center mt-2 overflow-hidden relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="imageUpload"
            />
            <label htmlFor="imageUpload" className="cursor-pointer w-full h-full flex items-center justify-center">
              {preview ? (
                <img src={preview} alt="Preview" className="absolute w-full h-full object-cover rounded-lg" />
              ) : (
                <p className="text-gray-600">Click to Upload</p>
              )}
            </label>
          </div>
          {errors.avatar && <p className="text-red-500 text-sm mt-1">{errors.avatar}</p>}
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <p className="font-medium text-gray-700">Full Name:</p>
            <input 
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-400 h-12 w-full rounded-lg px-4 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <p className="font-medium text-gray-700">E-mail:</p>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 h-12 w-full rounded-lg px-4 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Generate Button */}
          <button type="submit" className="mt-6 w-full bg-green-800 text-white py-3 rounded-lg text-base font-medium hover:bg-green-700 transition">
            Generate Ticket
          </button>
        </form>
      </div>

      {/* Display Ticket if form is valid */}
      {ticket && (
        <div className="mt-6 border-2 border-green-500 shadow-lg rounded-2xl w-full max-w-md p-6 bg-white">
          <p className="text-center font-serif text-xl font-semibold text-green-600">🎟️ Booked Ticket 🎟️</p>
          <div className="flex flex-col items-center mt-4">
            {preview && <img src={preview} alt="Avatar" className="w-24 h-24 rounded-full border-2 border-green-500" />}
            <p className="font-serif text-lg mt-3">{ticket.fullName}</p>
            <p className="text-gray-600">{ticket.email}</p>
          </div>
        </div>
      )}

      {/* Back Button */}
      <a href="/" className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg text-base font-medium hover:bg-green-500 transition">
        Go Back
      </a>
    </div>
  );
}

export default Next;
