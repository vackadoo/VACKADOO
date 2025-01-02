import React, { useRef, useState, useEffect } from "react";

import juris from "../../assets/images/juris/juris1.png";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";
import Videofooter from "../../components/Videofooter";

import poster0 from "../../assets/brand/juris/poster0.jpg";

import poster1 from "../../assets/brand/juris/poster1.jpg";
import poster2 from "../../assets/brand/juris/poster2.jpg";
import poster3 from "../../assets/brand/juris/poster3.jpg";
import poster4 from "../../assets/brand/juris/poster4.jpg";
import poster5 from "../../assets/brand/juris/poster5.jpg";
import poster6 from "../../assets/brand/juris/poster6.jpg";
import poster7 from "../../assets/brand/juris/poster7.jpg";

const JurisDomain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posterUrls = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
  ];
  const videoUrls = [
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158851/1716915757048897_ytpy77.mov",

    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158782/IMG_8243_qzhfoq.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8588.MOV?alt=media&token=5316551d-7672-4480-8d75-625a5670db96",
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158788/IMG_8638_pfgyl3.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8802.MP4?alt=media&token=881f5f7c-c6ed-4fe3-beb2-049298c3c16e",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_9039.MOV?alt=media&token=b42770cb-10f4-4426-a230-e4eff766b576",
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158822/WhatsApp_Video_2024-07-16_at_5.20.58_PM_gsohxw.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.21.08%20PM.mp4?alt=media&token=7668c2df-dbcf-4bd1-b4b0-0006339af920",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2Fw%20captions.mp4?alt=media&token=716da8d2-e58d-4c68-a37e-9e37e76917b2",
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158831/WhatsApp_Video_2024-07-17_at_3.06.03_PM_c02ygk.mp4",

    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158782/IMG_8243_qzhfoq.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8588.MOV?alt=media&token=5316551d-7672-4480-8d75-625a5670db96",
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158788/IMG_8638_pfgyl3.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8802.MP4?alt=media&token=881f5f7c-c6ed-4fe3-beb2-049298c3c16e",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_9039.MOV?alt=media&token=b42770cb-10f4-4426-a230-e4eff766b576",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.20.58%20PM.mp4?alt=media&token=ef4000b7-cad3-4a03-aa49-89afa075fab6",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.21.08%20PM.mp4?alt=media&token=7668c2df-dbcf-4bd1-b4b0-0006339af920",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2Fw%20captions.mp4?alt=media&token=716da8d2-e58d-4c68-a37e-9e37e76917b2",
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158831/WhatsApp_Video_2024-07-17_at_3.06.03_PM_c02ygk.mp4",

    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158782/IMG_8243_qzhfoq.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8588.MOV?alt=media&token=5316551d-7672-4480-8d75-625a5670db96",
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158788/IMG_8638_pfgyl3.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8802.MP4?alt=media&token=881f5f7c-c6ed-4fe3-beb2-049298c3c16e",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_9039.MOV?alt=media&token=b42770cb-10f4-4426-a230-e4eff766b576",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.20.58%20PM.mp4?alt=media&token=ef4000b7-cad3-4a03-aa49-89afa075fab6",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.21.08%20PM.mp4?alt=media&token=7668c2df-dbcf-4bd1-b4b0-0006339af920",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2Fw%20captions.mp4?alt=media&token=716da8d2-e58d-4c68-a37e-9e37e76917b2",
    "https://res.cloudinary.com/dcvxotvg8/video/upload/v1727158831/WhatsApp_Video_2024-07-17_at_3.06.03_PM_c02ygk.mp4",

    // "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792335/IMG_8243_vjqwuv.mp4",
    // "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8588.MOV?alt=media&token=5316551d-7672-4480-8d75-625a5670db96",
    // "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792104/IMG_8638_dxg4b7.mp4",
    // "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_8802.MP4?alt=media&token=881f5f7c-c6ed-4fe3-beb2-049298c3c16e",
    // "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FIMG_9039.MOV?alt=media&token=b42770cb-10f4-4426-a230-e4eff766b576",
    // "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.20.58%20PM.mp4?alt=media&token=ef4000b7-cad3-4a03-aa49-89afa075fab6",
    // "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2FWhatsApp%20Video%202024-07-16%20at%205.21.08%20PM.mp4?alt=media&token=7668c2df-dbcf-4bd1-b4b0-0006339af920",
    // "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/juris%2Fw%20captions.mp4?alt=media&token=716da8d2-e58d-4c68-a37e-9e37e76917b2",
    // "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792063/WhatsApp_Video_2024-07-17_at_3.06.03_PM_yjqztp.mp4",
  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const marqueeRef = useRef(null);

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

  const pauseMarquee = () => {
    marqueeRef.current.style.animationPlayState = "paused";
  };

  const resumeMarquee = () => {
    marqueeRef.current.style.animationPlayState = "running";
  };

  const scrollToNextSection = () => {
    const nextSection2 = document.getElementById("next-section2");
    nextSection2.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white pt-6  md:px-16 ">
      <div className="flex flex-col md:flex-row md:space-x-12 items-center justify-center">
        <h1
          className="text-3xl md:text-5xl font-bold text-center md:hidden "
          style={{ color: "#94866B" }}
        >
          JURIS DOMAIN
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2  gap-2 md:gap-8   mt-8 md:hidden">
          <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-52 md:h-auto grid-cols-1 "
          />

          <div className=" grid-cols-1 space-y-4 md:flex-row  mt-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://www.instagram.com/juris.domain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <div className="bg-[#94866B] hover:text-[#94866B] hover:bg-white text-center text-[10px] p-2 ">
                Campaign Managment
              </div>
            </a>

            <div className="bg-[#94866B] hover:text-[#94866B] hover:bg-white text-center text-[10px] p-2 ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/cftAKPoPn9s?si=OxkYVmATbYYVphEH"
              >
                Podcast Production
              </a>
            </div>

            <div
              cursor-pointer
              onClick={scrollToNextSection}
              className="bg-[#94866B]  hover:text-[#94866B] hover:bg-white text-center text-[10px] p-2"
            >
              Event Production
            </div>
          </div>
        </div>

        <div className="md:order-2 md:w-1/3 hidden md:block ">
          <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-72 ml-3  "
          />
        </div>
        {/* Right Section: Title, Paragraph, and Buttons */}
        <div className=" md:order-1 md:w-1/2">
          <h1
            className="text-4xl md:text-5xl font-bold text-center hidden md:block "
            style={{ color: "#94866B" }}
          >
            JURIS DOMAIN
          </h1>

          <div className="hidden md:flex md:ml-16  md:mt-7 ">
            <div class="grid grid-cols-2 gap-2 ">
              <div className="bg-[#94866B] hover:text-[#94866B] hover:bg-white text-[14px] py-2 col-span-2 text-center px-28">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href=" https://www.instagram.com/juris.domain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                >
                  Campaign Managment
                </a>
              </div>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/cftAKPoPn9s?si=OxkYVmATbYYVphEH"
              >
                <div className="bg-[#94866B] hover:text-[#94866B] hover:bg-white text-[14px] text-center px-2  py-2 ">
                  Podcast Production
                </div>
              </a>
              <div
                cursor-pointer
                onClick={scrollToNextSection}
                className="bg-[#94866B] hover:text-[#94866B] hover:bg-white text-[14px] text-center px-2  py-2"
              >
                Event Production
              </div>
            </div>
          </div>

          <p className=" mt-4 text-black text-[12px] md:text-[14px] md:mt-8  text-justify md:px-5  px-6 md:text-justify">
            Vackadoo leads Juris Domain's digital presence and focuses on
            optimizing the Instagram strategy. We were involved in orchestrating
            their book launch event and managing all aspects of photography and
            videography to ensure high-quality documentation of the occasion.
            Our team also created Instagram posts and reel that captured the
            essence of the launch and promoted the book. In addition, we managed
            book orders to ensure a smooth and efficient experience for
            customers. Our comprehensive approach ensures that the Juris Domain
            is consistently identified and accessible to the audience,
            strengthening their digital presence and reaching the market.
          </p>
        </div>
      </div>

      <div
        id="next-section2"
        onMouseOver={pauseMarquee}
        onMouseLeave={resumeMarquee}
        className="flex items-center justify-center drop-shadow-xl relative py-9"
      >
        <div className="relative overflow-x-auto md:overflow-hidden w-full max-w-[350px] md:max-w-[1000px]">
          <div
            ref={marqueeRef}
            className="flex space-x-4 transition-transform duration-500 md:animate-marquee"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {(window.innerWidth < 768
              ? videoUrls.slice(1, 8)
              : videoUrls.slice(1)
            ).map((url, index) => (
              <video
                key={index}
                className="object-contain rounded-xl max-h-[250px] md:max-h-[300px] drop-shadow-xl border-[1px] border-black"
                loop
                muted
                controls
                alt="juris"
                poster={posterUrls[index % posterUrls.length]}
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:space-x md:grid-cols-2 md:mx md:mt-8  ">
        <div className="order-2 items-center md:order-1">
          <div className=" flex items-center  drop-shadow-xl relative ">
            <video
              className="object-contain mt-5 md:mt-0   md:ml-24 ml-4 rounded-xl max-h-[200px] border-[1px] border-black  md:max-h-[250px] drop-shadow-xl"
              loop
              muted
              playsInline
              controls
              poster={poster0}
              ref={videoRefs[0]}
              alt="juris"
              onMouseOver={() => handleMouseOver(videoRefs[0])}
              onMouseLeave={() => handleMouseLeave(videoRefs[0])}
              // onClick={() => {
              //   videoRefs[0].current.muted = !videoRefs[0].current.muted;
              // }}
            >
              <source src={videoUrls[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className=" text-black text-[12px] md:text-[14px]  md:text-justify text-justify md:pt-4    md:mx-auto order-1 md:order-1 px-6 pt-4 md:p ">
          <p className=" md:pr-16">
            Vackadoo offers comprehensive podcast services tailored to meet your
            needs. We assist in recording or/and executing the podcast, ensuring
            a professional and engaging outcome. Our team takes care of the
            editing process to deliver a polished final product. Once completed,
            we handle the posting of the podcast in your YouTube channel and
            manage the channel to maximise reach and engagement.
          </p>
        </div>
      </div>

      {/* Footer Image */}
      <div className="flex justify-center mt-8 md:mt-0 ">
        <img
          src={horizontal2}
          alt="Footer Image"
          className="w-full max-w-[300px] h-full md:max-w-[700px] object-contain md:hidden"
        />
        <div className="hidden md:block md:mt-12">
          <Videofooter />
        </div>
      </div>
    </div>
  );
};

export default JurisDomain;
