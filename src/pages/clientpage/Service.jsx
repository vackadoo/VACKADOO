import React, { useEffect, useState, useRef } from "react";
import vertical from "../../assets/images/servic/vertical.png";
import horizontal from "../../assets/images/servic/horizontal.png";
import ServicesOffer from "../../components/ServicesOffer";
import left2 from "../../assets/images/left2.mp4";
import right2 from "../../assets/images/Right2.mp4";

const Service = () => {
  const [showVertical, setShowVertical] = useState(true);
  const leftVideoRef = useRef(null);

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
    <div className="relative bg-white">
      {/* Left Video */}
      <div
        className="fixed left-0 top-0 h-screen w-auto z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={leftVideoRef}
          muted
          playsInline // Added playsInline attribute
          src={left2}
          loop
          className="h-full hidden md:block"
        />
      </div>

      {/* Right Video */}
      <div className="fixed mt-9 right-0 top-0 h-[90vh] w-auto z-10"
      onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <video
          ref={leftVideoRef}
          loop
          muted
          playsInline // Added playsInline attribute
          src={right2}
          className="h-full hidden md:block"
        />
      </div>

      {/* Image Transition */}
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="relative z-20 md:w-full md:max-w-4xl max-w-xl">
          {showVertical ? (
            <img
              src={vertical}
              alt="Vertical"
              className="h-[60vh] w-full object-contain transition-all duration-[3000ms] ease-in-out"
            />
          ) : (
            <img
              src={horizontal}
              alt="Horizontal"
              className="h-[60vh] w-full object-contain transition-all duration-[3000ms] ease-in-out"
            />
          )}
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="flex justify-center bg-white z-20">
        <button
          onClick={scrollToNextSection}
          className="text-black text-6xl bouncy-arrow mb-28"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
            <path d="M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </button>
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
