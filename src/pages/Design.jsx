import React, { useRef } from "react";
import Paulsmarquee from "../components/paulsmarquee";
import Frame1 from "../assets/images/design/Frame1.png";
import Frame2 from "../assets/images/design/Frame2.png";
import Videofooter from "../components/Videofooter";
import horizontal2 from "../assets/images/halffooter.gif";

const videoUrls = [
  "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/horizonstudy%2F106.mp4?alt=media&token=df1be766-6664-4321-a429-dab57f56b5d5",
  "https://res.cloudinary.com/dlanlvnce/video/upload/v1725789842/Savishkar_showreel_fc8ypd.mov",
  "https://res.cloudinary.com/dlanlvnce/video/upload/v1725789882/IMG_1555_fb4ppi.mp4",
  "https://res.cloudinary.com/dlanlvnce/video/upload/v1725789918/IMG_2376_lanwnm.mp4",
  "https://res.cloudinary.com/dlanlvnce/video/upload/v1725789929/IMG_1916_nw0nmm.mp4",
];

const Design = () => {
  const videoRefs = videoUrls.map(() => useRef(null));

  const handleMouseOver = (ref) => {
    if (ref.current) {
      ref.current.muted = false;
      ref.current.play();
    }
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) {
      ref.current.muted = true;
      ref.current.pause();
    }
  };

  return (
    <div className="bg-white md:px-0 px-2">
      <div className="px-4 md:px-56 pt-8">
        <h1 className="text-black text-2xl md:text-4xl font-bold">DESIGN</h1>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-left space-x-2 mt-0 pl-1 md:pl-56">
        <a href="/HorzionStudy">
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 rounded-full">
            MOTION GRAPHIC
          </div>
        </a>
        <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs py-1 px-2 mt-3 rounded-full">
          LOGO WITH BRANDING
        </div>
        <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs py-1 px-2 mt-3 rounded-full">
          ANIMATION
        </div>
      </div>
      <div className="flex flex-wrap justify-left space-x-2 mb-6 pl-4 md:pl-56">
        <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 rounded-full">
          ILLUSTRATION
        </div>
        <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 rounded-full">
          WEB DESIGN
        </div>
        <div className="bg-white text-black font-semibold border-black border-[1px] text-[10px] md:text-xs mt-3 py-1 px-2 rounded-full">
          GRAPHICS
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-[90vw] md:w-[1300px] mx-auto">
        <Paulsmarquee className="justify-center" />
      </div>

      {/* Images Section */}
      <div className="flex justify-center md:pt-8">
        <img src={Frame1} alt="Frame1" className="w-[90%] md:w-auto" />
      </div>
      <div className="flex justify-center pt-4 md:pt-8">
        <img src={Frame2} alt="Frame2" className="w-[90%] md:w-auto" />
      </div>

      {/* Videos Section */}
      <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-center gap-4 md:gap-8">
        {videoUrls.slice(0, 2).map((url, index) => (
          <video
            key={index}
            className="object-contain border-[1px] border-black rounded-xl px-2 md:px-0 max-h-[200px] md:max-h-[500px] w-full md:w-[45%]"
            muted
            loop
            playsInline
            ref={videoRefs[index]}
            onMouseOver={() => handleMouseOver(videoRefs[index])}
            onMouseLeave={() => handleMouseLeave(videoRefs[index])}
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex justify-center md:mt-12 mt-4">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[250px] md:max-w-[700px] object-contain md:hidden"
        />
        <div className="hidden md:block">
          <Videofooter />
        </div>
      </div>
    </div>
  );
};

export default Design;
