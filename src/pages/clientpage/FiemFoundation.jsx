import React, { useRef, useState } from "react";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";
import Videofooter from "../../components/Videofooter";

const FiemFoundation = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FDr.%20Jitendra%20Singh%20Reel.mp4?alt=media&token=0073e579-9167-43c2-86b4-5158b0f9a265",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FSanjay%20Mayukh%20ji%20REEL.mp4?alt=media&token=96c9fdfb-656b-48a7-bfbf-f9d7e779e6e3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2Fashok%20shrivastav%20jiREEL.mp4?alt=media&token=686e7726-02c3-4a8c-a349-0ca643d14189",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FbasuriREEL.mp4?alt=media&token=4ef7418e-1b89-493a-b2b7-be44f3c7cbbe",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519175/Pramila_Dixit_ji_nd8ibi.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519081/Shehzad_Poonawalla_szkz1i.mp4",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FDr.%20Jitendra%20Singh%20Reel.mp4?alt=media&token=0073e579-9167-43c2-86b4-5158b0f9a265",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FSanjay%20Mayukh%20ji%20REEL.mp4?alt=media&token=96c9fdfb-656b-48a7-bfbf-f9d7e779e6e3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2Fashok%20shrivastav%20jiREEL.mp4?alt=media&token=686e7726-02c3-4a8c-a349-0ca643d14189",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FbasuriREEL.mp4?alt=media&token=4ef7418e-1b89-493a-b2b7-be44f3c7cbbe",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519175/Pramila_Dixit_ji_nd8ibi.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519081/Shehzad_Poonawalla_szkz1i.mp4",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FDr.%20Jitendra%20Singh%20Reel.mp4?alt=media&token=0073e579-9167-43c2-86b4-5158b0f9a265",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FSanjay%20Mayukh%20ji%20REEL.mp4?alt=media&token=96c9fdfb-656b-48a7-bfbf-f9d7e779e6e3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2Fashok%20shrivastav%20jiREEL.mp4?alt=media&token=686e7726-02c3-4a8c-a349-0ca643d14189",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FbasuriREEL.mp4?alt=media&token=4ef7418e-1b89-493a-b2b7-be44f3c7cbbe",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519175/Pramila_Dixit_ji_nd8ibi.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519081/Shehzad_Poonawalla_szkz1i.mp4",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FDr.%20Jitendra%20Singh%20Reel.mp4?alt=media&token=0073e579-9167-43c2-86b4-5158b0f9a265",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FSanjay%20Mayukh%20ji%20REEL.mp4?alt=media&token=96c9fdfb-656b-48a7-bfbf-f9d7e779e6e3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2Fashok%20shrivastav%20jiREEL.mp4?alt=media&token=686e7726-02c3-4a8c-a349-0ca643d14189",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Fiem%2FbasuriREEL.mp4?alt=media&token=4ef7418e-1b89-493a-b2b7-be44f3c7cbbe",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519175/Pramila_Dixit_ji_nd8ibi.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725519081/Shehzad_Poonawalla_szkz1i.mp4",
  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const marqueeRef = useRef(null);
  const pauseMarquee = () => {
    marqueeRef.current.style.animationPlayState = "paused";
  };

  const resumeMarquee = () => {
    marqueeRef.current.style.animationPlayState = "running";
  };

  const handleMouseOver = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.pause();
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

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="text-center pt-6 md: md:pt-8">
        <div className="md:mx-36">
          <h1 className="md:text-5xl text-2xl md:text-center font-bold text-[#3E8D19]">
            <span className="text-2xl md:text-5xl font-bold text-orange-500">
              FIEM
            </span>{" "}
            FOUNDATION
          </h1>
        </div>
        <div className=" md:mx-36 mx-12  md:items-center text-[10px] grid grid-cols-2 text-white mt-4  md:mt-9 md gap-4 md:text-xs ">
          <a href="https://youtu.be/WwWwgq2zswU?si=qPrISZisBf8bZB_A">
            <div className="grid-cols-1 bg-[#3E8D19] hover:bg-white hover:text-[#3E8D19] py-2">Event Coverage</div>
          </a>

          <a href="https://www.instagram.com/foundationfiem?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <div className="grid-cols-1 bg-[#3E8D19] hover:bg-white hover:text-[#3E8D19] py-2">
              Content Production
            </div>
          </a>
        </div>

        <div className="hidden md:block px-1  md:px-0 text-[22px]  mt-8 justify-center md:mx-36 text-black text-justify md:text-[14px]">
          Vackadoo made substantial contributions to the Fiem Foundation’s
          initiatives by delivering thorough event coverage and robust digital
          management. Our team excelled in capturing each event through
          professional-grade photography, ensuring every moment was documented
          with detail and finesse. We also produced engaging individual and
          event reels that vividly portrayed the essence of the events. To
          further strengthen the foundation's digital footprint, we managed and
          optimized its presence on major social media platforms, including
          Instagram, LinkedIn, Twitter, and YouTube. In addition to content
          creation, Vackadoo offered strategic insight on campaign ideation and
          event naming, ensuring effective messaging was both impactful and
          cohesive. Our comprehensive efforts have strengthened the foundation's
          online presence and deepened community engagement with its mission and
          values.
        </div>

        <div className="order-1 md:order-2 flex items-center justify-center drop-shadow-xl relative py-9 ">
          <div
            onMouseOver={pauseMarquee}
            onMouseLeave={resumeMarquee}
            className="relative overflow-hidden w-full max-w-[1500px] md:max-w-[950px]"
          >
            <div
              ref={marqueeRef}
              className="flex space-x-4 animate-marquee2  transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {videoUrls.slice(1).map((url, index) => (
                <video
                  key={index}
                  className="object-contain rounded-xl border-[1px] border-black md:max-h-[300px] max-h-[250px]  drop-shadow-xl"
                  loop
                  muted
                  playsInline // Added playsInline attribute
                  ref={videoRefs[index + 1]}
                  onMouseOver={() => handleMouseOver(videoRefs[index + 1])}
                  onMouseLeave={() => handleMouseLeave(videoRefs[index + 1])}
                >
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden px-6 md:px-0 text-[12px]   md:h-64 flex justify-center md:mx-40 text-black text-justify md:text-lg">
          Vackadoo made substantial contributions to the Fiem Foundation’s
          initiatives by delivering thorough event coverage and robust digital
          management. Our team excelled in capturing each event through
          professional-grade photography, ensuring every moment was documented
          with detail and finesse. We also produced engaging individual and
          event reels that vividly portrayed the essence of the events. To
          further strengthen the foundation's digital footprint, we managed and
          optimized its presence on major social media platforms, including
          Instagram, LinkedIn, Twitter, and YouTube. In addition to content
          creation, Vackadoo offered strategic insight on campaign ideation and
          event naming, ensuring effective messaging was both impactful and
          cohesive. Our comprehensive efforts have strengthened the foundation's
          online presence and deepened community engagement with its mission and
          values.
        </div>

        <div className="flex justify-center mt-8 md:mt-0 ">
          <img
            src={horizontal2}
            alt="Footer Image"
            className="w-full max-w-[300px] h-full md:max-w-[700px] object-contain md:hidden"
          />
          <div className="hidden md:block md:mt-12">
            <Videofooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FiemFoundation;
