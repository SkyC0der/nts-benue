import React, { useEffect, useRef, useState } from 'react';

const BackgroundAudio = () => {
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
    <audio ref={audioRef} autoPlay loop style={{ display: 'none' }} preload="auto">
      <source
        src="https://res.cloudinary.com/skycoder/video/upload/br_64k/v1727646916/pride_qdszb7.mp3"
        type="audio/mp3"
      />
    </audio>

  );
};

export default BackgroundAudio;
