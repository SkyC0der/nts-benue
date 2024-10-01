import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/homelogo.png';
import background from '../assets/homepage.png';

const nextKin = () => {
  const progress = 100;
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
                type="word"
                placeholder="Relationship with Next of Kin"
                className="w-full p-2 border-b-2 border-yellow-800 bg-transparent"
                aria-label=""
              />

              <input
                type="word"
                placeholder="Any suggestions ?"
                className="w-full p-2 border-b-2 border-yellow-800 bg-transparent"
                aria-label=""
              />
            
            </form>
            
            <div className="flex justify-between mt-6">
              <Link to="/allergyPage" className="text-white hover:text-yellow-700">
                &lt; Go Back
              </Link>
              <Link to="/final">
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
            ARE YOU PREPARED? 
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nextKin;