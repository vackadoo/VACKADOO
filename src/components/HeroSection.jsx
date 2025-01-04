// import React, { useEffect } from "react";
// import "../css/HeroSection.css";

// const HeroSection = () => {
//   useEffect(() => {
//     const spotlightSize = 400;

//     const handleMouseMove = (event) => {
//       // Get the coordinates of the title
//       let titleRect = document.querySelector(".title").getBoundingClientRect();

//       // Grab the mouse's X-position
//       let mouseX = event.clientX;

//       // Position spotlight x coordinate based on mouse x, center based on width of spotlight, take into account element x offset
//       let spotlightX = mouseX - spotlightSize / 2 - titleRect.left;

//       // Grab the mouse's Y position
//       let mouseY = event.clientY;

//       // Position spotlight y coordinate based on mouse y, center based on width of spotlight, take into account element y offset
//       let spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

//       // Set x and y position of spotlight
//       const element = document.querySelector(".title");
//       element.style.backgroundPosition = `${spotlightX}px ${spotlightY}px`;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     // Cleanup event listener on component unmount
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <main className="title-wrapper">
//       <div className="title">
//         <div className="hero-section">
//           <div className="hidden md:block">
//             <div className="text-2xl text-center">Tap to bring the</div>
//             <div className="text-8xl text-center font-extrabold spotlight">
//               <a href="/service">SPOTLIGHT</a>
//             </div>
//             <div className="text-2xl text-center">On your Brand</div>
//           </div>


         
          

//           <div className="h-[60vh]  w-screen md:hidden flex flex-col  bg-gradient-to-b from-black to-gray-100 text-white ">
//             <h1 className="text-xl px-6 text-left md:text-6xl font-bold ">
//               Welcome to Vackadoo,
//             </h1>
//             <h1 className="text-xl px-6 text-left md:text-6xl font-bold ">
//               where creativity meets
//             </h1>
//             <h1 className="text-xl px-6 text-left md:text-6xl font-bold ">
//               innovation!
//             </h1>
//             <p className="pt-6 text-xs px-6 md:text-2xl text-gray-100 mb-8">
//               A passionate team of dreamers, designers, and digital wizards,
//               dedicated to turning your vision into a compelling visual story.
//             </p>
//             <div className="flex items-center justify-center animate-bounce   md:mb-32">
//               <svg
//                 className="w-8 h-8 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19 9l-7 7-7-7"
//                 ></path>
//               </svg>
//             </div>
            
//           </div>
          
//         </div>
        
//       </div>
      
//       <a
//           href="/service"
//           className="hidden h-12 w-40 md:block  mt-10 py-2 px-6 rounded-full text-black bg-white hover:bg-[#242424] transform transition-transform duration-300 hover:scale-110"
//         >
//           OUR SERVICES
//         </a>
      
//     </main>
//   );
// };

// export default HeroSection;



import React, { useEffect } from "react";
import "../css/HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const spotlightSize = 400;

    const handleMouseMove = (event) => {
      let titleRect = document.querySelector(".title").getBoundingClientRect();
      let mouseX = event.clientX;
      let spotlightX = mouseX - spotlightSize / 2 - titleRect.left;
      let mouseY = event.clientY;
      let spotlightY = mouseY - spotlightSize / 2 - titleRect.top;
      const element = document.querySelector(".title");
      element.style.backgroundPosition = `${spotlightX}px ${spotlightY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="title-wrapper flex flex-col items-center">
      <div className="title">
        <div className="hero-section">
          <div className="hidden md:block">
            <div className="text-2xl text-center">Tap to bring the</div>
            <div className="text-8xl text-center font-extrabold spotlight">
              <a href="/service">SPOTLIGHT</a>
            </div>
            <div className="text-2xl text-center">On your Brand</div>
          </div>

          <div className="h-[60vh] w-screen md:hidden flex flex-col bg-gradient-to-b from-black to-gray-100 text-white">
            <h1 className="text-xl px-6 text-left md:text-6xl font-bold">
              Welcome to Vackadoo,
            </h1>
            <h1 className="text-xl px-6 text-left md:text-6xl font-bold">
              where creativity meets
            </h1>
            <h1 className="text-xl px-6 text-left md:text-6xl font-bold">
              innovation!
            </h1>
            <p className="pt-6 text-xs px-6 md:text-2xl text-gray-100 mb-8">
              A passionate team of dreamers, designers, and digital wizards,
              dedicated to turning your vision into a compelling visual story.
            </p>
            <div className="flex items-center justify-center animate-bounce md:mb-32">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-20">
        <a
          href="/service"
          className="hidden md:block h-12 w-40 py-3 px-6 rounded-full text-black bg-white hover:bg-[#242424] hover:text-white text-center transform transition-transform duration-300 hover:scale-110"
        >
          OUR SERVICES
        </a>
      </div>
    </main>
  );
};

export default HeroSection;
