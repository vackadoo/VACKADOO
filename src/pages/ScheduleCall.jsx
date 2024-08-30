// import React, { useEffect } from "react";

// const ScheduleCall = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="bg-white h-screen">
//       <div
//         className="calendly-inline-widget pt-14"
//         data-url="https://calendly.com/vackadoo/30min?background_color=efefef&text_color=111111&primary_color=1d1e1e"
//         style={{ minWidth: "420px", height: "700px" }}
//       ></div>
//     </div>
//   );
// };

// export default ScheduleCall;

import React, { useEffect } from "react";

const ScheduleCall = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="bg-white h-screen">
      <div
        className="calendly-inline-widget pt-14 md:px-0 px-4 min-w-300px h-[800px] md:min-w-[420px] md:h-[700px]"
        data-url="https://calendly.com/vackadoo/30min?background_color=efefef&text_color=111111&primary_color=1d1e1e"
      ></div>
    </div>
  );
};

export default ScheduleCall;
