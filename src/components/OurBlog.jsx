const OurBlog = () => {
  return (
    <div className=" w-full h-screen p-6 bg-white">
      <h2 className="text-3xl font-bold mb-6">OUR RECENT BLOGS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First large image section */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="your-image-url-1.jpg"
            alt="Blog 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white rounded-full px-2 py-1">
            <span>Topic</span>
          </div>
          <div className="absolute bottom-4 right-4">
            <a href="#" className="bg-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Smaller sections */}
        <div className="grid grid-rows-2 gap-6">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="your-image-url-2.jpg"
              alt="Blog 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white rounded-full px-2 py-1">
              <span>Topic</span>
            </div>
            <div className="absolute bottom-4 right-4">
              <a href="#" className="bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="your-image-url-3.jpg"
              alt="Blog 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white rounded-full px-2 py-1">
              <span>Topic</span>
            </div>
            <div className="absolute bottom-4 right-4">
              <a href="#" className="bg-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Wide section */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="your-image-url-4.jpg"
            alt="Blog 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white rounded-full px-2 py-1">
            <span>Topic</span>
          </div>
          <div className="absolute bottom-4 right-4">
            <a href="#" className="bg-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
