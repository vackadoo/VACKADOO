import React, { useRef } from "react";
import Paulsmarquee from "../components/paulsmarquee";
import Videofooter from "../components/Videofooter";
import horizontal2 from "../assets/images/halffooter.gif";
import img1 from "../assets/images/design/img1.png";
import img2 from "../assets/images/design/img2.png";
import img3 from "../assets/images/design/img3.png";
import img4 from "../assets/images/design/img4.png";
import img5 from "../assets/images/design/img5.png";
import img6 from "../assets/images/design/img6.png";
import img7 from "../assets/images/design/img7.png";
import img8 from "../assets/images/design/img8.png";

import INTRODUCTION from "../assets/images/design/INTRODUCTION.jpg";
import INTRODUCTION2 from "../assets/images/design/INTRODUCTION2.jpg";
import raksha from "../assets/images/design/raksha.jpg";
import friend from "../assets/images/design/friend.jpg";
import chief from "../assets/images/design/chief.png";

const videoUrls = [
  "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2F106.mp4?alt=media&token=df1be766-6664-4321-a429-dab57f56b5d5",
  "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158710/Savishkar_showreel_fsst4s.mov",
  "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727349328/IMG_2376_lanwnm_ihhq8x.mp4",
  "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727349316/IMG_1916_nw0nmm_k1da1p.mp4",
  "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727349306/IMG_1555_fb4ppi_pyr8ai.mp4",
];

const Design = () => {
  // Create refs for each video
  const videoRefs = videoUrls.map(() => useRef(null));

  // Handle mouse over to play video
  const handleMouseOver = (ref) => {
    if (ref.current) {
      ref.current.muted = false;
      ref.current.play();
    }
  };

  // Handle mouse leave to pause video
  const handleMouseLeave = (ref) => {
    if (ref.current) {
      ref.current.muted = true;
      ref.current.pause();
    }
  };

  return (
    <div className="bg-white md:px-0 px-2">
      <div className="px-1 md:px-56 pt-8">
        <h1 className="text-black text-3xl md:text-4xl font-bold">DESIGN</h1>
      </div>

      <div>
        <div className="flex flex-wrap justify-start space-x-2 mt-0 pl-0 md:pl-56">
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 md:py-2 md:px-3 rounded-full">
            MOTION GRAPHIC
          </div>

          <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs py-1 md:py-2 px-2 mt-3 md:px-6 rounded-full">
            LOGO WITH BRANDING
          </div>
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 md:py-2 md:px-6 rounded-full">
            ANIMATION
          </div>
        </div>
        <div className="flex flex-wrap justify-start space-x-2 mb-6 pl-4 md:pl-56">
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 md:py-2 md:px-6 rounded-full">
            ILLUSTRATION
          </div>
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 md:py-2 md:px-6 rounded-full">
            WEB DESIGN
          </div>
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 md:py-2 md:px-6 rounded-full">
            GRAPHICS
          </div>
        </div>
      </div>

      <div className="w-full md:w-[1300px] justify-center mx-auto">
        <Paulsmarquee className="justify-center" />
      </div>

      <div className="flex justify-center md:mx-48 mx-1  border-[1px] border-black  ">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </div>
      {/* Centering Frame2 */}

      <div className="flex justify-center md:mx-48  mx-1 mt-4   md:mt-8 border-[1px] border-black  ">
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
        <div>
          <img src={img7} />
        </div>
        <div>
          <img src={img8} />
        </div>
      </div>

      <div className="mt-6 md:mt-10 flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
        <video
          className="object-contain border-[1px] border-black h-auto rounded-xl  max-h-[250px] md:max-h-[500px]"
          muted
          loop
          playsInline
          controls
          poster={INTRODUCTION}
          ref={videoRefs[0]}
          onMouseOver={() => handleMouseOver(videoRefs[0])}
          onMouseLeave={() => handleMouseLeave(videoRefs[0])}
          alt="hsc"
        >
          <source src={videoUrls[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second video */}
      <div className="mt-6 md:mt-10 flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
        <video
          className="object-contain border-[1px] border-black h-auto rounded-xl max-h-[250px] md:max-h-[500px]"
          muted
          loop
          controls
          playsInline
          alt="savishkar"
          ref={videoRefs[1]}
          onMouseOver={() => handleMouseOver(videoRefs[1])}
          onMouseLeave={() => handleMouseLeave(videoRefs[1])}
          poster={INTRODUCTION2}
        >
          <source src={videoUrls[1]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-center pt-8 pr-2 gap-4 md:gap-28">
        <div>
          <video
            className="object-contain border-[1px] border-black h-auto rounded-xl max-h-[250px] md:max-h-[400px]"
            muted
            loop
            playsInline
            controls
            poster={chief}
            ref={videoRefs[2]}
            onMouseOver={() => handleMouseOver(videoRefs[2])}
            onMouseLeave={() => handleMouseLeave(videoRefs[2])}
          >
            <source src={videoUrls[2]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video
            className="object-contain border-[1px] border-black h-auto rounded-xl   max-h-[250px] md:max-h-[400px]"
            muted
            loop
            playsInline
            controls
            poster={raksha}
            ref={videoRefs[3]}
            onMouseOver={() => handleMouseOver(videoRefs[3])}
            onMouseLeave={() => handleMouseLeave(videoRefs[3])}
          >
            <source src={videoUrls[3]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video
            className="object-contain border-[1px] border-black h-auto rounded-xl max-h-[250px] md:max-h-[400px]"
            muted
            loop
            playsInline
            controls
            poster={friend}
            ref={videoRefs[4]}
            onMouseOver={() => handleMouseOver(videoRefs[4])}
            onMouseLeave={() => handleMouseLeave(videoRefs[4])}
          >
            <source src={videoUrls[4]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className=" flex justify-center md:mt-12 mt-0 ">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full md:hidden max-w-[250px] md:max-w-[700px] h-full object-contain"
        />
        <div className="hidden md:block">
          <Videofooter />
        </div>
      </div>
    </div>
  );
};

export default Design;
