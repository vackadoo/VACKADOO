// import React, { useState } from "react";
// import vodcaste from "../assets/images/vodecaste.png";

// const App = () => {
//   const [isSliding, setIsSliding] = useState(false);

//   const handleSlide = () => {
//     setIsSliding(!isSliding);
//   };

//   return (
//     <div className=" bg-black flex items-center justify-center">
//       {/* Oval-shaped container */}
//       <div
//         className="relative w-[500px] h-[150px] bg-white rounded-full overflow-hidden cursor-pointer"
//         onClick={handleSlide} // Slide trigger
//       >
//         {/* Vodcast Card */}
//         <div
//           className={`absolute top-[50%] left-0 transform -translate-y-1/2 transition-transform duration-1000 ${
//             isSliding ? "translate-x-[310px]" : "translate-x-0"
//           }`}
//         >
//           <div className="flex items-center">
//             <img src={vodcaste} alt="Vodcast" className="h-[140px] w-auto" />
           
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import vodcaste from "../assets/images/vodecaste.png";

// const App = () => {
//   const [isSliding, setIsSliding] = useState(false);

//   const handleSlide = () => {
//     setIsSliding(!isSliding);
//   };

//   return (
//     <div className="bg-black flex items-center justify-center pb-20 ">
//       {/* Oval-shaped container */}
//       <div
//         className="relative w-[400px] h-[140px] bg-white rounded-full overflow-hidden cursor-pointer flex items-center"
//         onClick={handleSlide} // Slide trigger
//       >
//         {/* Vodcast Card */}
//         <div
//           className={`absolute top-[52%] left-0 transform -translate-y-1/2 transition-transform duration-1000 ${
//             isSliding ? "translate-x-[215px]" : "translate-x-0"
//           }`}
//         >
//           <div className="flex items-center">
//             <img src={vodcaste} alt="Vodcast" className="h-[140px] w-auto" />
//           </div>
//         </div>

//         {/* Static Text */}
//         <div
//   className={`absolute right-6 text-black text-xs transition-opacity duration-700 ${
//     isSliding ? "opacity-0" : "opacity-100"
//   } flex flex-col items-center`}
// >
//   <span>Podcast services by</span>
//   <span className="font-bold">VACKADOO</span>
// </div>

//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vodcaste from "../assets/images/vodecaste.png";

const App = () => {
  const [isSliding, setIsSliding] = useState(false);
  const navigate = useNavigate();

  const handleSlide = () => {
    setIsSliding(true);

    // Redirect after the animation duration (1 second in this case)
    setTimeout(() => {
      navigate("/Vodcaste"); // Redirect to the Vodcaste page
    }, 1000); // Match the duration of the animation (1s)
  };

  return (
    <div className="bg-black flex items-center justify-center pb-20">
      {/* Oval-shaped container */}
      <div
        className="relative w-[400px] h-[140px] bg-white rounded-full overflow-hidden cursor-pointer flex items-center"
        onClick={handleSlide} // Slide trigger
      >
        {/* Vodcast Card */}
        <div
          className={`absolute top-[52%] left-0 transform -translate-y-1/2 transition-transform duration-1000 ${
            isSliding ? "translate-x-[215px]" : "translate-x-0"
          }`}
        >
          <div className="flex items-center">
            <img src={vodcaste} alt="Vodcast" className="h-[140px] w-auto" />
          </div>
        </div>

        {/* Static Text */}
        <div
          className={`absolute right-6 text-black text-xs transition-opacity duration-700 ${
            isSliding ? "opacity-0" : "opacity-100"
          } flex flex-col items-center`}
        >
          <span>Podcast services by</span>
          <span className="font-bold">VACKADOO</span>
        </div>
      </div>
    </div>
  );
};

export default App;
