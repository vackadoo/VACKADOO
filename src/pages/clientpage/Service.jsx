// import React, { useEffect, useState } from "react";

// import vertical from "../../assets/images/servic/vertical.png";
// import horizontal from "../../assets/images/servic/horizontal.png";
// import ServicesOffer from "../../components/ServicesOffer";
// import one from "../../assets/images/one.gif";
// import oneleft from "../../assets/images/oneleft.gif";
// import left2 from "../../assets/images/left2.mp4";
// import right2 from "../../assets/images/Right2.mp4";

// const Service = () => {

//   const [isHovered, setIsHovered] = useState(false);

//   const scrollToNextSection = () => {


//     const nextSection = document.getElementById("next-section");
//     nextSection.scrollIntoView({ behavior: "smooth" });
//   };
//   const [showVertical, setShowVertical] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowVertical(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative bg-white">
//       <div
//         className="fixed  left-0 h-screen w-auto  onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}"
//       >
//         <video
//           muted
//           loop
//           playsInline
//           autoPlay={isHovered}
//           src={left2}
//           className="h-full hidden md:block hover:play"
//           alt="Side Image"
//         />
//       </div>
//       <div className=" mt-6 fixed right-0 h-screen w-auto">
//         <video
//           src={right2}
//           loop
//           autoPlay
//           className="h-full hidden md:block"
//           alt="Side Image"
//         />
//       </div>

//       <div className="flex justify-center items-center  bg-white">
//         <div className="relative md:w-full md:max-w-4xl max-w-xl">
//           {showVertical ? (
//             <img
//               src={vertical}
//               alt="Vertical"
//               className={`h-[60vh] w-full object-contain transition-all duration-[3000ms] ease-in-out transform z-20 ${
//                 showVertical ? "opacity-10" : "opacity-100"
//               }`}
//             />
//           ) : (
//             <img
//               src={horizontal}
//               alt="Horizontal"
//               className={`h-[60vh] w-full object-contain transition-all duration-[3000ms] ease-in-out transform z-30 ${
//                 showVertical ? "opacity-0" : "opacity-100"
//               }`}
//             />
//           )}
//         </div>
//       </div>
//       <div className="flex justify-center  bg-white">
//         <button
//           onClick={scrollToNextSection}
//           className="text-white text-6xl bouncy-arrow md:mb-28"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
//             <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
//           </svg>
//         </button>
//       </div>

//       <div className="bg-white">
//         <section className="relative ">
//           <div className="absolute inset-0 bg-white"></div>
//         </section>
//         <section
//           id="next-section"
//           className="h-screen flex items-center justify-center bg-white"
//         >
//           <ServicesOffer />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Service;



import React, { useEffect, useState, useRef } from "react";
import vertical from "../../assets/images/servic/vertical.png";
import horizontal from "../../assets/images/servic/horizontal.png";
import ServicesOffer from "../../components/ServicesOffer";
import left2 from "../../assets/images/left2.mp4";
import right2 from "../../assets/images/Right2.mp4";

const Service = () => {
  const [showVertical, setShowVertical] = useState(true);
  const leftVideoRef = useRef(null);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVertical(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (leftVideoRef.current) {
      leftVideoRef.current.pause();
    }
  };

  return (
    <div className="relative bg-white">
      {/* Left Video */}
      <div
        className="fixed left-0 top-0 h-screen w-auto z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={leftVideoRef}
          muted
          src={left2}
          loop
          playsInline
          className="h-full hidden md:block"
        />
      </div>

      {/* Right Video */}
      <div className="fixed mt-9 right-0 top-0 h-[90vh] w-auto z-10"
      onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <video
          src={right2}
          ref={leftVideoRef}
          loop
          
          muted
          playsInline
          className="h-full hidden md:block"
        />
      </div>

      {/* Image Transition */}
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="relative z-20 md:w-full md:max-w-4xl max-w-xl">
          {showVertical ? (
            <img
              src={vertical}
              alt="Vertical"
              className="h-[60vh] w-full object-contain transition-all duration-[3000ms] ease-in-out"
            />
          ) : (
            <img
              src={horizontal}
              alt="Horizontal"
              className="h-[60vh] w-full object-contain transition-all duration-[3000ms] ease-in-out"
            />
          )}
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="flex justify-center bg-white z-20">
        <button
          onClick={scrollToNextSection}
          className="text-black text-6xl bouncy-arrow mb-28"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
            <path d="M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
          </svg>
        </button>
      </div>

      {/* Next Section */}
      <section
        id="next-section"
        className="h-screen flex items-center justify-center bg-white"
      >
        <ServicesOffer />
      </section>
    </div>
  );
};

export default Service;
