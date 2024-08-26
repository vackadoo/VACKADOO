import React, { useState } from "react";

const ServicesOffer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="w-[90vw] md:w-[60vw] bg-white mx-auto">
      <div className="flex flex-col md:grid md:grid-rows-3">
        {/* MEDIA Section */}
        <div
          className={`flex flex-col font-bold items-center justify-center text-black cursor-pointer transition-all duration-300 ${
            activeSection === "media"
              ? "bg-black text-white h-[30vh]"
              : "bg-white hover:bg-black hover:text-white h-[15vh]"
          }`}
          onClick={() => handleClick("media")}
        >
          <h1
            className={`text-xl ${
              activeSection === "media" ? "text-white" : ""
            }`}
          >
            MEDIA
          </h1>
          <div
            className={`flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === "media"
                ? "max-h-[500px] opacity-100 mt-4 bg-black w-full"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center space-x-2 ">
              <div className="bg-white text-black font-semibold text-[8px] md:text-xs mt-2 pt-2 px-2 rounded-full">
                CONTENT PRODUCTION
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs py-2 px-2 mt-2 md:px-6 rounded-full">
                PODCAST PRODUCTION
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                EVENT COVERAGE
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                CAMPAIGN MANAGEMENT
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                PHOTOSHOOTS & VIDEOSHOOTS
              </div>
            </div>
          </div>
        </div>

        {/* MANAGEMENT Section */}
        <div
          className={`flex flex-col font-bold items-center justify-center text-black cursor-pointer transition-all duration-300 ${
            activeSection === "management"
              ? "bg-black text-white h-[30vh]"
              : "bg-white hover:bg-black hover:text-white h-[15vh]"
          }`}
          onClick={() => handleClick("management")}
        >
          <h1
            className={`text-xl ${
              activeSection === "management" ? "text-white" : ""
            }`}
          >
            MANAGEMENT
          </h1>
          <div
            className={`flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === "management"
                ? "max-h-[500px] opacity-100 mt-4 bg-black w-full"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center space-x-2 p-2">
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                BRAND
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                SOCIAL PLATFORM
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN Section */}
        <div
          className={`flex flex-col items-center font-bold justify-center text-black cursor-pointer transition-all duration-300 ${
            activeSection === "design"
              ? "bg-black text-white h-[30vh]"
              : "bg-white hover:bg-black hover:text-white h-[15vh]"
          }`}
          onClick={() => handleClick("design")}
        >
          <h1
            className={`text-xl ${
              activeSection === "design" ? "text-white" : ""
            }`}
          >
            DESIGN
          </h1>
          <div
            className={`flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
              activeSection === "design"
                ? "max-h-[500px] opacity-100 mt-4 bg-black w-full"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center space-x-2 p-2">
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                MOTION GRAPHICS
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                LOGOS WITH BRANDING
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                ANIMATION
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                ILLUSTRATIONS
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                WEB DESIGN
              </div>
              <div className="bg-white text-black font-semibold text-[10px] md:text-xs mt-3 py-2 px-2 md:py-2 md:px-6 rounded-full">
                GRAPHICS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
