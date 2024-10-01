import React, { useEffect, useRef, useState } from "react";
import homeBackground from "../assets/homepage.png";
import logo from "../assets/homelogo.png";
import vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const audioRef = useRef(null);
  
 
  const [isPlaying, setIsPlaying] = useState(false);
 
  const handlePlayButtonClick = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  useEffect(() => {
    const playAudioOnUserInteraction = () => {
      document.removeEventListener('click', playAudioOnUserInteraction);
      handlePlayButtonClick();
    };

    if (!isPlaying) {
      document.addEventListener('click', playAudioOnUserInteraction);
    }

    return () => {
      document.removeEventListener('click', playAudioOnUserInteraction);
    };
  }, [isPlaying]);

  return (
    <div className="h-screen md:h-screen w-full form-bg bg-cover bg-center bg-no-repeat bg-blend-hard-light bg-[#f1e6c7] flex flex-col justify-center items-center">
         <audio ref={audioRef} loop style={{ display: 'none' }}>
     <source
        src="https://res.cloudinary.com/skycoder/video/upload/br_64k/v1727646916/pride_qdszb7.mp3"
        type="audio/mp3"
      /></audio>
      <div className="text-white text-center px-6">
        <LandingLogo />
        <LandingTitle />
        <LandingUnderline />
        <LandingParagraph />
        <LandingButton handlePlay={handlePlayButtonClick} />
      </div>
    </div>
  );
};

// const BackgroundAudio = () => {

//   return (
//     <div>
//       <button >Play Background Audio</button>
//    
//       </audio>
//     </div>
//   );
// };

const LandingLogo = () => (
  <img
    src={logo}
    alt="Benue Pride Logo"
    className="block mx-auto w-auto mb-2 sm:mb-4 max-w-[200px] sm:max-w-[300px] md:max-w-lg transition-transform duration-700 ease-in-out transform hover:scale-110"
  />
);

const LandingTitle = () => (
  <>
    <h2 className="font-myLocalFont font-bold text-sm sm:text-base md:text-xl mb-2 sm:mb-4 transition-opacity duration-700 ease-in-out  hover:opacity-100 delay-200 text-[#6B120E]">
      ANSWER THE CALL OF THE
    </h2>
    {/* <h1 className="font-externalFont text-transparent bg-clip-text bg-gradient-to-tr from-[#17130F] to-[#906131] text-4xl sm:text-6xl md:text-[118px] font-bold mb-2 sm:mb-4 transition-transform duration-1000 ease-in-out transform hover:scale-105 delay-300">
      BENUE PRIDE
    </h1> */}
    <div className="mb-4">
    <img src="/Vector.svg" alt="" />
    </div>
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
  <p className="text-[21px] sm:text-xl  md:text-3xl max-w-xl mt-6 mx-auto text-[#6B120E] font-myLocalFont font-semibold mb-4 sm:mb-8 transition-opacity duration-700 ease-in-out hover:opacity-100 delay-400">
    Embark on a quest to claim the Royal Bounty.{" "}
    Will you rise to the challenge?
  </p>
);
const LandingButton = ({handlePlay}) => (
  <Link to="/register" className="inline-block group mt-14 mb-6">
    <button
    onClick={handlePlay}
      className=" font-myLocalFont progress-btn text-sm sm:text-base 
                         sm:py-3 px-8 sm:px-12 
                         transition-all duration-300 ease-in-out 
                         transform hover:scale-105 
                         hover:shadow-lg 
                        
                         hover:bg-gradient-to-t hover:from-[#B5814D] hover:to-[#43392E] 
                        "
    >
      <span className="relative  text-[20px] z-10">Begin Your Journey</span>
      {/* <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div> */}
    </button>
  </Link>
);

export default Landing;
