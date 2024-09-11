import React, { useRef, useState, useEffect } from "react";
import horizontal from "../../assets/images/footer2.gif";
import horizontal2 from "../../assets/images/halffooter.gif";
import Paulsmarquee from "../../components/paulsmarquee";
import Videofooter from "../../components/Videofooter";

const Pauls = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoUrls = [
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725528549/IMG_4567_yqnvst.mov",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_0010.MP4?alt=media&token=72513e4b-110c-429c-8168-f0764031fc14",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792707/IMG_1272_1_pfegun.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792724/IMG_7291_ovmfix.mov",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792739/IMG_8647_v94zsu.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_9636.MOV?alt=media&token=2b35f330-b6eb-4e68-a781-529113ed7477",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FPaul's%20biryani%20offer.mp4?alt=media&token=a525c52e-0d61-4e8e-980c-c6ac67dd93b3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FTimeline%201%20(3).mov?alt=media&token=6685e78f-70ab-4a8d-8a1d-36e14c157724",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792639/1718652608022865_ftlerg.mp4",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_0010.MP4?alt=media&token=72513e4b-110c-429c-8168-f0764031fc14",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792707/IMG_1272_1_pfegun.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792724/IMG_7291_ovmfix.mov",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792739/IMG_8647_v94zsu.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_9636.MOV?alt=media&token=2b35f330-b6eb-4e68-a781-529113ed7477",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FPaul's%20biryani%20offer.mp4?alt=media&token=a525c52e-0d61-4e8e-980c-c6ac67dd93b3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FTimeline%201%20(3).mov?alt=media&token=6685e78f-70ab-4a8d-8a1d-36e14c157724",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792639/1718652608022865_ftlerg.mp4",

    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_0010.MP4?alt=media&token=72513e4b-110c-429c-8168-f0764031fc14",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792707/IMG_1272_1_pfegun.mp4",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792724/IMG_7291_ovmfix.mov",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792739/IMG_8647_v94zsu.mp4",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FIMG_9636.MOV?alt=media&token=2b35f330-b6eb-4e68-a781-529113ed7477",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FPaul's%20biryani%20offer.mp4?alt=media&token=a525c52e-0d61-4e8e-980c-c6ac67dd93b3",
    "https://firebasestorage.googleapis.com/v0/b/check-app-c2959.appspot.com/o/Pauls%2FTimeline%201%20(3).mov?alt=media&token=6685e78f-70ab-4a8d-8a1d-36e14c157724",
    "https://res.cloudinary.com/dlanlvnce/video/upload/v1725792639/1718652608022865_ftlerg.mp4",
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

  const handleMouseOver = (videoRefs) => {
    if (videoRefs.current) {
      videoRefs.current.muted = false;
      videoRefs.current.play();
    }
  };

  const handleMouseLeave = (videoRefs) => {
    if (videoRefs.current) {
      videoRefs.current.muted = true;
      videoRefs.current.pause();
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
    const nextSection = document.getElementById("next-section");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className="text-center pt-2 px-2  md:pt-9">
        <div className="flex flex-col md:flex-row md:space-x-10  items-center justify-center md:px-16  ">
          <h1
            className="text-xl pt-3 md:text-6xl font-bold text-center md:hidden "
            style={{ color: "#FF8412" }}
          >
            THE PAUL’S BIRYANI
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mt-8 md:hidden">
            <div className=" flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
              <video
                className="object-contain h-auto border-[1px] border-black  drop-shadow-xl rounded-xl max-h-[400px] md:max-h-[700px]"
                muted
                loop
                autoPlay
                playsInline
                ref={videoRefs[0]}
                onMouseOver={() => handleMouseOver(videoRefs[0])}
                onMouseLeave={() => handleMouseLeave(videoRefs[0])}
              >
                <source src={videoUrls[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-72 md:h-auto grid-cols-1 "
          /> */}

            <div className=" grid-cols-1  md:flex-row mt-10">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/thepaulsbiryani?igsh=MXVsajZweG0yazRyeg=="
              >
                <div className="bg-[#FF8412] text-[8px] mb-2 hover:bg-white hover:text-[#FF8412]  py-1 w-full">
                  Brand Management
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/reel/C97lQviSMML/?igsh=d3cxMW5yem1qMmJl"
              >
                <div className="bg-[#FF8412] text-[8px] mb-2   py-1  w-full">
                  Podcast Production
                </div>
              </a>
              <div
                onClick={scrollToNextSection}
                className="bg-[#FF8412] text-[8px] mb-2  py-1  w-full"
              >
                Content Production
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/gallery/207211901/Puals"
              >
                <div className="bg-[#FF8412] text-[8px] mb-2   py-1  w-full">
                  Product Photoshoots
                </div>
              </a>
            </div>
          </div>

          <div className="md:order-1 mt-4 md:w-1/3 hidden md:block">
            {/* <img
            src={juris}
            alt="Juris Domain Instagram"
            className="rounded-lg shadow-lg h-72 md:h-auto   "
          /> */}
            <div className=" flex justify-center rounded-xl drop-shadow-lg relative overflow-hidden">
              <video
                className="object-contain border-[1px] border-black h-auto  drop-shadow-xl rounded-xl max-h-[300px] md:max-h-[450px]"
                muted
                loop
                autoPlay
                ref={videoRefs[0]}
                onMouseOver={() => handleMouseOver(videoRefs[0])}
                onMouseLeave={() => handleMouseLeave(videoRefs[0])}
              >
                <source src={videoUrls[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* Right Section: Title, Paragraph, and Buttons */}
          <div className=" md:order-2 md:w-1/2">
            <h1
              className="text-4xl md:text-4xl font-bold text-center hidden md:block "
              style={{ color: "#FF8412" }}
            >
              THE PAUL’S BIRYANI
            </h1>

            <div className="hidden md:flex md:justify-center md:mt-6   ">
              <div class="grid grid-cols-2 gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/thepaulsbiryani?igsh=MXVsajZweG0yazRyeg=="
                >
                  <div className="bg-[#FF8412] text-xs p-2 px-8 hover:bg-white hover:text-[#FF8412] ">
                    Brand Management
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/reel/C97lQviSMML/?igsh=d3cxMW5yem1qMmJl"
                >
                  <div className="bg-[#FF8412] text-xs p-2 hover:bg-white hover:text-[#FF8412]">
                    Podcast Production
                  </div>
                </a>
                <div
                  onClick={scrollToNextSection}
                  className="bg-[#FF8412] text-xs p-2 hover:bg-white hover:text-[#FF8412] "
                >
                  Content Production
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.behance.net/gallery/207211901/Puals"
                >
                  <div className="bg-[#FF8412] text-xs p-2 space hover:bg-white hover:text-[#FF8412] ">
                    Product Photoshoots
                  </div>
                </a>
              </div>
            </div>

            <p className=" hidden md:block md:pt-0 mt-6 text-black   md:text-[14px] text-justify md:px-4   md:text-justify">
              Vackadoo provides comprehensive brand management for Paul's
              Biryani covering a broad spectrum of activities from brand logo
              design to implementing social media strategies. We oversee the
              brand presence on various platforms such as Instagram, LinkedIn,
              Twitter, and more, ensuring a consistent and effective digital
              footprint. Our team devises monthly strategies aimed at increasing
              engagement and enhancing brand visibility. This includes curating
              engaging content, including posts and reels, that resonate with
              the target audience. By managing all aspects of social media
              activities, we ensure that Paul's Biryani maintains a dynamic and
              cohesive brand communication, strengthening its connection and
              relationship with customers.
            </p>
            <p className=" md:hidden px-2  mt-4 text-black text-[12px] text-justify  md:text-justify">
              Vackadoo provides comprehensive brand management for Paul's
              Biryani covering a broad spectrum of activities from brand logo
              design to implementing social media strategies. We oversee the
              brand presence on various platforms such as Instagram, LinkedIn,
              Twitter, and more, ensuring a consistent and effective digital
              footprint.
            </p>
          </div>
        </div>

        <Paulsmarquee />

        <p className=" md:hidden px-2  mt-4  text-[12px]  md:pt-7  text-black  text-justify  md:text-justify">
          Our team devises monthly strategies aimed at increasing engagement and
          enhancing brand visibility. This includes curating engaging content,
          including posts and reels, that resonate with the target audience. By
          managing all aspects of social media activities, we ensure that Paul's
          Biryani maintains a dynamic and cohesive brand communication,
          strengthening its connection and relationship with customers.
        </p>

        <div
          id="next-section"
          className="md:mt-6 mt-0 flex items-center justify-center drop-shadow-xl relative py-9"
        >
          <div
            onMouseOver={pauseMarquee}
            onMouseLeave={resumeMarquee}
            className="relative overflow-x-auto md:overflow-hidden w-full max-w-[350px] md:max-w-[1109px]"
          >
            <div
              ref={marqueeRef}
              className="flex space-x-4 md:space-x-4 transition-transform duration-500 md:animate-marquee"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {videoUrls.slice(1).map((url, index) => (
                <video
                  key={index}
                  className="object-contain border-[1px] border-black rounded-xl max-h-[200px] md:max-h-[300px] drop-shadow-xl"
                  loop
                  muted
                  autoPlay
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

        <div className="flex justify-center md:mt-12 mt-0 ">
          <img
            src={horizontal2}
            alt="Footer Image"
            className="w-full max-w-[250px] h-full md:max-w-[700px] object-contain md:hidden"
          />
          <div className=" hidden md:block">
            <Videofooter />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pauls;
