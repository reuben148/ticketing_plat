import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./page/home";
import Next from "./page/next";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav className="flex justify-center gap-6 p-4 bg-gray-100 shadow-md">
        <Link to="/" className="text-green-700 font-semibold hover:underline">
          Home
        </Link>
        <Link to="/next" className="text-green-700 font-semibold hover:underline">
          Next
        </Link>
      </nav>

      {/* Page Content */}
      <div className="flex justify-center items-center min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<Next />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
