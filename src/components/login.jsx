import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/homelogo.png';
import background from '../assets/homepage.png';

const Login = () => {
  const progress = 50;
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
              <div className="relative">
                <select
                  className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-yellow-900 appearance-none"
                  aria-label="Your Local Committee"
                >
                  <option value="">Your Local Committee</option>
                  <option value="">Abeokuta</option>
                  <option value="">Abuja</option>
                  <option value="">Akure</option>
                  <option value="">Benin</option>
                  <option value="">Benue</option>
                  <option value="">Calabar</option>
                  <option value="">Enugu</option>
                  <option value="">Ibadan</option>
                  <option value="">Ife</option>
                  <option value="">Ilorin</option>
                  <option value="">Jos</option>
                  <option value="">Lagos</option>
                   <option value="">Port Harcourt</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-800">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
              
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-yellow-900"
                aria-label="Date of Birth"
              />
              
              <div className="relative">
                <select
                  className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-yellow-900 appearance-none"
                  aria-label="What title do you hold?"
                >
                  <option value="">What title do you hold?</option>
                  <option value="">LCP</option>
                  <option value="">LCVP</option>
                  <option value="">TL</option>
                  <option value="">TM</option>
                  {/* Add more options as needed */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-800">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select
                  className="w-full p-2 border-b-2 border-yellow-800 bg-transparent text-yellow-900 appearance-none"
                  aria-label="Is this your first hunt?"
                >
                  <option value="">Is this your first hunt?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-800">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </form>
                        
            <div className="flex justify-between mt-6">
              <Link to="/register" className="text-yellow-900 hover:text-yellow-700">
                &lt; Go Back
              </Link>
              <Link to="/allergyPage">
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
            <h2 className="text-3xl font-externalFont font-bold text-[#6B120E] leading-tight">
                The Prize Awaits Those Who Prove Worthy...
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;