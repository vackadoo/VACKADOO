import React from "react";

import picture1 from "../assets/brand/Pauls/picture1.png";
import picture2 from "../assets/brand/Pauls/picture2.png";
import picture3 from "../assets/brand/Pauls/picture3.png";
import picture4 from "../assets/brand/Pauls/picture4.png";
import picture5 from "../assets/brand/Pauls/picture5.png";
import picture6 from "../assets/brand/Pauls/picture6.png";
import picture7 from "../assets/brand/Pauls/picture7.jpeg";
import picture8 from "../assets/brand/Pauls/picture8.jpg";
import picture9 from "../assets/brand/Pauls/picture9.jpg";

const images = [
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
  picture8,
  picture9,
];

export default function Marquee() {
  return (
    <div className="relative flex flex-col items-center md:mx-32 md:mt-22 mt-4 overflow-hidden">
      <div className="relative flex max-w-full overflow-hidden py-5">
        <div className="flex animate-marquee w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2.5 flex items-center justify-center w-[8rem] md:w-[14rem]"
            >
              <img
                src={image}
                className="object-cover border-black border-[1px] drop-shadow-md  md:rounded-xl rounded-lg"
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "30rem",
                  maxHeight: "20rem",
                }}
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
