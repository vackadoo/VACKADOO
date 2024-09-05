// import { useState } from "react";
// import { navItems } from "../constants/index";
// import { Menu } from "lucide-react";
// import { X } from "lucide-react";
// import rat from "../assets/images/rat.png";
// import rat2 from "../assets/images/rat2.png";

// import React from "react";

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const togglenavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky text-black  top-0  bg-white  z-40 ">
//       <div className="container  mx-auto relative text-xs">
//         <div className="flex items-center justify-between">
//           <div className="flex md:py-2 md:px-3  flex-shrink-0">
//             <a href="./">
//               <img src={rat2} className="h-12 pl-2 py-1 md:hidden" />
//               <h1 className="md:block ml-12  hidden text-black  text-xl font-extrabold">
//                 VACKADOO
//               </h1>
//             </a>

//             <span className="text-xl tracking-tight"></span>
//           </div>

//           <div className="hidden lg:flex pr-10 space-x-6 items-center ml-auto">
//             <a
//               href="/ScheduleCall"
//               className="py-1 px-3 text-[12px] text-white  rounded-full hover:bg-[#242424]  bg-zinc-800"
//             >
//               Schedule a Call
//             </a>
//             <span className="h-6 border-r border-black "></span>{" "}
//             {/* Vertical line */}
//             <a href="/Info" className="py-2   text-sm font-semibold">
//               Info
//             </a>
//           </div>

//           <div className="lg:hidden md:flex-col justify-end pr-4 py-2 ">
//             <a
//               href="/ScheduleCall"
//               className=" text-[10px] mx-4 p-3 px-4 text-white  rounded-full hover:bg-[#242424]  bg-zinc-800"
//             >
//               Schedule a Call
//             </a>
//             <button onClick={togglenavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {mobileDrawerOpen && (
//           <div className="fixed font-medium right-0 z-20 bg-white text-black  p-4 pt-2 flex flex-col justify-center items-center lg:hidden rounded-xl">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-4">
//                   <a href={item.href}>{item.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { navItems } from "../constants/index";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import rat2 from "../assets/images/rat2.png";
import React from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Function to toggle the state of the mobile drawer
  const togglenavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky text-black top-0 bg-white z-40">
      <div className="container mx-auto relative text-xs">
        <div className="flex items-center justify-between">
          <div className="flex md:py-2 md:px-3 flex-shrink-0">
            <a href="./">
              <img src={rat2} className="h-12 pl-2 py-1 md:hidden" alt="logo" />
              <h1 className="md:block ml-12 hidden text-black text-xl font-extrabold">
                VACKADOO
              </h1>
            </a>
          </div>

          <div className="hidden lg:flex pr-12 space-x-6 items-center ml-auto">
            <a
              href="/ScheduleCall"
              className="py-2 px-3 text-[12px] text-white rounded-full hover:bg-[#242424] bg-zinc-800"
            >
              Schedule a Call
            </a>
            <span className="h-6 border-r border-black"></span>
            <a href="/Info" className="py-2 text-xs font-semibold">
              Info
            </a>
          </div>

          <div className="lg:hidden md:flex-col justify-end pr-6 pb-2">
            <div className="flex flex-row justify-end space-x-4">
              <a
                href="/ScheduleCall"
                className="text-[12px]  rounded-full text-white hover:bg-[#242424] py-1 px-3 bg-[#252525]"
              >
                Schedule a Call
              </a>
              <button onClick={togglenavbar}>
                {mobileDrawerOpen ? <X/> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Drawer box */}
        {mobileDrawerOpen && (
          <>
            {/* Backdrop blur effect with onClick to close the drawer */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
              onClick={togglenavbar}
            ></div>

            <div className="fixed right-9 left-9 top-12 z-40 bg-white text-black p-4 pt-2 flex flex-col justify-center items-center lg:hidden rounded-xl transform transition-transform duration-300 ease-out translate-x-0">
              <ul className="flex flex-col items-center">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
