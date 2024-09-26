import React from "react";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import horizontal2 from "../assets/images/halffooter.gif";
import vlogo from "../assets/brand/vlogo.png";

const Footer = () => {
  return (
    <footer className="footer-section bg-white md:bg-black justify-center">
      <div className="flex justify-center items-center ">
        <section className="relative overflow-hidden">
          <div className="relative">
            <img
              src={vlogo}
              alt="Logo"
              className="mt-12 h-32 mt-26 mb-6 hidden md:block"
            />
            <img src={logo2} alt="Logo" className="h-32 md:hidden" />
            <div className="absolute top-0 left-0 w-full h-full flex pt-28 items-center justify-center">
              <h1 className="text-white md:text-[12px] text-center">
                IT'S THE WAY WE DO IT
              </h1>
            </div>
          </div>
        </section>
      </div>
      <div className=" md:hidden flex justify-center ">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[300px] h-auto object-contain md:max-w-[700px] md:hidden"
        />
      </div>
    </footer>
  );
};

export default Footer;
