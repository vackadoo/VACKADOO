import React, { useRef, useState } from "react";
import tedx1 from "../../assets/images/tedx/tedx1.png";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";
import Videofooter from "../../components/Videofooter";

const TedxPage = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/102.MP4?alt=media&token=f4abdfee-06f0-4dbb-97a8-4c434870dcf5",


    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2F1709699757377963.mp4?alt=media&token=204ab030-21b9-44ea-8bc6-ef2075e95456",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FIMG_5288.MOV?alt=media&token=3b8aa396-c1c5-407e-9a6c-4fc84fba7aa4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.20.00%20PM.mp4?alt=media&token=a1ddff64-aa51-429a-aef2-fe948c96445a",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.27.48%20PM.mp4?alt=media&token=246e9273-5068-4976-a372-d7ef765bae75",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.30.00%20PM%20(1).mp4?alt=media&token=d39282e9-aed1-40ad-9369-efc93a717822",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.31.32%20PM.mp4?alt=media&token=35bd4654-8d2d-4bf1-9b98-dbb550261b2d",


    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2F1709699757377963.mp4?alt=media&token=204ab030-21b9-44ea-8bc6-ef2075e95456",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FIMG_5288.MOV?alt=media&token=3b8aa396-c1c5-407e-9a6c-4fc84fba7aa4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.20.00%20PM.mp4?alt=media&token=a1ddff64-aa51-429a-aef2-fe948c96445a",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.27.48%20PM.mp4?alt=media&token=246e9273-5068-4976-a372-d7ef765bae75",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.30.00%20PM%20(1).mp4?alt=media&token=d39282e9-aed1-40ad-9369-efc93a717822",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.31.32%20PM.mp4?alt=media&token=35bd4654-8d2d-4bf1-9b98-dbb550261b2d",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2F1709699757377963.mp4?alt=media&token=204ab030-21b9-44ea-8bc6-ef2075e95456",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FIMG_5288.MOV?alt=media&token=3b8aa396-c1c5-407e-9a6c-4fc84fba7aa4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.20.00%20PM.mp4?alt=media&token=a1ddff64-aa51-429a-aef2-fe948c96445a",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.27.48%20PM.mp4?alt=media&token=246e9273-5068-4976-a372-d7ef765bae75",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.30.00%20PM%20(1).mp4?alt=media&token=d39282e9-aed1-40ad-9369-efc93a717822",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/TEDX%2FWhatsApp%20Video%202024-07-17%20at%201.31.32%20PM.mp4?alt=media&token=35bd4654-8d2d-4bf1-9b98-dbb550261b2d",
  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  const handleNext = () => {
    if (currentIndex < videoUrls.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollToNextSection = () => {
    const nextSection2 = document.getElementById("next-section2");
    nextSection2.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToNextSection2 = () => {
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <main className="text-center pt-4  md:pt-8">
        <h1 className="text-xl md:text-5xl font-bold text-black">
          <span className="text-xl md:text-5xl font-bold text-red-600">
            TEDX
          </span>
          SHIVAJICOLLEGE
        </h1>
        <div className=" md:hidden grid grid-cols-2 gap-2 md:gap-4 mt-4 mx-2 md:mx-48">
          <div
            onClick={scrollToNextSection2}
            className="grid-col-1 py-2 text-[10px] text-white  bg-red-600"
          >
            Event Coverage
          </div>
          <div
            onClick={scrollToNextSection}
            className="grid-col-1 py-2 px-1 text-[10px] text-white  bg-red-600"
          >
            Content Production
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-4  md:mx-40 mt-8 md:mt-6">
          <div className="drop-shadow-2xl md:mt-4 ml-6 ">
            <img src={tedx1} alt="" className="rounded-xl" />
          </div>
          <div className="col-span-2 md:p-0 md:p md:py-7 py-0 text-black text-justify text-[14px] md:text-xs">
            <div className="hidden md:block px-4">
              <div className="grid grid-cols-2 md:gap-2 text-white  text-center pb-3 mx-2 ">
                <div
                  onClick={scrollToNextSection2}
                  className="grid-col-1 text-[14px] bg-red-600 py-2  "
                >
                  Event Coverage
                </div>
                <div
                  onClick={scrollToNextSection}
                  className="grid-col-1 py-2 text-[14px]   bg-red-600"
                >
                  Content Production
                </div>
              </div>
            </div>
            <p className=" mt-4 md:text-[14px] text-[12px] mx-6 ">
              Vackaoo played a pivotal role in the TEDxShivaji College event by
              providing comprehensive PR support and delivering a diverse range
              of video content including hype and formal videos. This
              collaboration not only amplified the event's reach but also
              sparked meaningful conversations and interactions among
              TEDxShivaji College members, solidifying their reputation as a
              premier platform for intellectual discourse and thought sharing.
              One of the standout achievements of the event, sponsored by
              Vackadoo, was its extensive coverage.
            </p>
          </div>
        </div>

        <div
          id="next-section"
          className="mt-8 md:mt-12 flex items-center justify-center mx-4 md:mx-40 drop-shadow-xl relative"
        >
          <video
            className="object-contain rounded-xl h-auto max-h-[400px] md:max-h-[500px]"
            loop
            muted
            playsInline
            ref={videoRefs[0]}
            onMouseOver={() => handleMouseOver(videoRefs[0])}
            onMouseLeave={() => handleMouseLeave(videoRefs[0])}
          >
            <source src={videoUrls[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-4 md:mt-12 text-[12px]  flex justify-center mx-4 md:mx-36 text-black text-justify  md:text-[14px]">
          Vackadoo meticulously captured the event’s most significant moments
          through professional photography and videography, resulting in
          visually captivating content that highlighted the essence and impact
          of each session. This in turn, significantly boosted their digital
          presence. Moreover, Vackadoo created engaging short reels that
          effectively showcased the highlights of TEDxShivaji College, further
          enhancing the event's visibility and appeal.
        </div>

        <div
          id="next-section2"
          className="mt-8 md:mt-12 flex items-center justify-center drop-shadow-xl relative"
        >
          <div className="relative overflow-hidden w-full max-w-[1000px]">
            <div
              className="flex space-x-2 md:space-x-4 animate-marquee hover:animate-none transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videoUrls.slice(1).map((url, index) => (
                <video
                  key={index}
                  className="object-contain rounded-xl max-h-[300px] md:max-h-[300px]"
                  loop
                  muted
                  playsInline
                  ref={videoRefs[index + 1]}
                  onMouseOver={() => handleMouseOver(videoRefs[index + 1])}
                  onMouseLeave={() => handleMouseLeave(videoRefs[index + 1])}
                >
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
            {/* Left Button */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handlePrev}
            >
              &#8249;
            </button>
            {/* Right Button */}
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handleNext}
            >
              &#8250;
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-12 ">
          <img
            src={horizontal2}
            alt="Footer Image"
            className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
          />
          <div className=" hidden md:block">
            <Videofooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TedxPage;
