import React, { useRef, useState } from 'react';

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
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicVideo;
