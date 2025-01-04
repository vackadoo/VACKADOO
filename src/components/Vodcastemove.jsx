import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vodcaste from "../assets/images/vodecaste.png";

const Vodcastemove = () => {
  const [isSliding, setIsSliding] = useState(false);
  const navigate = useNavigate();

  const handleSlide = () => {
    setIsSliding(true);

    // Redirect after the animation duration (1 second in this case)
    setTimeout(() => {
      navigate("/Vodcaste"); // Redirect to the Vodcaste page
    }, 1000); // Match the duration of the animation (1s)
  };

  return (
    <div className="bg-black flex items-center justify-center pb-20">
      {/* Oval-shaped container */}
      <div
        className="relative md:w-[400px]  w-[250px] h-[90px] md:h-[140px] bg-white rounded-full overflow-hidden cursor-pointer flex items-center"
        onClick={handleSlide} // Slide trigger
      >
        {/* Vodcast Card */}
        <div
          className={`absolute top-[52%] left-1 transform -translate-y-1/2 transition-transform duration-1000 ${
            isSliding ? "md:translate-x-[215px] translate-x-[130px]" : "translate-x-0"
          }`}
        >
          <div className="flex items-center">
            <img src={vodcaste} alt="Vodcast" className="md:h-[130px] h-[80px] w-auto" />
          </div>
        </div>

        {/* Static Text */}
        <div
          className={`absolute right-6 text-black md:text-xs text-[8px]  transition-opacity duration-700 ${
            isSliding ? "opacity-0" : "opacity-100"
          } flex flex-col items-center`}
        >
          <span>Podcast services by</span>
          <span className="font-bold">VACKADOO</span>
        </div>
      </div>
    </div>
  );
};

export default Vodcastemove;
