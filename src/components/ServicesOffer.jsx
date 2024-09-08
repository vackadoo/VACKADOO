import React, { useState } from "react";

const ServicesOffer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="w-[60vw] md:w-[60vw] bg-white mx-auto z-20">
      <div className="flex flex-col md:grid md:grid-rows-3">
        {/* MEDIA Section */}
        <div
          className={`flex flex-col font-bold items-center justify-center text-black cursor-pointer transition-all duration-300 ${
            activeSection === "media"
              ? "bg-black text-white "
              : "bg-white hover:bg-black hover:text-white h-[15vh]"
          }`}
        >
          <h1
            className={`md:text-xl text-sm md:mb-2 ${
              activeSection === "media" ? "text-white" : ""
            }`}
          >
            MEDIA
          </h1>
        </div>
        {/* MANAGEMENT Section */}
        <div
          className={`flex flex-col font-bold items-center justify-center text-black cursor-pointer transition-all duration-300 ${
            activeSection === "management"
              ? "bg-black text-white "
              : "bg-white hover:bg-black hover:text-white h-[15vh]"
          }`}
          onClick={() => handleClick("management")}
        >
          <h1
            className={`md:text-xl text-sm ${
              activeSection === "management" ? "text-white" : ""
            }`}
          >
            MANAGEMENT
          </h1>
        </div>

        {/* DESIGN Section */}
        <a href="/Design">
          <div
            className={`flex flex-col items-center font-bold justify-center text-black cursor-pointer transition-all duration-300 ${
              activeSection === "design"
                ? "bg-black text-white "
                : "bg-white hover:bg-black hover:text-white h-[15vh]"
            }`}
            onClick={() => handleClick("design")}
          >
            <h1
              className={`md:text-xl text-sm    ${
                activeSection === "design" ? "text-white" : ""
              }`}
            >
              DESIGN
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServicesOffer;
