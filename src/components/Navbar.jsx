import { useState } from "react";
import { navItems } from "../constants/index";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import rat2 from "../assets/images/rat2.png";
import cross from "../assets/images/cross.png";
import Close from "../assets/images/Close.png";

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
              <img
                src={rat2}
                className="h-12 pl-2 py-1 md:hidden"
                alt="vackadoologo"
              />
              <h1 className="md:block ml-12 hidden text-black text-xl font-extrabold">
                VACKADOO
              </h1>
            </a>
          </div>

          <div className="hidden lg:flex  pr-12 space-x-6 items-center ml-auto">
            <a
              href="/ScheduleCall"
              className="py-2 px-4 text-[12px] text-white rounded-full hover:bg-[#242424] bg-zinc-800"
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
                {mobileDrawerOpen ? <X /> : <Menu />}
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

            {/* Drawer */}
            <div className="fixed right-9 left-9 top-12 z-40 bg-white text-black p-0 pt-0 flex flex-col justify-center items-center lg:hidden rounded-xl transform transition-transform duration-300 ease-out translate-x-0">
              {/* Close Button */}
              <button
                className="absolute top-1 right-2 text-black bg-transparent p-2 text-2xl font-bold "
                onClick={togglenavbar}
              >
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
