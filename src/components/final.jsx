import React from 'react';
import homeBackground from '../assets/homepage.png';
import logo from '../assets/homelogo.png';

const Final = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <div className="text-center max-w-[95%] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
        <LandingLogo />
        <LandingTitle />
      </div>
    </div>
  );
};

const LandingLogo = () => (
  <img
    src={logo}
    alt="Benue Pride Logo"
    className="mx-auto w-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14
               max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]
               transition-transform duration-500 ease-in-out transform hover:scale-110"
  />
);

const LandingTitle = () => (
  <h2 className="font-externalFont font-bold 
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                 mb-6 sm:mb-8 md:mb-10 lg:mb-12
                 transition-opacity duration-500 ease-in-out
                 opacity-90 hover:opacity-100 text-[#6B120E]
                 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
    AND SO IT BEGINS...
  </h2>
);

export default Final;
