import React from "react";
// import ImageGrid from "../components/Grid";
// import FeatureSection from "../components/FeatureSection";
// import Marquee from "../components/Marquee";
// import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div>
//       <ImageGrid />
//       <FeatureSection />
//       <Marquee />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import { Suspense } from "react";

// Lazy load the components
const ImageGrid = React.lazy(() => import("../components/Grid"));
const FeatureSection = React.lazy(() => import("../components/FeatureSection"));
const Marquee = React.lazy(() => import("../components/Marquee"));
const Footer = React.lazy(() => import("../components/Footer"));
const OurBlog = React.lazy(() => import("../components/OurBlog"));

const Home = () => {
  return (
    <div>
      {/* Add Suspense with a fallback to display while components are loading */}
      <Suspense fallback={<div>Loading Image Grid...</div>}>
        <ImageGrid />
      </Suspense>

      <Suspense fallback={<div>Loading Feature Section...</div>}>
        <FeatureSection />
      </Suspense>

      <Suspense fallback={<div>Loading Marquee...</div>}>
        <Marquee />
      </Suspense>
      {/* 
      <Suspense fallback={<div>Loading Marquee...</div>}>
        <OurBlog />
      </Suspense> */}

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
