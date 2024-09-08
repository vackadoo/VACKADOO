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

import React, { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import arrow from "../assets/images/downarraow.png";
// import intro from "../assets/video/intro.mov";

const LandingPage = () => {
  const intro =
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1724911066/qvhrpnxhsaowtzraeoe9.mov";
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const video = videoRef.current;

      if (video) {
        // Pause the video if the scroll position is past the video height
        if (scrollTop > video.offsetHeight) {
          video.pause();
        } else {
          video.play();
        }

        // Adjust the video opacity based on scroll position
        video.style.opacity = Math.max(0.2, 1 - scrollTop / 900);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Video Background Section */}
      <section className="relative h-[50vh] md:h-[80vh] flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center md:pt-1 pt-8">
          <video
            ref={videoRef}
            className="md:max-w-[1200px] md:h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={intro} type="video/mp4" />
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
