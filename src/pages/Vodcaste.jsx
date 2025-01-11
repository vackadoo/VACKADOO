import React, { useRef, useState, useEffect } from "react";
import vodcaste from "../assets/images/vodecaste.png";
import podcaste1 from "../assets/images/Podcaste/podcaste1.jpg";
import podcaste2 from "../assets/images/Podcaste/podcaste2.jpg";
import podcaste3 from "../assets/images/Podcaste/podcaste3.png";
import podcaste4 from "../assets/images/Podcaste/podcaste4.png";
import podcaste5 from "../assets/images/Podcaste/podcaste5.png";

import horizontal2 from "../assets/images/halffooter.gif";
import Videofooter from "../components/Videofooter";

import podcaste6 from "../assets/images/Podcaste/podcaste6.png";
import podcaste7 from "../assets/images/Podcaste/podcaste7.png";
import podcaste8 from "../assets/images/Podcaste/podcaste8.png";
import podcaste9 from "../assets/images/Podcaste/podcaste9.png";
import reel1 from "../assets/images/Podcaste/reel1.png";
import reel2 from "../assets/images/Podcaste/reel2.png";
import reel3 from "../assets/images/Podcaste/reel3.png";
import reel4 from "../assets/images/Podcaste/reel4.png";
import reel5 from "../assets/images/Podcaste/reel5.png";

const Vodcaste = () => {
  const [videos] = useState([
    {
      id: 1,
      title: "Early Intervention Reel",
      poster:  reel1 ,
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747589/The_Role_of_Early_Intervention_Reel_1.compressed_i68ddx.mp4",
    },
    {
      id: 2,
      title: "WhatsApp Video 2024-07-17",
      poster:  reel2 ,
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747504/WhatsApp_Video_2024-07-17_at_3.06.04_PM_hqce6s.mp4",
    },
    {
      id: 3,
      title: "WhatsApp Video 2024-07-16",
      poster:  reel3 ,
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747498/WhatsApp_Video_2024-07-16_at_5.20.58_PM_yfd2xo.mp4",
    },
    {
      id: 4,
      title: "75 Hard Challenge",
      poster: reel4 ,
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747486/75_hard_challenge_reel_5.compressed_vcrzv7.mp4",
    },
    {
      id: 5,
      title: "Vodcast",
      poster:  reel5 ,
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735746448/Vodcaste/iyfcq1umk4razehcshpj.mp4",
    },
  ]);

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const podcastImages = [
    { src: podcaste5, link: "" },
    {
      src: podcaste1,
      link: "https://youtu.be/7Bu11ZQrrY8?si=piFEPJN2S5qCiMOf",
    },
    {
      src: podcaste2,
      link: "https://youtu.be/rGBib2OoBiE?si=5yGqfaxd8peuZrbz",
    },
    { src: podcaste5, link: "" },
    {
      src: podcaste3,
      link: "https://youtu.be/cftAKPoPn9s?si=NJdl7CFdmLejz3uk",
    },
    {
      src: podcaste4,
      link: "https://youtu.be/N4KArAp2A5U?si=Qq7FfYLZgAa_OHkR",
    },
    {
      src: podcaste2,
      link: "https://youtu.be/rGBib2OoBiE?si=5yGqfaxd8peuZrbz",
    },
    {
      src: podcaste3,
      link: "https://youtu.be/cftAKPoPn9s?si=NJdl7CFdmLejz3uk",
    },
    {
      src: podcaste1,
      link: "https://youtu.be/7Bu11ZQrrY8?si=piFEPJN2S5qCiMOf",
    },
    {
      src: podcaste4,
      link: "https://youtu.be/N4KArAp2A5U?si=Qq7FfYLZgAa_OHkR",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (!isMobile && !isHovered && !isPlaying && scrollRef.current) {
        if (
          scrollPosition >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          setScrollPosition(0);
          scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          setScrollPosition((prev) => prev + 1);
          scrollRef.current.scrollTo({
            left: scrollPosition,
            behavior: "auto",
          });
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [scrollPosition, isHovered, isPlaying, isMobile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseLeave = (e) => {
    if (!isMobile) {
      e.target.pause();
      e.target.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = (e) => {
    if (!isMobile) {
      e.target.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Header */}
      <header className="relative text-white py-4 px-6 hidden md:block z-20">
        <div className="absolute left-0 top-1/2 transform w-1/5 h-36 bg-black rounded-r-full flex items-center">
          <div className="ml-auto pr-8">
            <div className="flex items-center">
              <img src={vodcaste} alt="Vodcast" className="h-[140px] w-auto" />
            </div>
            <p className="text-sm pl-4 font-semibold">by Vackadoo</p>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden relative text-white py-4 px-6 z-20">
        <div className="transform w-full max-w-xs h-16 bg-black rounded-full flex items-center mx-auto sm:max-w-sm">
          <div className="flex flex-col items-center justify-center w-full">
            <img src={vodcaste} alt="Vodcast" className="h-10 w-auto" />
            <p className="text-[10px] pl-2 font-semibold">by Vackadoo</p>
          </div>
        </div>
      </header>

      {/* Image Carousel */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-40 md:pt-20 lg:pt-36">
        <div className="relative w-full rounded-md overflow-hidden">
          <div className="flex w-[200%] md:h-96 overflow-hidden">
            <div className="flex space-x-6 shrink-0 animate-[scroll_40s_linear_infinite] group">
              {podcastImages.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative transform transition-all duration-300 hover:scale-105 hover:z-10"
                >
                  <img
                    src={item.src}
                    alt={`Podcast ${index + 1}`}
                    className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md shadow-lg transition-all duration-300 hover:shadow-2xl"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Description */}
      <p className="text-[14px] pt-4 md:px-36 px-3 text-black text-justify">
        In a contemporary world where podcasts are the voice of today,
        connecting stories with ears everywhere, starting one has become a must
        - but let us face it, it often comes with an expensive price tag. At
        Vackdoo, we get it. We simplify it all with a complete package starting
        at just Rs.30,000! From lighting, cameras, and panel setups to
        scripting, hosting, and editing - we handle it all, including an
        in-house studio. We don't just shoot; we ideate and create, ensuring
        your story is told with authenticity and flair. With Vackadoo,
        podcasting becomes effortless, innovative, and far better than anything
        else out there. Your story deserves the best, and we deliver!
      </p>

      {/* Video Section */}
      <div
        className="w-full px-4 sm:px-8 md:px-16 lg:px-40 md:pt-20 lg:pt-7"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => {
          !isMobile && setIsHovered(false);
          !isMobile && setIsPlaying(false);
        }}
      >
        <div
          ref={scrollRef}
          className={`flex gap-4 md:h-72 sm:gap-6 md:gap-8 ${
            isMobile ? "overflow-x-auto" : "overflow-hidden"
          }`}
        >
          {(isMobile ? videos : [...videos, ...videos]).map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="flex-shrink-0 w-24 sm:w-32 md:w-32 lg:w-40 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <video
                  className="w-full aspect-[9/16] object-cover"
                  src={video.videoUrl}
                  muted
                  playsInlines
                  loop
                  poster={video.poster}
                  controls
                  onPlay={() => !isMobile && setIsPlaying(true)}
                  onPause={() => !isMobile && setIsPlaying(false)}
                  onEnded={() => !isMobile && setIsPlaying(false)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-black text-white mt-8 mb-8 pb-6 pt-6  sm:px-12 md:px-11">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          Studio Services
        </h2>
        <p className="text-[14px] pt-4 md:px-36 px-3  text-white text-justify ">
          At Vodcast, we offer a comprehensive suite of studio services
          meticulously tailored to transform your creative vision into reality.
          From script development to final production, our studio excels in
          delivering top-notch results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 sm:mt-6 md:mt-8">
          <img
            src={podcaste6}
            alt="Podcast 6"
            className="h-52 w-40 rounded-md object-cover"
          />
          <img
            src={podcaste7}
            alt="Podcast 7"
            className="h-52 w-40 rounded-md object-cover"
          />
          <img
            src={podcaste8}
            alt="Podcast 8"
            className="h-52 w-40 rounded-md object-cover"
          />
          <img
            src={podcaste9}
            alt="Podcast 9"
            className="h-52 w-40 rounded-md object-cover"
          />
        </div>
        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
          <button className="bg-gray-400 text-black text-xs sm:text-sm md:text-base py-2 px-4 sm:px-6 rounded-full shadow-lg">
            <a href="https://drive.google.com/file/d/1qd93POh_29E_hsB-vv2nLNj_vDGuJNaD/view?usp=sharing">
              Download Pricing
            </a>
          </button>
        </div>
      </section>

      <div className="fixed bottom-4 sm:bottom-8 md:bottom-16 left-4 sm:left-8 md:left-12 z-50">
        <a href="http://wa.me/918851700306">
          <button className="bg-gray-400 text-black text-xs sm:text-sm md:text-base py-1.5 sm:py-2 px-4 sm:px-4 rounded-full hover:bg-gray-600 hover:text-white shadow-lg transition-colors">
            Contact us
          </button>
        </a>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center mt-12">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
        />
        <div className="hidden md:block">
          <Videofooter />
        </div>
      </div>
    </div>
  );
};

export default Vodcaste;
