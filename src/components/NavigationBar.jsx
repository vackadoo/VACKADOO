import { useState } from "react";
import { navItems } from "../constants/index";
import { Menu } from "lucide-react";
import rat2 from "../assets/images/rat2.png";
import React from "react";
import cross from "../assets/images/cross.png";
import Close from "../assets/images/Close.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const togglenavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 md:py-1  z-40 md:m-0 m-1 mt-2">
      <div className="container mx-auto relative text-xs">
        <div className="flex items-center justify-between md:px-10">
          <div className="flex flex-shrink-0">
            <img src={rat2} alt="Rat Logo" className="h-10 pl-2 md:hidden" />
            <h1 className="hidden md:block text-xl font-bold pl-6">VACKADOO</h1>
          </div>

          <div className="hidden pt-1 lg:flex text-[12px] space-x-6 items-center ml-auto">
            <a
              href="/ScheduleCall"
              className="py-2 px-3 rounded-full hover:bg-[#242424] bg-zinc-800"
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

          <div className="lg:hidden md:flex-col justify-end pr-4 pb-1">
            <div className="flex flex-row justify-end space-x-4">
              <a
                href="/ScheduleCall"
                className="text-[12px] rounded-full hover:bg-[#242424] py-1 px-3 bg-[#252525]"
              >
                Schedule a Call
              </a>
              <button onClick={togglenavbar} aria-label="Toggle Menu">
                <Menu />
              </button>
            </div>
          </div>
        </div>

        {mobileDrawerOpen && (
          <>
            {/* Backdrop blur effect with onClick to close the drawer */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
              onClick={togglenavbar}
            ></div>

            {/* Drawer */}
            <div className="fixed right-9 left-9 top-12 z-40 bg-white text-black p-0 pt-0 flex flex-col justify-center items-center lg:hidden rounded-xl transform transition-transform duration-300 ease-out translate-x-0">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-black bg-transparent p-2 text-xl font-bold"
                onClick={togglenavbar}
              >
                {/* &times; */}
                <img src={Close} alt="close" className="w-5 h-6 pt-0 " />
              </button>

              {/* Outer Border */}
              <div className="border-black rounded-xl border-2 w-full p-2">
                {/* Inner Border */}
                <div className="border-black rounded-lg border-2 w-full p-4">
                  <ul className="flex flex-col items-center">
                    {navItems.map((item, index) => (
                      <li key={index} className="py-4">
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
