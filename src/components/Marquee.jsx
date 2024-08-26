import { useNavigate } from "react-router-dom";
import React from "react";
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

export default function Marquee() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tedx");
  };
  return (
    <div className="relative flex flex-col items-center w-full  overflow-hidden">
      <div className="relative flex max-w-full   overflow-hidden mb-20 md:py-5">
        <div className="flex animate-marquee w-full ">
          <div className="flex-shrink-0 h-full w-[6rem] md:w-[12rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center ">
                <img
                  src={picture1}
                  className="object-cover grayscale w-full h-full max-w-[6rem] max-h-[6rem] sm:max-w-[4rem] sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="jurisDomain"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full w-[6rem]   md:w-[12rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center ">
                <img
                  src={picture2}
                  className="object-cover grayscale w-full h-full max-w-[6rem] max-h-[6rem] sm:max-w-[4rem] sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="Pauls"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full w-[9rem]  md:w-[12rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center ">
                <img
                  src={picture3}
                  className="object-cover grayscale w-full h-full max-w-[6rem] max-h-[6rem] sm:max-w-[4rem] mt-6 md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="AdolfLeather"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full md:w-[12rem] w-[9rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture4}
                  className="object-cover grayscale w-full h-full max-w-[6rem] max-h-[6rem] sm:max-w-[4rem] mt-9 md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="gnixar"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full md:w-[12rem] w-[6rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center ">
                <img
                  src={picture5}
                  className="object-cover grayscale w-full h-full max-w-[6rem] max-h-[6rem] sm:max-w-[4rem]  md:mt-0 sm:max-h-[4rem] md:max-w-[4rem] md:max-h-[4rem]"
                  alt="ric"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full  w-[12rem] flex items-center justify-center ">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center  ">
                <img
                  src={picture6}
                  className=" object-cover grayscale pt-16 cursor-pointer"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                  }}
                  alt="tedx"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full  w-[12rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center ">
                <img
                  src={picture7}
                  className=" object-cover grayscale pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                  }}
                  alt="savishkar"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full  w-[12rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center">
                <img
                  src={picture8}
                  className=" object-cover grayscale pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                  }}
                  alt="Horizon"
                />
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 h-full  w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center ">
                <img
                  src={picture9}
                  className=" object-cover grayscale pt-14"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "8rem",
                    maxHeight: "8rem",
                  }}
                  alt="y20"
                />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 h-full  w-[14rem] flex items-center justify-center">
            <div className="relative h-full transform transition-transform duration-150">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={picture10}
                  className=" object-cover  pt-10"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "8rem",
                    maxHeight: "6rem",
                  }}
                  alt="zarnik"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-9">
        <div>
          <a
            href="/calls"
            className=" hidden md:block py-2 px-6 rounded-full text-black bg-white hover:bg-[#242424] transform transition-transform duration-300 hover:scale-110"
          >
            SERVICES
          </a>
        </div>
        <a
          href="/calls"
          className="md:hidden py-2 mt-4 px-6 rounded-full text-white  hover:bg-white bg-[#242424] transform transition-transform duration-300 hover:scale-110"
        >
          SERVICES
        </a>
      </div>
    </div>
  );
}
