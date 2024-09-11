import React, { useEffect, useState, useRef } from "react";
import vertical from "../../assets/images/servic/vertical.png";
import ServicesOffer from "../../components/ServicesOffer";
import left2 from "../../assets/images/left2.mp4";
import right2 from "../../assets/images/Right2.mp4";

const Service = () => {
  const [showVertical, setShowVertical] = useState(true);
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVertical(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnterLeft = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.play();
    }
  };

  const handleMouseLeaveLeft = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.pause();
    }
  };

  const handleMouseEnterRight = () => {
    if (rightVideoRef.current) {
      rightVideoRef.current.play();
    }
  };

  const handleMouseLeaveRight = () => {
    if (rightVideoRef.current) {
      rightVideoRef.current.pause();
    }
  };

  return (
    <div className="relative bg-white">
      {/* Left Video */}
      <div
        className="fixed left-0 md:top-0 top-32 h-[50vh] md:h-[110vh] w-auto z-10 hidden md:block"
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
      >
        <video
          ref={leftVideoRef}
          muted
          
          playsInline
          src={left2}
          loop
          className="h-full "
        />
      </div>

      {/* Right Video */}
      <div
        className="fixed md:mt-9 mt-20 right-0 md:top-0 h-[50vh] md:h-[110vh] hidden md:block w-auto z-10"
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
      >
        <video
          ref={rightVideoRef}
          muted
          src={right2}
          loop
          
          playsInline
          className="h-full"
        />
      </div>

      {/* Image and Text */}
      <div className="flex flex-col justify-center h-[40vh] items-center md:h-screen md:pt-0 pt-20 bg-transparent">
        <div className="relative z-20 md:w-full md:max-w-4xl max-w-xl">
          {showVertical ? (
            <img
              src={vertical}
              alt="Vertical"
              className="h-[60vh] w-full object-contain transition-all duration-[1000ms] ease-in-out"
            />
          ) : (
            <h1 className="text-black text-4xl font-bold text-center transition-all duration-[1000ms] ease-in-out">
              SERVICES
            </h1>
          )}
        </div>

        {/* Arrow placed below the text */}
        <div className="flex flex-cols justify-center w-full mt-20 z-20">
          <button
            onClick={scrollToNextSection}
            className="text-black text-6xl bouncy-arrow "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <path d="M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Next Section */}
      <section
        id="next-section"
        className="h-screen flex items-center justify-center bg-white"
      >
        <ServicesOffer />
      </section>
    </div>
  );
};

export default Service;
