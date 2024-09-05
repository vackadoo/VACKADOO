import React, { useRef } from "react";
import Rf2 from "../assets/video/Rf2.mp4"; // Ensure the video source is correctly imported

const Videofooter = () => {
  const leftVideoRef = useRef(null);

  const handleMouseEnter = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.pause();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={Rf2}
        ref={leftVideoRef}
        muted
        loop
        playsInline
        className=" md:h-16 md:px-0 px-6 md:pl-0 md:mb-0"
      />
    </div>
  );
};

export default Videofooter;
