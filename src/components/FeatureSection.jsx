import React, { useEffect, useState } from "react";
import vertical from "../assets/images/vertical.png";
import vertical1 from "../assets/images/vertical1.png";
import horizontal from "../assets/images/horizontal.png";
import Pauls from "../assets/images/clientposter/Biryani.png";
import FiemFoundation from "../assets/images/clientposter/FiemFoundation.png";
import HorzionStudy from "../assets/images/clientposter/HorizonStudy.png";
import JurisDomain from "../assets/images/clientposter/JurisDomain.png";
import Leather from "../assets/images/clientposter/Leather.png";
import tedx from "../assets/images/clientposter/Tedxshiva.png";
import { useNavigate } from "react-router-dom";

const items = [
  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },

  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },

  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },

  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },

  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },
];

const FeatureSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMarqueeVisible, setIsMarqueeVisible] = useState(
    sessionStorage.getItem("isMarqueeVisible") === "true"
  );
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/${name}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight / 2;

      setIsScrolled(scrollTop > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    if (isScrolled && !isMarqueeVisible) {
      const timer = setTimeout(() => {
        setIsMarqueeVisible(true);
        sessionStorage.setItem("isMarqueeVisible", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isMarqueeVisible]);

  return (
    <div className="relative h-[40vh] md:mb-0 mb-16 md:h-[60vh]  flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <img
        src={horizontal}
        className={`hidden md:block absolute transition-transform duration-[2000ms] ease-in-out transform ${
          isScrolled
            ? "translate-x-[-40vw] opacity-10"
            : "translate-x-0 opacity-100"
        }`}
        alt="Horizontal"
      />
      <img
        src={vertical1}
        className={`hidden md:block absolute h-[60vh] transition-transform duration-[2000ms] ease-in-out transform ${
          isScrolled
            ? "translate-x-[-40vw] opacity-100"
            : "translate-x-[20vw] opacity-0"
        }`}
        alt="Vertical"
      />

      {/* Marquee Section */}
      {isMarqueeVisible && (
        <>
          <div className="hidden md:block absolute bottom-0 md:max-w-[1100px] md:ml-36 md:mb-2 overflow-hidden z-10">
            <div className="flex animate-marquee gap-5">
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 md:h-full px-2.5 md:py-14 w-[9rem]"
                  onClick={() => handleClick(item.name)}
                >
                  <img
                    src={item.image}
                    className="object-contain rounded-lg cursor-pointer transition-transform transform hover:scale-150"
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden max-w-[600px] text-center mb-36  ">
            <h1 className="text-white text-xl font-bold md:mb-0  mb-10">
              Projects
            </h1>

            <div className="absolute flex animate-marqueeMobile overflow-auto md:mb-8  mb-14">
              {[...items, ...items].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[7rem] px-4"
                  onClick={() => handleClick(item.name)}
                >
                  <img
                    src={item.image}
                    className="object-contain rounded-lg"
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeatureSection;
