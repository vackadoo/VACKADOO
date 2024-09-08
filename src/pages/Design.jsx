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
    <div className="bg-white">
      <div className="px-56 pt-8">
        <h1 className="text-black text-4xl font-bold">DESIGN</h1>
      </div>

      <div>
        <div className="flex flex-wrap justify-left space-x-2 mt-0 pl-56">
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[7px] md:text-xs mt-3 py-1 px-1 md:py-2 md:px-3 rounded-full">
            MOTION GRAPHIC
          </div>
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[7px] md:text-xs py-1 md:py-2 px-2 mt-3 md:px-6 rounded-full">
            LOGO WITH BRANDING
          </div>
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[7px] md:text-xs mt-3 py-1 px-1 md:py-2 md:px-6 rounded-full">
            ANIMATION
          </div>
        </div>
        <div className="flex flex-wrap justify-left space-x-2 mb-6 pl-56">
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[7px] md:text-xs mt-3 py-1 px-1 md:py-2 md:px-6 rounded-full">
            ILLUSTRATION
          </div>
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[7px] md:text-xs mt-3 py-1 px-1 md:py-2 md:px-6 rounded-full">
            WEB DESIGN
          </div>
          <div className="bg-white text-black font-semibold border-black border-[1px] text-[7px] md:text-xs mt-3 py-1 px-1 md:py-2 md:px-6 rounded-full">
            GRAPHICS
          </div>
        </div>
      </div>

      <div className="w-[1300px] justify-center mx-auto">
        <Paulsmarquee className="justify-center" />
      </div>

      {/* Centering Frame1 */}
      <div className="flex justify-center pt-8">
        <img src={Frame1} alt="Frame1" />
      </div>

      {/* Centering Frame2 */}
      <div className="flex justify-center pt-8">
        <img src={Frame2} alt="Frame2" />
      </div>

      {/* First video */}
      <div className="mt-6 md:mt-10 flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
        <video
          className="object-contain border-[1px] border-black h-auto rounded-xl px-2 md:px-0 max-h-[300px] md:max-h-[500px]"
          muted
          loop
          playsInline
          ref={videoRefs[0]}
          onMouseOver={() => handleMouseOver(videoRefs[0])}
          onMouseLeave={() => handleMouseLeave(videoRefs[0])}
        >
          <source src={videoUrls[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second video */}
      <div className="mt-6 md:mt-10 flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
        <video
          className="object-contain border-[1px] border-black h-auto rounded-xl px-2 md:px-0 max-h-[300px] md:max-h-[500px]"
          muted
          loop
          playsInline
          ref={videoRefs[1]}
          onMouseOver={() => handleMouseOver(videoRefs[1])}
          onMouseLeave={() => handleMouseLeave(videoRefs[1])}
        >
          <source src={videoUrls[1]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" flex justify-center pt-8 pr-2 gap-28">
        <div>
        <video
          className="object-contain border-[1px] border-black h-auto rounded-xl px-2 md:px-0 max-h-[300px] md:max-h-[400px]"
          muted
          loop
          playsInline
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
          className="object-contain border-[1px] border-black h-auto rounded-xl px-2 md:px-0 max-h-[300px] md:max-h-[400px]"
          muted
          loop
          playsInline
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
          className="object-contain border-[1px] border-black h-auto rounded-xl px-2 md:px-0 max-h-[300px] md:max-h-[400px]"
          muted
          loop
          playsInline
          ref={videoRefs[4]}
          onMouseOver={() => handleMouseOver(videoRefs[4])}
          onMouseLeave={() => handleMouseLeave(videoRefs[4])}
        >
          <source src={videoUrls[4]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

      </div>
      <div className="flex justify-center md:mt-12 mt-0 ">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[250px] h-full md:max-w-[700px] object-contain md:hidden"
        />
        <div className=" hidden md:block">
          <Videofooter />
        </div>
      </div>
      
    </div>
  );
};

export default Design;
