import React from 'react';
import homeBackground from '../assets/homepage.png';
import logo from '../assets/homelogo.png';
import vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <div className="text-white text-center px-4">
        <LandingLogo />
        <LandingTitle />
        <LandingUnderline />
        <LandingParagraph />
        <LandingButton />
      </div>
    </div>
  );
};

const LandingLogo = () => (
  <img
    src={logo}
    alt="Benue Pride Logo"
    className="block mx-auto w-auto mb-2 sm:mb-4 max-w-[200px] sm:max-w-[300px] md:max-w-lg transition-transform duration-700 ease-in-out transform hover:scale-110"
  />
);

const LandingTitle = () => (
  <>
    <h2 className="font-myLocalFont font-bold text-sm sm:text-base md:text-xl mb-2 sm:mb-4 transition-opacity duration-700 ease-in-out opacity-80 hover:opacity-100 delay-200 text-[#6B120E]">
      ANSWER THE CALL OF THE
    </h2>
    <h1 className="font-externalFont text-transparent bg-clip-text bg-gradient-to-tr from-[#17130F] to-[#906131] text-4xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-4 transition-transform duration-1000 ease-in-out transform hover:scale-105 delay-300">
      BENUE PRIDE
    </h1>
  </>
);

const LandingUnderline = () => (
  <img
    src={vector}
    alt="Underline"
    className="block mx-auto w-auto mb-2 sm:mb-4 max-w-[200px] sm:max-w-[300px] md:max-w-lg transition-transform duration-700 ease-in-out transform hover:scale-105 delay-500"
  />
);

const LandingParagraph = () => (
  <p className="text-md sm:text-xl md:text-3xl text-[#6B120E] font-Cairo font-normal mb-4 sm:mb-8 transition-opacity duration-700 ease-in-out opacity-80 hover:opacity-100 delay-400">
    Embark on a quest to claim the Royal Bounty. <br className="hidden sm:inline" /> Will you rise to the challenge?
  </p>
);
  const LandingButton = () => (
    <Link to = "/register" className="inline-block group">
      <button className="font-Cairo text-sm sm:text-base md:text-l bg-gradient-to-t from-[#A4713D] to-[#32281E]text-white w-48 sm:w-56 md:w-64 h-12 sm:h-14 rounded-full 
                         py-2 sm:py-3 px-8 sm:px-12 
                         transition-all duration-300 ease-in-out 
                         transform hover:scale-105 
                         hover:shadow-lg 
                         hover:bg-gradient-to-t hover:from-[#B5814D] hover:to-[#43392E] 
                         group-hover:opacity-90">
        <span className="relative z-10">Begin Your Journey</span>
        <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
      </button>
    </Link>
  );

export default Landing;
