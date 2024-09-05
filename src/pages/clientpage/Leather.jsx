import React, { useRef, useState } from "react";
import alposter from "../../assets/images/al/alposter.png";

import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";
import Videofooter from "../../components/Videofooter";

const AdroitLeathersSection = () => {
  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FSET%201553.mp4?alt=media&token=584fce4e-e9fb-49f9-9455-304a55eb4045",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725526960/fld_12_with_branding_bc1cef.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725527007/MULTIPURPOSE_DOCUMENT_FOLDER_WIH_LOGO_2_pgdw7h.mp4",


    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FSET%201553.mp4?alt=media&token=584fce4e-e9fb-49f9-9455-304a55eb4045",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725526960/fld_12_with_branding_bc1cef.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725527007/MULTIPURPOSE_DOCUMENT_FOLDER_WIH_LOGO_2_pgdw7h.mp4",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FSET%201553.mp4?alt=media&token=584fce4e-e9fb-49f9-9455-304a55eb4045",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Al%2FFLD%2022.mp4?alt=media&token=ef85973a-302d-4cff-a8f6-d2babfd24051",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725526960/fld_12_with_branding_bc1cef.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725527007/MULTIPURPOSE_DOCUMENT_FOLDER_WIH_LOGO_2_pgdw7h.mp4",

  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseOver = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  const handleNext = () => {
    if (currentIndex < videoUrls.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-white pt-4 md:pt-8">
      <div className="text-2xl md:text-5xl  text-[#4F1D1C] text-center md:mb-0  md:mx-20 md:pr-16">
        <h1 className="font-bold">ADROIT LEATHERS</h1>
        <div className=" md:hidden grid grid-cols-3 gap-1 md:gap-4 mx-1 mt-6 md:mx-48">
          <a href="https://www.linkedin.com/company/adroit-leathers/about/?viewAsMember=true">
            <div className="grid-col-1  text-[7px]  text-white bg-[#B58543]">
              Brand Managment
            </div>
          </a>
          <div className="grid-col-1  text-[7px] px-1   text-white bg-[#B58543]">
            Photoshoots & Videoshoots
          </div>
          <div className="grid-col-1  text-[7px]  text-white bg-[#B58543]">
            Email Marketing
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-0 mt-4 mx-4 md:mx-24 gap-6">
        <div className="mt-4 md:mt-0 flex items-center justify-center drop-shadow-xl relative py-0 md:py-9">
          <div className="relative overflow-hidden w-full max-w-[1500px]">
            <div
              className="flex space-x-2 md:space-x-4 animate-marquee hover:animate-none transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videoUrls.slice(1).map((url, index) => (
                <video
                  key={index}
                  className="object-contain rounded-xl max-h-[200px] md:max-h-[400px] drop-shadow-2xl "
                  loop
                  muted
                  playsInline
                  ref={videoRefs[index + 1]}
                  onMouseOver={() => handleMouseOver(videoRefs[index + 1])}
                  onMouseLeave={() => handleMouseLeave(videoRefs[index + 1])}
                >
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
            {/* Left Button */}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handlePrev}
            >
              &#8249;
            </button>
            {/* Right Button */}
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
              onClick={handleNext}
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className="py-4 md:py-0">
          <div className="hidden md:flex md:justify-center md:mt-8  gap-12">
            <div class="grid grid-cols-2 gap-3  ">
              <div className="bg-[#B58543] text-[14px] py-2   col-span-2 text-center  px-24 ">
                Photoshoots & Videoshoots
              </div>
              <a href="https://www.linkedin.com/company/adroit-leathers/about/?viewAsMember=true">
                <div className="bg-[#B58543] text-[14px] p-2 text-center ">
                  Brand Managment
                </div>
              </a>
              <div className="bg-[#B58543] text-[14px]  p-2 text-center ">
                Email Marketing
              </div>
            </div>
          </div>

          <div className="text-black text-justify text-[13px] md:text-[15px] px-2  md:py-7  py-0  md:px-10">
            Vackadoo manages Adroit Leathers' social media presence across
            multiple platforms, including Facebook, LinkedIn, and Instagram. Our
            approach is to create professional product videos that accurately
            showcase their offerings and attract potential customers.
            Additionally, we run targeted email marketing campaigns to generate
            leads and drive customer engagement. Our comprehensive strategy
            ensures that Adroit Leathers maintains a strong and consistent brand
            presence, effectively reaching and engaging with their target
            audience across all channels.
          </div>
        </div>
      </div>

      <div className=" mx-2 md:mx-0  md:mt-2 flex justify-center rounded-xl drop-shadow-xl relative overflow-hidden ">
        <img
          src={alposter}
          className="object-contain h-auto rounded-xl max-h-[350px] md:max-h-[400px]"
          alt="Adroit Leathers Poster"
        />
      </div>
      <div className="flex justify-center mt-6 md:mt-0 ">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
        />
        <div className="hidden md:block mt-8">
          <Videofooter />
        </div>
      </div>
    </section>
  );
};

export default AdroitLeathersSection;
