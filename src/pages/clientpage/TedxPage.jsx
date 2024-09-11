import React, { useRef, useState, useEffect } from "react";
import tedx1 from "../../assets/images/tedx/tedx1.png";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";
import Videofooter from "../../components/Videofooter";

const TedxPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoUrls = [
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/102.MP4?alt=media&token=f4abdfee-06f0-4dbb-97a8-4c434870dcf5",

    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794078/IMG_5288_jfrvjx.mov",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794070/1709699757377963_agdc3d.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794067/WhatsApp_Video_2024-07-17_at_1.31.32_PM_a3ouup.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794063/WhatsApp_Video_2024-07-17_at_1.27.48_PM_bnfoo5.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794061/WhatsApp_Video_2024-07-17_at_1.30.00_PM_1_guozss.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794056/WhatsApp_Video_2024-07-17_at_1.20.00_PM_augobp.mp4",

    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794078/IMG_5288_jfrvjx.mov",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794070/1709699757377963_agdc3d.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794067/WhatsApp_Video_2024-07-17_at_1.31.32_PM_a3ouup.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794063/WhatsApp_Video_2024-07-17_at_1.27.48_PM_bnfoo5.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794061/WhatsApp_Video_2024-07-17_at_1.30.00_PM_1_guozss.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794056/WhatsApp_Video_2024-07-17_at_1.20.00_PM_augobp.mp4",

    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794078/IMG_5288_jfrvjx.mov",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794070/1709699757377963_agdc3d.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794067/WhatsApp_Video_2024-07-17_at_1.31.32_PM_a3ouup.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794063/WhatsApp_Video_2024-07-17_at_1.27.48_PM_bnfoo5.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794061/WhatsApp_Video_2024-07-17_at_1.30.00_PM_1_guozss.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725794056/WhatsApp_Video_2024-07-17_at_1.20.00_PM_augobp.mp4",
  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const marqueeRef = useRef(null);
  const pauseMarquee = () => {
    marqueeRef.current.style.animationPlayState = "paused";
  };

  const resumeMarquee = () => {
    marqueeRef.current.style.animationPlayState = "running";
  };

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

  const scrollToNextSection = () => {
    const nextSection2 = document.getElementById("next-section2");
    nextSection2.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToNextSection2 = () => {
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <main className="text-center pt-4  md:pt-8">
        <h1 className="text-xl md:text-5xl font-bold text-black">
          <span className="text-xl md:text-5xl font-bold text-red-600">
            TEDX
          </span>
          SHIVAJICOLLEGE
        </h1>
        <div className=" md:hidden grid grid-cols-2 gap-2 md:gap-4 mt-4 mx-2 md:mx-48">
          <div
            onClick={scrollToNextSection2}
            className="grid-col-1 py-2 text-[10px] hover:text-red-600 hover:bg-white text-white  bg-red-600"
          >
            Event Coverage
          </div>
          <div
            onClick={scrollToNextSection}
            className="grid-col-1 py-2 px-1 text-[10px] hover:text-red-600 hover:bg-white text-white  bg-red-600"
          >
            Content Production
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-4  md:mx-40 mt-8 md:mt-6">
          <div className="drop-shadow-2xl md:mt-7 ml-6 ">
            <img src={tedx1} alt="" className="rounded-xl md:h-40" />
          </div>
          <div className="col-span-2 md:p-0 md:p md:py-7 py-0 text-black text-justify text-[14px] md:text-xs">
            <div className="hidden md:block px-4">
              <div className="grid grid-cols-2 md:gap-2 text-white  text-center pb-3 mx-2 ">
                <div
                  onClick={scrollToNextSection2}
                  className="grid-col-1 text-[14px] hover:text-red-600 hover:bg-white bg-red-600 py-2  "
                >
                  Event Coverage
                </div>
                <div
                  onClick={scrollToNextSection}
                  className="grid-col-1 py-2 text-[14px] hover:text-red-600 hover:bg-white   bg-red-600"
                >
                  Content Production
                </div>
              </div>
            </div>
            <p className=" mt-4 md:text-[14px] text-[12px] mx-6 ">
              Vackaoo played a pivotal role in the TEDxShivaji College event by
              providing comprehensive PR support and delivering a diverse range
              of video content including hype and formal videos. This
              collaboration not only amplified the event's reach but also
              sparked meaningful conversations and interactions among
              TEDxShivaji College members, solidifying their reputation as a
              premier platform for intellectual discourse and thought sharing.
              One of the standout achievements of the event, sponsored by
              Vackadoo, was its extensive coverage.
            </p>
          </div>
        </div>

        <div
          id="next-section"
          className="mt-8 md:mt-12 flex items-center justify-center mx-4 md:mx-40 drop-shadow-xl relative"
        >
          <video
            className="object-contain border-[1px] border-black  rounded-xl h-auto max-h-[400px] md:max-h-[500px]"
            loop
            muted
            playsInline
            ref={videoRefs[0]}
            onMouseOver={() => handleMouseOver(videoRefs[0])}
            onMouseLeave={() => handleMouseLeave(videoRefs[0])}
          >
            <source src={videoUrls[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-4 md:mt-12 text-[12px]  flex justify-center mx-4 md:mx-36 text-black text-justify  md:text-[14px]">
          Vackadoo meticulously captured the event’s most significant moments
          through professional photography and videography, resulting in
          visually captivating content that highlighted the essence and impact
          of each session. This in turn, significantly boosted their digital
          presence. Moreover, Vackadoo created engaging short reels that
          effectively showcased the highlights of TEDxShivaji College, further
          enhancing the event's visibility and appeal.
        </div>

        <div className="md:block hidden">
          <div
            id="next-section2"
            className="mt-8 md:mt-12 flex items-center justify-center drop-shadow-xl relative"
          >
            <div
              onMouseOver={pauseMarquee}
              onMouseLeave={resumeMarquee}
              className="relative overflow-hidden w-full max-w-[1000px]"
            >
              <div
                ref={marqueeRef}
                className="flex space-x-2  md:space-x-4 animate-marquee  transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {videoUrls.slice(1).map((url, index) => (
                  <video
                    key={index}
                    className="object-contain border-[1px]  border-black  rounded-xl max-h-[300px] md:max-h-[300px]"
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
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div
            id="next-section2"
            className="mt-8 md:mt-12 flex items-center justify-center drop-shadow-xl relative"
          >
            <div
              onMouseOver={pauseMarquee}
              onMouseLeave={resumeMarquee}
              className="relative overflow-hidden w-full max-w-[1000px]"
            >
              <div
                ref={marqueeRef}
                className="flex space-x-2  md:space-x-4 overflow-x-auto transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {videoUrls.slice(1, 7).map((url, index) => (
                  <video
                    key={index}
                    className="object-contain border-[1px]  border-black  rounded-xl max-h-[300px] md:max-h-[300px]"
                    loop
                    muted
                    playsInline
                    ref={videoRefs[index]}
                    onMouseOver={() => handleMouseOver(videoRefs[index])}
                    onMouseLeave={() => handleMouseLeave(videoRefs[index])}
                  >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            </div>
          </div>
        </div>  
        <div className="flex justify-center mt-12 ">
          <img
            src={horizontal2}
            alt="Footer Image"
            className="w-full max-w-[700px] h-full md:max-w-[700px] object-contain md:hidden"
          />
          <div className=" hidden md:block">
            <Videofooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TedxPage;
