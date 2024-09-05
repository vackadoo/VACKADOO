// import { useState } from "react";
// import { navItems } from "../constants/index";
// import { Menu } from "lucide-react";
// import { X } from "lucide-react";
// import rat from "../assets/images/rat.png";
// import React from "react";
// import rat2 from "../assets/images/rat2.png";

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const togglenavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 md:py-2 backdrop-blur-lg z-40 md:m-0 m-1 ">
//       <div className="container  mx-auto relative text-[12px]">
//         <div className="flex items-center justify-between md:px-10">
//           <div className="flex  flex-shrink-0">
//             <img src={rat2} href="./" className="h-12 pl-2 md:hidden" />
//             <h1 className="hidden md:block text-xl font-bold pl-6">
//               VACKADOO
//             </h1>
//             <span className="text-xl tracking-tight"></span>
//           </div>

//           <div className="hidden  lg:flex space-x-7 items-center ml-auto">
//             <a
//               href="/ScheduleCall"
//               className="py-2 px-3  rounded-full hover:bg-[#242424]  bg-zinc-800"
//             >
//               Schedule a Call
//             </a>
//             <span className="h-6 border-r border-white "></span>{" "}
//             <a href="/Info" className="py-2  text-xs font-semibold">
//               Info
//             </a>
//           </div>
//           <div className="lg:hidden md:flex-col justify-end pr-4 pb-2">
//             <div className="flex flex-row justify-end space-x-4">
//               <a
//                 href="/ScheduleCall"
//                 className="text-[12px] rounded-full hover:bg-[#242424] py-2 px-3 bg-[#252525]"
//               >
//                 Schedule a Call
//               </a>
//               <button onClick={togglenavbar}>
//                 {mobileDrawerOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {mobileDrawerOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"></div>
//         )}

//         {/* Drawer box */}
//         {mobileDrawerOpen && (
//           <div className="fixed right-9 left-9 top-12 z-40 bg-white text-black p-4 pt-2 flex flex-col justify-center items-center lg:hidden rounded-xl transform transition-transform duration-300 ease-out translate-x-0">
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


// // black


import { useState } from "react";
import { navItems } from "../constants/index";
import { Menu, X } from "lucide-react";
import rat2 from "../assets/images/rat2.png";
import React from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const togglenavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 md:py-1 backdrop-blur-lg z-40 md:m-0 m-1 mt-2">
      <div className="container mx-auto relative text-xs">
        <div className="flex items-center justify-between md:px-10">
          <div className="flex flex-shrink-0">
            <img src={rat2} href="./" className="h-12 pl-2 md:hidden" />
            <h1 className="hidden md:block text-xl font-bold pl-6">VACKADOO</h1>
          </div>

          <div className="hidden lg:flex text-[12px] space-x-6 items-center ml-auto">
            <a
              href="/ScheduleCall"
              className="py-1 px-2 rounded-full hover:bg-[#242424] bg-zinc-800"
            >
              Schedule a Call
            </a>
            <span className="h-6 border-r border-white"></span>
            <a
              href="/Info"
              className="py-2 text-xs font-semibold border border-black rounded-md px-2"
            >
              Info
            </a>
          </div>
          <div className="lg:hidden md:flex-col justify-end pr-4 pb-2">
            <div className="flex flex-row justify-end space-x-4">
              <a
                href="/ScheduleCall"
                className="text-[12px] rounded-full hover:bg-[#242424] py-2 px-3 bg-[#252525]"
              >
                Schedule a Call
              </a>
              <button onClick={togglenavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileDrawerOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              onClick={togglenavbar} // Close drawer when the overlay is clicked
            ></div>

            <div className="fixed right-9 left-9 top-12 z-40 bg-white text-black p-4 pt-2 flex flex-col justify-center items-center lg:hidden rounded-xl transform transition-transform duration-300 ease-out">
              <ul className="flex flex-col items-center">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4 text-center">
                    <a
                      href={item.href}
                      className={`${
                        item.label === "Info"
                          ? "border border-black rounded-md px-2"
                          : ""
                      }`}
                    >
                      {item.label}
                    </a>
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
