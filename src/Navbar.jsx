import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Navbar = () => {

  


  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg font-poppins sticky top-0 z-50">
      <div className="navbar mx-auto max-w-7xl px-4 py-3">
        {/* Left Section - Brand */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              tabIndex="0"
              role="button"
              className="btn btn-ghost focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content z-[1] mt-3 w-56 rounded-xl bg-white p-4 text-gray-800 shadow-lg gap-4"
            >
              <li>
                <a href="#" className="block px-4 py-2 text-md font-semibold hover:bg-purple-200 hover:underline rounded-md transition duration-300">CodeChef</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-md font-semibold hover:bg-purple-200 hover:underline rounded-md transition duration-300">LeetCode</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-md font-semibold hover:bg-purple-200 hover:underline rounded-md transition duration-300">GeeksforGeeks</a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="btn btn-ghost text-3xl font-extrabold tracking-wide  text-[19px] sm:text-3xl text-white"
          >
            CodeStats
          </a>
        </div>

        {/* Center Section - Links (Visible on Large Screens) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8 text-white">
            <li>
              <a className="hover:text-pink-300 transition duration-200 hover:underline text-lg" href="#">
                CodeChef
              </a>
            </li>
            <li>
              <a className="hover:text-pink-300 transition duration-200  hover:underline text-lg" href="#">
                LeetCode
              </a>
            </li>
            <li>
              <a className="hover:text-pink-300 transition duration-200 hover:underline text-lg" href="#">
                GeeksforGeeks
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Button */}
        <div className="navbar-end">
         
          <button className="btn rounded-full bg-white px-5 py-2 font-semibold text-purple-600 transition duration-300 hover:bg-pink-300 hover:text-white sm:px-5 sm:py-2 px-3 py-1 text-sm sm:text-base"
          onClick={()=>document.getElementById('my_modal_1').showModal()}> Get Started</button>
          <dialog id="my_modal_1" className="modal">
            <Login/>
          </dialog>
        
          
           

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
