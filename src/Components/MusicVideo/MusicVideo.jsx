import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import play and pause icons

const MusicVideo = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="video-player"
        controls={false}
      ></video>
      <button onClick={handlePlayPause} className="play-pause-button">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicVideo;
