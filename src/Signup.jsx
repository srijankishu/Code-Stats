import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gfgUsername: "",
    codeChefUsername: "",
    leetCodeUsername: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "https://coders-stats-backend.vercel.app/api/signup",
        formData
      );

      console.log("Signup Success:", response.data);
      toast.success("Signup successful!");
      setFormData({
        name: "",
        email: "",
        gfgUsername: "",
        codeChefUsername: "",
        leetCodeUsername: "",
      }); // Reset form fields
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      toast.error("Signup failed! Please try again.");
    }
  };

  return (
     
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-blue-700 p-6">
      <Toaster />
       <Link to="/"> <button className="text-white bg-blue-700 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600  transition-all duration-200 m-4 ">
           Back
         </button></Link> 
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Sign Up</h2>
          <form method="dialog">
            <button className="btn btn-circle btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Signup Form */}
        <form className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300 shadow-sm"
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300 shadow-sm"
            required
          />

          {/* LeetCode Username */}
          <input
            type="text"
            name="leetCodeUsername"
            placeholder="LeetCode Username"
            value={formData.leetCodeUsername}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300 shadow-sm"
            required
          />

          {/* CodeChef Username */}
          <input
            type="text"
            name="codeChefUsername"
            placeholder="CodeChef Username"
            value={formData.codeChefUsername}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300 shadow-sm"
            required
          />

          {/* GFG Username */}
          <input
            type="text"
            name="gfgUsername"
            placeholder="GFG Username"
            value={formData.gfgUsername}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-blue-300 shadow-sm"
            required
          />

          {/* Signup Button */}
          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
          >
            Signup
          </button>
        </form>

        {/* Message Section */}
        {message && (
          <p className="mt-4 text-center text-gray-700">{message}</p>
        )}

        {/* Footer Section */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login">
            <button className="text-blue-500 hover:underline">Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
