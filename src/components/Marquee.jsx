import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import picture1 from "../assets/brand/Picture1.png";
import picture2 from "../assets/brand/Picture2.png";
import picture3 from "../assets/brand/Picture3.png";
import picture4 from "../assets/brand/Picture4.png";
import picture5 from "../assets/brand/Picture5.png";
import picture6 from "../assets/brand/Picture6.png";
import picture7 from "../assets/brand/Picture7.png";
import picture8 from "../assets/brand/Picture8.png";
import picture9 from "../assets/brand/Picture9.png";
import picture10 from "../assets/brand/Picture10.png";
import Vodcastemove from "./Vodcastemove";

export default function Marquee() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tedx");
  };

  const [isSliding, setIsSliding] = useState(false);

  // Function to toggle sliding effect
  const handleSlide = () => {
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 1000); // Reset after animation
  };

  return (
    <div className="relative flex flex-col items-center w-full overflow-hidden">
      <div className="relative flex max-w-full overflow-hidden md:mt-10 mb-20 md:py-4 bg-black">
        <div className="flex animate-marqueeMobile md:animate-marquee md:max-w-[1300px]">
          <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture1}
                  className="object-cover  w-full h-full max-w-[2rem] max-h-[6rem] sm:max-w-[2rem] sm:max-h-[4rem] md:max-w-[5rem] md:max-h-[4rem]"
                  alt="jurisDomain"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture2}
                  className="object-cover md:  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="Pauls"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[5rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture3}
                  className="object-cover   w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] mt-4 md:mt-3 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="AdolfLeather"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem] w-[5rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture4}
                  className="object-cover md:pt-5  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] mt-4 md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="gnixar"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem] w-[6rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture5}
                  className="object-cover  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="ric"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[5rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture6}
                  className="object-cover md:pt-6 mt-4  w-full h-full max-w-[4rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[8rem] md:max-h-[5rem]"
                  alt="tedx"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem]  w-[5rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture7}
                  className="object-cover  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-2 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="savishkar"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[6rem]  md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture8}
                  className="object-cover mb-3  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="Horizon"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture9}
                  className="object-cover pt-2  w-full h-full max-w-[2rem] md:pt-2 max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[3rem] md:max-h-[4rem]"
                  alt="y20"
                />
              </div>
            </div>
          </div> */}
          <div className="flex-shrink-0 h-full md:w-[10rem] w-[6rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={picture10}
                  className="object-cover pb-2  w-full h-full max-w-[3rem] max-h-[8rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[6rem] md:max-h-[4rem]"
                  alt="zarnik"
                />
              </div>
            </div>
          </div>

          {/* again - 1 */}

          <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture1}
                  className="object-cover  w-full h-full max-w-[2rem] max-h-[6rem] sm:max-w-[2rem] sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="jurisDomain"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture2}
                  className="object-cover md:  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="Pauls"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[5rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture3}
                  className="object-cover   w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] mt-4 md:mt-3 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="AdolfLeather"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem] w-[5rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture4}
                  className="object-cover md:pt-5  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] mt-6 md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="gnixar"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem] w-[6rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture5}
                  className="object-cover  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="ric"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[5rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture6}
                  className="object-cover md:pt-6 mt-4  w-full h-full max-w-[4rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[6rem] md:max-h-[4rem]"
                  alt="tedx"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem]  w-[5rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture7}
                  className="object-cover  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-2 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="savishkar"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[6rem]  md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture8}
                  className="object-cover mb-3  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="Horizon"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture9}
                  className="object-cover pt-2  w-full h-full max-w-[2rem] md:pt-2 max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[3rem] md:max-h-[4rem]"
                  alt="y20"
                />
              </div>
            </div>
          </div> */}
          <div className="flex-shrink-0 h-full md:w-[7rem] w-[6rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={picture10}
                  className="object-cover pb-2  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[8rem] md:max-h-[4rem]"
                  alt="zarnik"
                />
              </div>
            </div>
          </div>

          {/* again - 2 */}

          {/* again */}

          <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture1}
                  className="object-cover  w-full h-full max-w-[2rem] max-h-[6rem] sm:max-w-[2rem] sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="jurisDomain"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture2}
                  className="object-cover md:  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="Pauls"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[5rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture3}
                  className="object-cover   w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] mt-4 md:mt-3 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="AdolfLeather"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem] w-[5rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture4}
                  className="object-cover md:pt-5  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] mt-6 md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="gnixar"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem] w-[6rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture5}
                  className="object-cover  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="ric"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[5rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture6}
                  className="object-cover md:pt-6 mt-4  w-full h-full max-w-[4rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[6rem] md:max-h-[4rem]"
                  alt="tedx"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[10rem]  w-[5rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture7}
                  className="object-cover  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-2 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="savishkar"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full w-[6rem]  md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture8}
                  className="object-cover mb-3  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="Horizon"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex-shrink-0 h-full w-[4rem] md:w-[10rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture9}
                  className="object-cover pt-2  w-full h-full max-w-[2rem] md:pt-2 max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[3rem] md:max-h-[4rem]"
                  alt="y20"
                />
              </div>
            </div>
          </div> */}
          <div className="flex-shrink-0 h-full md:w-[7rem] w-[6rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={picture10}
                  className="object-cover pb-2  w-full h-full max-w-[3rem] max-h-[6rem] sm:max-w-[4rem] md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="zarnik"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block"> <Vodcastemove/></div>
       
        {/* <a
          href="/service"
          className="hidden md:block py-2 px-6 rounded-full text-black bg-white hover:bg-[#242424] transform transition-transform duration-300 hover:scale-110"
        >
          OUR SERVICES
        </a> */}


     
    </div>
  );
}
