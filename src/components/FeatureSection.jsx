// import React, { useEffect, useState } from "react";
// import vertical from "../assets/images/vertical.png";
// import horizontal from "../assets/images/horizontal.png";
// import Pauls from "../assets/images/clientposter/Biryani.png";
// import FiemFoundation from "../assets/images/clientposter/FiemFoundation.png";
// import HorzionStudy from "../assets/images/clientposter/HorizonStudy.png";
// import JurisDomain from "../assets/images/clientposter/JurisDomain.png";
// import Leather from "../assets/images/clientposter/Leather.png";
// import tedx from "../assets/images/clientposter/Tedxshiva.png";
// import { useNavigate } from "react-router-dom";

// const items = [
//   { name: "Pauls", image: Pauls },
//   { name: "FiemFoundation", image: FiemFoundation },
//   { name: "HorzionStudy", image: HorzionStudy },
//   { name: "JurisDomain", image: JurisDomain },
//   { name: "Leather", image: Leather },
//   { name: "tedx", image: tedx },
// ];

// const FeatureSection = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMarqueeVisible, setIsMarqueeVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = (name) => {
//     navigate(`/${name}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const triggerPoint = window.innerHeight / 2;

//       if (scrollTop > triggerPoint) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//         setIsMarqueeVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     if (isScrolled) {
//       setTimeout(() => {
//         setIsMarqueeVisible(true);
//       }, 3000);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isScrolled]);

//   return (
//     <div className=" relative h-[40vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
//       <img
//         src={horizontal}
//         className={`   hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-20  ${
//           isScrolled
//             ? "translate-x-[-40vw] opacity-10"
//             : "translate-x-0 opacity-100"
//         }`}
//         alt="Horizontal"
//       />
//       <img
//         src={vertical}
//         className={`hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-30  ${
//           isScrolled
//             ? "translate-x-[-40vw] opacity-100"
//             : "translate-x-[20vw] opacity-0"
//         }`}
//         alt="Vertical"
//       />

//       {isMarqueeVisible && (
//         <div className=" hidden md:block absolute bottom-0 w-full  overflow-visible z-10">
//           {" "}
//           <div className="flex animate-marquee">
//             {[...items, ...items].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0  md:h-full px-2.5 md:py-14 w-[10rem] transition-opacity duration-300"
//               >
//                 <div className="relative md:h-full px-3 py-8 transform transition-transform duration-300 hover:scale-150 hover:overflow-visible">
//                   <div className="flex flex-col items-center gap-4">
//                     <img
//                       onClick={() => handleClick(item.name)}
//                       src={item.image}
//                       className="object-contain rounded-lg cursor-pointer"
//                       alt={item.name}
//                       style={{ maxWidth: "100%", maxHeight: "100%" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="md:hidden h-[] w-full text-center">
//         <h1 className="text-white  text-xl font-bold mb-16">Projects</h1>
//         <div className="flex animate-marquee">
//           {[...items, ...items].map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 h-full  w-[8rem] transition-opacity duration-200"
//             >
//               <div className="relative h-full px-5 transform transition-transform duration-200  hover:scale-150 hover:overflow-visible">
//                 <div className="flex flex-col items-center">
//                   <img
//                     onClick={() => handleClick(item.name)}
//                     src={item.image}
//                     className="object-contain rounded-lg cursor-pointer"
//                     alt={item.name}
//                     style={{ maxWidth: "100%", maxHeight: "100%" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;

// import React, { useEffect, useState } from "react";
// import vertical from "../assets/images/vertical.png";
// import horizontal from "../assets/images/horizontal.png";
// import Pauls from "../assets/images/clientposter/Biryani.png";
// import FiemFoundation from "../assets/images/clientposter/FiemFoundation.png";
// import HorzionStudy from "../assets/images/clientposter/HorizonStudy.png";
// import JurisDomain from "../assets/images/clientposter/JurisDomain.png";
// import Leather from "../assets/images/clientposter/Leather.png";
// import tedx from "../assets/images/clientposter/Tedxshiva.png";
// import { useNavigate } from "react-router-dom";

// const items = [
//   { name: "Pauls", image: Pauls },
//   { name: "FiemFoundation", image: FiemFoundation },
//   { name: "HorzionStudy", image: HorzionStudy },
//   { name: "JurisDomain", image: JurisDomain },
//   { name: "Leather", image: Leather },
//   { name: "tedx", image: tedx },
// ];

// const FeatureSection = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMarqueeVisible, setIsMarqueeVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = (name) => {
//     navigate(`/${name}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const triggerPoint = window.innerHeight / 2;

//       if (scrollTop > triggerPoint) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//         setIsMarqueeVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     if (isScrolled) {
//       setTimeout(() => {
//         setIsMarqueeVisible(true);
//       }, 3000);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isScrolled]);

//   return (
//     <div className="relative h-[50vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
//       <img
//         src={horizontal}
//         className={`hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-20 ${
//           isScrolled
//             ? "translate-x-[-40vw] opacity-10"
//             : "translate-x-0 opacity-100"
//         }`}
//         alt="Horizontal"
//       />
//       <img
//         src={vertical}
//         className={`hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-30 ${
//           isScrolled
//             ? "translate-x-[-40vw] opacity-100"
//             : "translate-x-[20vw] opacity-0"
//         }`}
//         alt="Vertical"
//       />

//       {isMarqueeVisible && (
//         <div className="hidden md:block absolute bottom-0 w-full overflow-visible z-10">
//           <div className="flex animate-marquee">
//             {[...items, ...items].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 md:h-full px-2.5 md:py-14 w-[10rem] transition-opacity duration-300"
//               >
//                 <div className="relative md:h-full px-3 py-8 transform transition-transform duration-300 hover:scale-150 hover:overflow-visible">
//                   <div className="flex flex-col items-center gap-4">
//                     <img
//                       onClick={() => handleClick(item.name)}
//                       src={item.image}
//                       className="object-contain rounded-lg cursor-pointer"
//                       alt={item.name}
//                       style={{ maxWidth: "100%", maxHeight: "100%" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="md:hidden h-[] w-full text-center">
//         <h1 className="text-white text-xl font-bold mb-16">Projects</h1>
//         <div className="flex animate-marquee">
//           {[...items, ...items].map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 h-full w-[8rem] transition-opacity duration-200"
//             >
//               <div className="relative h-full px-5 transform transition-transform duration-200 hover:scale-150 hover:overflow-visible">
//                 <div className="flex flex-col items-center">
//                   <img
//                     onClick={() => handleClick(item.name)}
//                     src={item.image}
//                     className="object-contain rounded-lg cursor-pointer"
//                     alt={item.name}
//                     style={{ maxWidth: "100%", maxHeight: "100%" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;

// import React, { useEffect, useState } from "react";
// import vertical from "../assets/images/vertical.png";
// import horizontal from "../assets/images/horizontal.png";
// import Pauls from "../assets/images/clientposter/Biryani.png";
// import FiemFoundation from "../assets/images/clientposter/FiemFoundation.png";
// import HorzionStudy from "../assets/images/clientposter/HorizonStudy.png";
// import JurisDomain from "../assets/images/clientposter/JurisDomain.png";
// import Leather from "../assets/images/clientposter/Leather.png";
// import tedx from "../assets/images/clientposter/Tedxshiva.png";
// import { useNavigate } from "react-router-dom";

// const items = [
//   { name: "Pauls", image: Pauls },
//   { name: "FiemFoundation", image: FiemFoundation },
//   { name: "HorzionStudy", image: HorzionStudy },
//   { name: "JurisDomain", image: JurisDomain },
//   { name: "Leather", image: Leather },
//   { name: "tedx", image: tedx },
// ];

// const FeatureSection = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMarqueeVisible, setIsMarqueeVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleClick = (name) => {
//     navigate(`/${name}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const triggerPoint = window.innerHeight / 2;

//       if (scrollTop > triggerPoint) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//         setIsMarqueeVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     if (isScrolled) {
//       setTimeout(() => {
//         setIsMarqueeVisible(true);
//       }, 3000);
//     }

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isScrolled]);

//   return (
//     <div className="relative h-[50vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
//       <img
//         src={horizontal}
//         className={`hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-20 ${
//           isScrolled
//             ? "translate-x-[-40vw] opacity-10"
//             : "translate-x-0 opacity-100"
//         }`}
//         alt="Horizontal"
//       />
//       <img
//         src={vertical}
//         className={`hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-30 ${
//           isScrolled
//             ? "translate-x-[-40vw] opacity-100"
//             : "translate-x-[20vw] opacity-0"
//         }`}
//         alt="Vertical"
//       />

//       {isMarqueeVisible && (
//         <div className="hidden md:block absolute bottom-0 w-full overflow-hidden z-10">
//           <div className="flex animate-marquee">
//             {[...items, ...items].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 md:h-full px-2.5 md:py-14 w-[10rem] transition-opacity duration-300"
//               >
//                 <div className="relative md:h-full px-3 py-8 transform transition-transform duration-300 hover:scale-150 hover:overflow-visible">
//                   <div className="flex flex-col items-center gap-4">
//                     <img
//                       onClick={() => handleClick(item.name)}
//                       src={item.image}
//                       className="object-contain rounded-lg cursor-pointer"
//                       alt={item.name}
//                       style={{ maxWidth: "100%", maxHeight: "100%" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="md:hidden w-full text-center">
//         <h1 className="text-white text-xl font-bold mb-16">Projects</h1>
//         <div className="flex animate-marquee">
//           {[...items, ...items].map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 h-full w-[8rem] transition-opacity duration-300"
//             >
//               <div className="relative h-full px-5 transform transition-transform duration-200 hover:scale-150 hover:overflow-visible">
//                 <div className="flex flex-col items-center">
//                   <img
//                     onClick={() => handleClick(item.name)}
//                     src={item.image}
//                     className="object-contain rounded-lg cursor-pointer"
//                     alt={item.name}
//                     style={{ maxWidth: "100%", maxHeight: "100%" }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;

import React, { useEffect, useState } from "react";
import vertical from "../assets/images/vertical.png";
import horizontal from "../assets/images/horizontal.png";
import Pauls from "../assets/images/clientposter/Biryani.png";
import FiemFoundation from "../assets/images/clientposter/FiemFoundation.png";
import HorzionStudy from "../assets/images/clientposter/HorizonStudy.png";
import JurisDomain from "../assets/images/clientposter/JurisDomain.png";
import Leather from "../assets/images/clientposter/Leather.png";
import tedx from "../assets/images/clientposter/Tedxshiva.png";
import { useNavigate } from "react-router-dom";

const items = [
  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },
];

const items2 = [
  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },
  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },
  { name: "Pauls", image: Pauls },
  { name: "FiemFoundation", image: FiemFoundation },
  { name: "HorzionStudy", image: HorzionStudy },
  { name: "JurisDomain", image: JurisDomain },
  { name: "Leather", image: Leather },
  { name: "tedx", image: tedx },
];

const FeatureSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMarqueeVisible, setIsMarqueeVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/${name}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight / 2;

      if (scrollTop > triggerPoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMarqueeVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isScrolled) {
      setTimeout(() => {
        setIsMarqueeVisible(true);
      }, 3000);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className="relative h-[50vh] md:h-[65vh] overflow-hidden flex items-center justify-center">
      <img
        src={horizontal}
        className={`hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-20 ${
          isScrolled
            ? "translate-x-[-40vw] opacity-10"
            : "translate-x-0 opacity-100"
        }`}
        alt="Horizontal"
      />
      <img
        src={vertical}
        className={`hidden md:block absolute transition-all duration-[3000ms] ease-in-out transform z-30 ${
          isScrolled
            ? "translate-x-[-40vw] opacity-100"
            : "translate-x-[20vw] opacity-0"
        }`}
        alt="Vertical"
      />

      {isMarqueeVisible && (
        <div className="hidden md:block absolute bottom-0 w-full overflow-hidden z-10">
          <div className="flex animate-marquee">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 md:h-full px-2.5 md:py-14 w-[10rem] transition-opacity duration-300"
              >
                <div className="relative md:h-full px-3 py-8 transform transition-transform duration-300 hover:scale-150 hover:overflow-visible">
                  <div className="flex flex-col items-center gap-4">
                    <img
                      onClick={() => handleClick(item.name)}
                      src={item.image}
                      className="object-contain rounded-lg cursor-pointer"
                      alt={item.name}
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <div className="md:hidden w-full text-center">
        <h1 className="text-white text-xl font-bold mb-16">Projects</h1>
        <div className="flex  ">
  {items2.map((item2, index) => (
    <div
      key={index}
      className="flex-shrink-0 h-full w-[8rem] transition-opacity duration-300"
    >
      <div className="relative h-full px-5 transform transition-transform duration-300 hover:scale-150 hover:overflow-visible">
        <div className="flex flex-col items-center">
          <img
            onClick={() => handleClick(item2.name)}
            src={item2.image}
            className="object-contain rounded-lg cursor-pointer"
            alt={item2.name}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
    </div>
  ))}
</div>

      </div> */}

      <div className="md:hidden w-full text-center">
        <h1 className="text-white text-xl font-bold mb-16">Projects</h1>
        <div className="flex  animate-marquee  ">
          {items2.map((item2, index) => (
            <div
              key={index}
              className="flex-shrink-0  w-[8rem] "
            >
              <div className="relative  px-5 duration-300 ">
                <div className="flex flex-col items-center">
                  <img
                    onClick={() => handleClick(item2.name)}
                    src={item2.image}
                    className="object-contain rounded-lg "
                    alt={item2.name}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  /> 
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default FeatureSection;
