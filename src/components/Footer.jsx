// import React from "react";
// import logo from "../assets/images/logo.png";

// const Footer = () => {
//   return (
//     <footer className="footer-section bg-white md:bg-black ">
//       <div className="hidden md:block flex grid grid-cols-1 justify-items-center">
//         <section className="relative  overflow-hidden">
//           <div className=" ">
//             <img src={logo} alt="Logo" className="h-80 mb-36 item-center" />
//           </div>
//         </section>
//       </div>
//       <div className="md:hidden grid grid-cols-1 justify-items-center">
//         <section className="relative  overflow-hidden">
//           <div className=" ">
//             <img src={logo} alt="Logo" className="h-80 mb-36" />
//           </div>
//         </section>
//       </div>
//     </footer>
//   );
// };
// export default Footer;

import React from "react";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import horizontal2 from "../assets/images/halffooter.gif";
import vlogo from "../assets/brand/vlogo.png";

const Footer = () => {
  return (
    <footer className="footer-section bg-white md:bg-black justify-center">
      <div className="flex items-center justify-center">
        <a
          href="/ScheduleCall"
          className=" hidden md:block py-2 px-6 rounded-full text-black bg-white hover:bg-[#242424] transform transition-transform duration-300 hover:scale-110"
        >
          SERVICES
        </a>
        <a
          href="/ScheduleCall"
          className="md:hidden py-2 mt-4 px-6 rounded-full text-white  hover:bg-white bg-[#242424] transform transition-transform duration-300 hover:scale-110"
        >
          SERVICES
        </a>
      </div>

      <div className="flex justify-center items-center ">
        {/* <section className="relative overflow-hidden">
        <div> 
          <img
            src={vlogo}
            alt="Logo"
            className=" mt-12 h-50 my-36 hidden md:block"
          />
          <img src={logo2} alt="Logo" className="h-60  md:hidden " />
          <div className="pt-0"> <h1 className="text-white">IT'S THE WAY WE DO IT </h1></div>
         </div>
        
        </section> */}
        <section className="relative overflow-hidden">
  <div className="relative">
    <img
      src={vlogo}
      alt="Logo"
      className="mt-12 h-50 my-36 hidden md:block"
    />
    <img
      src={logo2}
      alt="Logo"
      className="h-60 md:hidden"
    />
    <div className="absolute top-0 left-0 w-full h-full flex pt-60 items-center justify-center">
      <h1 className="text-white text-xl text-center">IT'S THE WAY WE DO IT</h1>
    </div>
  </div>
</section>

      </div>
      <div className=" md:hidden flex justify-center ">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[500px] h-auto object-contain md:max-w-[700px] md:hidden"
        />
      </div>
    </footer>
  );
};

export default Footer;
