import React, { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import arrow from "../assets/images/downarraow.png";

const LandingPage = () => {
  const intro =
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727350512/qvhrpnxhsaowtzraeoe9_zu7qdm.mov";
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const video = videoRef.current;

      if (video) {
        if (scrollTop > video.offsetHeight) {
          video.pause();
        } else {
          video.play();
        }

        video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current.play();
      } catch (err) {
        console.error("Autoplay failed, possibly due to restrictions: ", err);
      }
    };

    if (videoRef.current) {
      playVideo();
    }
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Video Background Section */}
      <section className="  hidden relative h-[50vh] md:h-[80vh] md:flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center md:pt-1 pt-8">
          <video
            ref={videoRef}
            className="md:max-w-[1200px] md:h-full object-cover"
            autoPlay
            loop
            muted
            playsInline // Required for iOS inline playback
            preload="auto" // Ensure the video is preloaded
          >
            <source src={intro} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      <div className="md:hidden pt-12">
        <video
          className="md:max-w-[1200px] md:h-full "
          autoPlay
          loop
          muted
          alt="vackadoointro"
          playsInline
          preload="auto"
        >
          <source src={intro} type="video/mp4" />
        </video>
      </div>

      {/* Arrow Below the Video */}
      <div className="flex justify-center md:mt-1 mt-2">
        <button
          onClick={scrollToNextSection}
          className="hidden md:block text-white text-4xl animate-bounce mb-20"
        >
          <img src={arrow} alt="Scroll Down Arrow" />
        </button>
      </div>

      {/* Next Section */}
      <section
        id="next-section"
        className="md:h-[70vh] h-[90vh]  flex items-center justify-center"
      >
        <HeroSection />
      </section>
    </div>
  );
};

export default LandingPage;
