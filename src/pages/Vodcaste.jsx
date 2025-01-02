import React, { useRef, useState, useEffect } from "react";
import vodcaste from "../assets/images/vodecaste.png";
import horizontal2 from "../assets/images/halffooter.gif";
import Videofooter from "../components/Videofooter";
import podcaste1 from "../assets/images/Podcaste/podcaste1.jpg";
import podcaste2 from "../assets/images/Podcaste/podcaste2.jpg";
import podcaste3 from "../assets/images/Podcaste/podcaste3.png";
import podcaste4 from "../assets/images/Podcaste/podcaste4.png";
import podcaste5 from "../assets/images/Podcaste/podcaste5.png";
import podcaste6 from "../assets/images/Podcaste/podcaste6.png";
import podcaste7 from "../assets/images/Podcaste/podcaste7.png";
import podcaste8 from "../assets/images/Podcaste/podcaste8.png";
import podcaste9 from "../assets/images/Podcaste/podcaste9.png";

const VodcastLayout = ({ speed = 40 }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      id: 1,
      title: "Early Intervention Reel",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747589/The_Role_of_Early_Intervention_Reel_1.compressed_i68ddx.mp4",
    },
    {
      id: 2,
      title: "WhatsApp Video 2024-07-17",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747504/WhatsApp_Video_2024-07-17_at_3.06.04_PM_hqce6s.mp4",
    },
    {
      id: 3,
      title: "WhatsApp Video 2024-07-16",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747498/WhatsApp_Video_2024-07-16_at_5.20.58_PM_yfd2xo.mp4",
    },
    {
      id: 4,
      title: "75 Hard Challenge",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747486/75_hard_challenge_reel_5.compressed_vcrzv7.mp4",
    },
    {
      id: 5,
      title: "Vodcast",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735746448/Vodcaste/iyfcq1umk4razehcshpj.mp4",
    },

    {
      id: 6,
      title: "Early Intervention Reel",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747589/The_Role_of_Early_Intervention_Reel_1.compressed_i68ddx.mp4",
    },
    {
      id: 7,
      title: "WhatsApp Video 2024-07-17",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747504/WhatsApp_Video_2024-07-17_at_3.06.04_PM_hqce6s.mp4",
    },
    {
      id: 8,
      title: "WhatsApp Video 2024-07-16",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747498/WhatsApp_Video_2024-07-16_at_5.20.58_PM_yfd2xo.mp4",
    },
    {
      id: 9,
      title: "75 Hard Challenge",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747486/75_hard_challenge_reel_5.compressed_vcrzv7.mp4",
    },
    {
      id: 10,
      title: "Vodcast",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735746448/Vodcaste/iyfcq1umk4razehcshpj.mp4",
    },
    {
      id: 11,
      title: "Early Intervention Reel",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747589/The_Role_of_Early_Intervention_Reel_1.compressed_i68ddx.mp4",
    },
    {
      id: 12,
      title: "WhatsApp Video 2024-07-17",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747504/WhatsApp_Video_2024-07-17_at_3.06.04_PM_hqce6s.mp4",
    },
    {
      id: 13,
      title: "WhatsApp Video 2024-07-16",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747498/WhatsApp_Video_2024-07-16_at_5.20.58_PM_yfd2xo.mp4",
    },
    {
      id: 14,
      title: "75 Hard Challenge",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735747486/75_hard_challenge_reel_5.compressed_vcrzv7.mp4",
    },
    {
      id: 15,
      title: "Vodcast",
      videoUrl:
        "https://res.cloudinary.com/dcvxotvg8/video/upload/v1735746448/Vodcaste/iyfcq1umk4razehcshpj.mp4",
    },
  ];

  const [position, setPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const intervalRef = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
    const handleAnimation = () => {
      if (!isPaused) {
        setPosition((prevPos) => {
          if (Math.abs(prevPos) > contentWidth) {
            return containerWidth;
          }
          return prevPos - 1;
        });
      }
    };

    intervalRef.current = setInterval(handleAnimation, speed);
    return () => clearInterval(intervalRef.current);
  }, [contentWidth, containerWidth, speed, isPaused]);

  const handleVideoHover = (videoId) => {
    setIsPaused(true);
    setActiveVideo(videoId);
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  };

  const handleVideoLeave = (videoId) => {
    setIsPaused(false);
    setActiveVideo(null);
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen bg-white ">
      {/* Header Section */}
      <header className="relative  text-white py-4 px-6 hidden md:block">
        <div className="absolute left-0 top-1/2 transform w-1/5 h-36 bg-black rounded-r-full flex items-center">
          <div className="ml-auto pr-8">
            <div className="flex items-center">
              <img src={vodcaste} alt="Vodcast" className="h-[140px] w-auto" />
            </div>
            <p className="text-sm pl-4">by Vackadoo</p>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="px-4 sm:px-8 md:px-16 lg:px-36 pt-8 md:pt-20 lg:pt-36">
        {/* Infinite Scroller */}
        <div className="relative w-full overflow-hidden rounded-md">
          {/* Wrapper for continuous scroll */}
          <div className="flex w-[200%]  ">
            {/* First set of images */}
            <div className="flex space-x-4 shrink-0 animate-[scroll_40s_linear_infinite]">
              <a
                href="https://youtu.be/7Bu11ZQrrY8?si=piFEPJN2S5qCiMOf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste1}
                  alt="Podcast9"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a
                href="https://youtu.be/rGBib2OoBiE?si=5yGqfaxd8peuZrbz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste2}
                  alt="Podcast2"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a
                href="https://youtu.be/cftAKPoPn9s?si=NJdl7CFdmLejz3uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste3}
                  alt="Podcast3"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a
                href="https://youtu.be/N4KArAp2A5U?si=Qq7FfYLZgAa_OHkR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste4}
                  alt="Podcast4"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={podcaste5}
                  alt="Podcast5"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>

              <a
                href="https://youtu.be/7Bu11ZQrrY8?si=piFEPJN2S5qCiMOf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste1}
                  alt="Podcast9"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a
                href="https://youtu.be/rGBib2OoBiE?si=5yGqfaxd8peuZrbz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste2}
                  alt="Podcast2"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a
                href="https://youtu.be/cftAKPoPn9s?si=NJdl7CFdmLejz3uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste3}
                  alt="Podcast3"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a
                href="https://youtu.be/N4KArAp2A5U?si=Qq7FfYLZgAa_OHkR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={podcaste4}
                  alt="Podcast4"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={podcaste5}
                  alt="Podcast5"
                  className="h-48 sm:h-60 md:h-72 lg:h-80 w-auto rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Description */}
        <p className="mt-4 md:mt-6 text-xs md:text-sm text-black text-justify max-w-prose mx-auto">
          Vackadoo provides comprehensive brand management for Paul's Biryani
          covering a broad spectrum of activities from brand logo design to
          implementing social media strategies. We oversee the brand presence on
          various platforms such as Instagram, LinkedIn, Twitter, and more,
          ensuring a consistent and effective digital footprint. Our team
          devises monthly strategies aimed at increasing engagement and
          enhancing brand visibility. This includes curating engaging content,
          including posts and reels, that resonate with the target audience. By
          managing all aspects of social media activities, we ensure that Paul's
          Biryani maintains a dynamic and cohesive brand communication,
          strengthening its connection and relationship with customers.
        </p>

        {/* Vodcast Clips Section */}

        <div className="w-full overflow-x-auto p-2 sm:p-4">
          <div
            className="relative flex gap-2 sm:gap-4 md:gap-6 scrollbar-hidden"
            style={{
              transform: `translateX(${position}px)`,
            }}
            ref={(el) => {
              if (el) {
                setContentWidth(el.offsetWidth);
                setContainerWidth(el?.parentElement?.offsetWidth || 0);
              }
            }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="inline-block"
                onMouseEnter={() => handleVideoHover(video.id)}
                onMouseLeave={() => handleVideoLeave(video.id)}
              >
                <div
                  className={`transition-all duration-300 w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg overflow-hidden ${
                    activeVideo === video.id ? "scale-110 shadow-xl z-10" : ""
                  }`}
                >
                  {activeVideo === video.id ? (
                    <video
                      ref={(el) => (videoRefs.current[video.id] = el)}
                      className="w-full aspect-[9/16] object-cover"
                      src={video.videoUrl}
                      muted
                      controls
                      playsInline
                    />
                  ) : (
                    <div className="relative">
                      <video
                        className="w-full aspect-[9/16] object-cover"
                        src={video.videoUrl}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>
                <h3 className="text-white mt-2 text-xs sm:text-sm font-medium truncate w-24 sm:w-32 md:w-40 lg:w-48">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Studio Services Section */}
      <section className="bg-black text-white py-6 sm:py-8 md:py-12 px-4 sm:px-12 md:px-24">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          Studio Services
        </h2>
        <p className="mt-4 md:mt-6 text-xs md:text-sm text-white text-justify max-w-prose mx-auto">
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
            Download Pricing
          </button>
        </div>
      </section>

      <div className="fixed bottom-4 sm:bottom-8 md:bottom-16 left-4 sm:left-8 md:left-12 z-50">
        <button className="bg-gray-400 text-black text-xs sm:text-sm md:text-base py-1.5 sm:py-2 px-4 sm:px-6 rounded-full hover:bg-gray-600 hover:text-white shadow-lg transition-colors">
          call us
        </button>
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

      <style>
        {`
      /* Hide the marquee on mobile devices */
      @media (max-width: 640px) {
        .scrollbar-hidden {
            /* Enable horizontal scroll */
        white-space: nowrap;  /* Prevent wrapping of items */
        }
      }
      
      .scrollbar-hidden::-webkit-scrollbar {
        display: none;
      }

      .scrollbar-hidden {
        -ms-overflow-style: none;  /* IE 10+ */
        scrollbar-width: none;  /* Firefox */
      }
    `}
      </style>
    </div>
  );
};

export default VodcastLayout;
