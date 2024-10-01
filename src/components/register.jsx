import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/homelogo.png';
import background from '../assets/homepage.png';

const Register = () => {
  const progress = 25;
  return (
    <div
      className="font-myLocalFont min-h-screen w-full bg-blend-hard-light bg-[#f1e6c7] bg-cover bg-center bg-no-repeat flex justify-center items-center p-4"
      style={{ backgroundImage: `url(${background})`}}
    >
      <div className="w-full max-w-5xl p-10 rounded-lg shadow-lg relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            {/* Progress Bar */}
            <div className="w-full rounded-xl h-3 bg-gray-300 mb-6">
              <div
                className="h-full bg-yellow-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            {/* Logo */}
            <div className="mb-6">
              <img src={logo} alt="NTS Benue Logo" className="mx-auto max-w-[150px]" />
            </div>
            
            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-white"
                aria-label="Full Name"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-white"
                aria-label="Phone Number"
              />
              <div className="relative">
                <select
                  className="w-full p-2 border-b-2 border-yellow-800 bg-transparent appearance-none"
                  aria-label="Gender"
                >
                  <option value="">What is your Gender?</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-white"
                aria-label="Email Address"
              />
            </form>
            
            <div className="flex justify-between mt-6">
              <Link to="/" className="text-yellow-900 hover:text-yellow-700">
                &lt; Go Back
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className="px-6 py-2 bg-yellow-800 text-white rounded-full hover:bg-yellow-700 transition duration-300"
                >
                  Continue
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right side - Text */}
          <div className="font-externalFont w-full lg:w-1/2 flex items-center justify-center text-center mt-8 lg:mt-0">
            <h2 className="text-3xl font-bold text-[#6B120E] leading-tight">
              YOUR JOURNEY TO CLAIM THE ROYAL BOUNTY STARTS HERE...
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;