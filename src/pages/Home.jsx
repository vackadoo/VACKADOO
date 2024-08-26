import React from "react";
import ImageGrid from "../components/Grid"; 
import FeatureSection from "../components/FeatureSection"; 
import Marquee from "../components/Marquee"; 
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <ImageGrid />
      <FeatureSection />
      <Marquee />
      <Footer />
    </div>
  );
};

export default Home;
