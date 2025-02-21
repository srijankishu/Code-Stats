import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex items-center justify-center min-h-screen w-screen mx-auto m-2 '>
      <div className="w-full max-w-md   bg-white p-8 rounded-2xl shadow-lg ">
      <div className="flex justify-between items-center mb-6">
  <h2 className="text-3xl font-semibold text-gray-800">Login</h2>
  <form method="dialog">
  <button className="btn btn-circle btn-outline " >
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

        <form className="space-y-4">
          {/* Search Input */}
           

          {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793l6.674 3.217c.206.1.446.1.652 0L15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954L8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" className="grow focus:outline-none" placeholder="Email" required />
          </label>

          {/* Username Input */}
          <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" value="password" />
</label>

          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup">
  <button className="text-blue-500 hover:underline">Sign up</button>
</Link>
        </p>
      </div>
    </div>
   
  );
};

export default Login;
