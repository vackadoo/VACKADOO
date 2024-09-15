// import React, { useEffect, useRef } from "react";

// import HeroSection from "./HeroSection";

// import "../css/LandingPage.css";
// import arrow from "../assets/images/downarraow.png";
// import intro from "../assets/video/intro.mov";

// const LandingPage = () => {
//   // const intro ="https://res.cloudinary.com/dlanlvnce/video/upload/v1724911066/qvhrpnxhsaowtzraeoe9.mov";
//     // "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/intro.mov?alt=media&token=1b55cae2-91bd-432f-8607-7ba8200de5d1";
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const video = videoRef.current;

//       if (video) {
//         if (scrollTop > video.offsetHeight) {
//           video.pause();
//         } else {
//           video.play();
//         }

//         video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToNextSection = () => {
//     const nextSection = document.getElementById("next-section");
//     nextSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Video Background Section */}
//       <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
//         <div className="absolute md:mx justify-center">
//           <video
//             ref={videoRef}
//             className="md:max-w-[1200px]   md:h-full object-cover  pt-32 md:py-0 "
//             autoPlay
//             loop
//           >
//             <source src={intro} type="video/mp4" />
//           </video>
//         </div>

//         <div className="absolute inset-0 bg-black opacity-20 "></div>
//       </section>

//       {/* Arrow Below the Video */}
//       <div className=" flex justify-center mt-4">
//         <button
//           onClick={scrollToNextSection}
//           className=" hidden md:block text-white text-4xl bouncy-arrow mb-28"
//         >
//           <img src={arrow} />
//         </button>
//       </div>

//       {/* Next Section */}
//       <section
//         id="next-section"
//         className="h-screen bg-black flex items-center justify-center"
//       >
//         <HeroSection />
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef } from "react";

// import HeroSection from "./HeroSection";

// import "../css/LandingPage.css";
// import arrow from "../assets/images/downarraow.png";
// // import intro from "../assets/video/intro.mov";

// const LandingPage = () => {

//   const intro ="https://res.cloudinary.com/dlanlvnce/video/upload/v1724911066/qvhrpnxhsaowtzraeoe9.mov";
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const video = videoRef.current;

//       if (video) {
//         if (scrollTop > video.offsetHeight) {
//           video.pause();
//         } else {
//           video.play();
//         }

//         video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToNextSection = () => {
//     const nextSection = document.getElementById("next-section");
//     nextSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Video Background Section */}
//       <section className="relative h-[50vh] md:h-[70vh] flex justify-center items-center overflow-hidden">
//         <div className="absolute inset-0 flex justify-center items-center pt-8">
//           <video
//             ref={videoRef}
//             className="md:max-w-[1000px] md:h-full object-cover"
//             autoPlay
//             loop
//           >
//             <source src={intro} type="video/mp4" />
//           </video>
//         </div>

//         <div className="absolute inset-0 bg-black opacity-20"></div>
//       </section>

//       {/* Arrow Below the Video */}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={scrollToNextSection}
//           className="hidden md:block text-white text-4xl bouncy-arrow mb-28"
//         >
//           <img src={arrow} />
//         </button>
//       </div>

//       {/* Next Section */}
//       <section
//         id="next-section"
//         className="h-screen bg-black flex items-center justify-center"
//       >
//         <HeroSection />
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef } from "react";
// import HeroSection from "./HeroSection";
// import arrow from "../assets/images/downarraow.png";
// // import intro from "../assets/video/intro.mov";

// const LandingPage = () => {
//   const intro =
//     "https://res.cloudinary.com/dlanlvnce/video/upload/v1724911066/qvhrpnxhsaowtzraeoe9.mov";
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const video = videoRef.current;

//       if (video) {
//         // Pause the video if the scroll position is past the video height
//         if (scrollTop > video.offsetHeight) {
//           video.pause();
//         } else {
//           video.play();
//         }

//         // Adjust the video opacity based on scroll position
//         video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToNextSection = () => {
//     const nextSection = document.getElementById("next-section");
//     nextSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Video Background Section */}
//       <section className="relative h-[50vh] md:h-[80vh] flex justify-center items-center overflow-hidden">
//         <a href="https://youtu.be/X5YmbXSpVoU">
//           <div className="absolute inset-0 flex justify-center items-center md:pt-1 pt-8">
//             <video
//               ref={videoRef}
//               className="md:max-w-[1200px] md:h-full object-cover"
//               autoPlay
//               loop
//               muted
//               playsInline
//             >
//               <source src={intro} type="video/mp4" />
//             </video>
//           </div>
//         </a>
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//       </section>

//       {/* Arrow Below the Video */}
//       <div className="flex justify-center md:mt-1 mt-2">
//         <button
//           onClick={scrollToNextSection}
//           className="hidden md:block text-white text-4xl animate-bounce mb-20"
//         >
//           <img src={arrow} alt="Scroll Down Arrow" />
//         </button>
//       </div>

//       {/* Next Section */}
//       <section
//         id="next-section"
//         className="md:h-[70vh] h-screen bg-black flex items-center justify-center"
//       >
//         <HeroSection />
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef } from "react";
// import HeroSection from "./HeroSection";
// import arrow from "../assets/images/downarraow.png";

// const LandingPage = () => {
//   // const intro =
//   //   "https://res.cloudinary.com/dlanlvnce/video/upload/v1724911066/qvhrpnxhsaowtzraeoe9.mov";

//   const intro =
//     "https://res.cloudinary.com/dlanlvnce/video/upload/v1724910824/samples/dance-2.mp4";
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const video = videoRef.current;

//       if (video) {

//         if (scrollTop > video.offsetHeight) {
//           video.pause();
//         } else {
//           video.play();
//         }

//         video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToNextSection = () => {
//     const nextSection = document.getElementById("next-section");
//     nextSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Video Background Section */}
//       <section className="relative h-[50vh] md:h-[80vh] flex justify-center items-center overflow-hidden">
//         <a href="https://youtu.be/X5YmbXSpVoU">
//           <div className="absolute inset-0 flex justify-center items-center md:pt-1 pt-8">
//             <video
//               ref={videoRef}
//               className="md:max-w-[1200px] md:h-full object-cover"
//               autoPlay
//               loop
//               muted
//               playsInline
//               controls={false} // Add this to disable the native iOS full-screen controls
//               preload="auto" // Ensure the video is preloaded
//             >
//               <source src={intro} type="video/mp4" />
//             </video>
//           </div>
//         </a>
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//       </section>

//       {/* Arrow Below the Video */}
//       <div className="flex justify-center md:mt-1 mt-2">
//         <button
//           onClick={scrollToNextSection}
//           className="hidden md:block text-white text-4xl animate-bounce mb-20"
//         >
//           <img src={arrow} alt="Scroll Down Arrow" />
//         </button>
//       </div>

//       {/* Next Section */}
//       <section
//         id="next-section"
//         className="md:h-[70vh] h-screen bg-black flex items-center justify-center"
//       >
//         <HeroSection />
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useRef, useState } from "react";
// import HeroSection from "./HeroSection";
// import arrow from "../assets/images/downarraow.png";

// const LandingPage = () => {
//   const [videoUrl, setVideoUrl] = useState("");
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const fetchYouTubeVideo = async () => {
//       const apiKey = "AIzaSyD8v2dEVujXuN9jESTE0DTGPKZgEvrnw94"; // Replace with your actual YouTube API key
//       const channelId = "UCoe-fi5V1y4laZOSjMDSGDA";   // Replace with your actual channel ID
//       const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${apiKey}`;

//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         if (data.items && data.items.length > 0) {
//           const videoId = data.items[0].id.videoId;
//           setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
//         }
//       } catch (error) {
//         console.error("Error fetching YouTube video:", error);
//       }
//     };

//     fetchYouTubeVideo();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const video = videoRef.current;

//       if (video) {
//         if (scrollTop > video.offsetHeight) {
//           video.pause();
//         } else {
//           video.play();
//         }

//         video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToNextSection = () => {
//     const nextSection = document.getElementById("next-section");
//     nextSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Video Background Section */}
//       <section className="relative h-[50vh] md:h-[80vh] flex justify-center items-center overflow-hidden">
//         <div className="absolute inset-0 flex justify-center items-center md:pt-1 pt-8">
//           {videoUrl && (
//             <iframe
//               ref={videoRef}
//               className="md:max-w-[1200px] md:h-full object-cover"
//               src={videoUrl}
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               title="YouTube Video"
//             ></iframe>
//           )}
//         </div>
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//       </section>

//       {/* Arrow Below the Video */}
//       <div className="flex justify-center md:mt-1 mt-2">
//         <button
//           onClick={scrollToNextSection}
//           className="hidden md:block text-white text-4xl animate-bounce mb-20"
//         >
//           <img src={arrow} alt="Scroll Down Arrow" />
//         </button>
//       </div>

//       {/* Next Section */}
//       <section
//         id="next-section"
//         className="md:h-[70vh] h-screen bg-black flex items-center justify-center"
//       >
//         <HeroSection />
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useState } from "react";
// import HeroSection from "./HeroSection";
// import arrow from "../assets/images/downarraow.png";

// const LandingPage = () => {
//   const [videoId, setVideoId] = useState("");

//   useEffect(() => {
//     const fetchYouTubeVideo = async () => {
//       const apiKey = "AIzaSyD8v2dEVujXuN9jESTE0DTGPKZgEvrnw94";
//       const channelId = "UCoe-fi5V1y4laZOSjMDSGDA";
//       const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${apiKey}`;

//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         if (data.items && data.items.length > 0) {
//           setVideoId(data.items[0].id.videoId);
//         }
//       } catch (error) {
//         console.error("Error fetching YouTube video:", error);
//       }
//     };

//     fetchYouTubeVideo();
//   }, []);

//   const scrollToNextSection = () => {
//     const nextSection = document.getElementById("next-section");
//     nextSection.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Video Background Section */}
//       <section className="relative h-[50vh] md:h-[80vh] flex justify-center items-center overflow-hidden">
//         <div className="absolute inset-0 flex justify-center items-center md:pt-1 pt-8 w-full">
//           {videoId && (
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/Ro3DWrhQzcA?si=wkDmU5YlXT6x5e1v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//           )}
//         </div>
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//       </section>

//       {/* Arrow Below the Video */}
//       <div className="flex justify-center md:mt-1 mt-2">
//         <button
//           onClick={scrollToNextSection}
//           className="hidden md:block text-white text-4xl animate-bounce mb-20"
//         >
//           <img src={arrow} alt="Scroll Down Arrow" />
//         </button>
//       </div>

//       {/* Next Section */}
//       <section
//         id="next-section"
//         className="md:h-[70vh] h-screen bg-black flex items-center justify-center"
//       >
//         <HeroSection />
//       </section>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import arrow from "../assets/images/downarraow.png";

const LandingPage = () => {
  // const intro =
  //   "https://res.cloudinary.com/dlanlvnce/video/upload/v1724910824/samples/dance-2.mp4";
  const intro =
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1724911066/qvhrpnxhsaowtzraeoe9.mov";
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

  // Ensure the video plays automatically on iOS and other devices
  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current.play(); // Try to play the video
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

      {/* mobile */}

      <section className="  md:hidden relative h-[50vh] md:h-[80vh] flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center md:pt-1 pt-8">
          <video
            className="md:max-w-[1200px] md:h-full object-cover"
            autoPlay
            loop
            muted
            playsInline // Required for iOS inline playback
            // Ensure the video is preloaded
          >
            <source
              src={
                "https://res.cloudinary.com/dlanlvnce/video/upload/v1725789842/Savishkar_showreel_fc8ypd.mov"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

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
        className="md:h-[70vh] h-screen bg-black flex items-center justify-center"
      >
        <HeroSection />
      </section>
    </div>
  );
};

export default LandingPage;
