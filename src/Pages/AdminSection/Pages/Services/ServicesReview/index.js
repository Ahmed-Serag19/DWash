import React, { useState } from "react"; // Import React and useState hook
import LogoName from "../../../../../Assets/LogoName.png"; // Import logo image
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Import arrow icons from react-icons
import HeaderSPSection from "../../../Components/Header"; // Import header component

const ServicesReviewAdmin = () => {
  // Array of images to be displayed in the slider
  const images = [
    LogoName,
    "https://via.placeholder.com/800x400.png?text=Image+2",
    "https://via.placeholder.com/800x400.png?text=Image+3",
  ];

  // State to track the current image index for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image in the slider
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1) // Loop back to the first image if at the end
    );
  };

  // Function to go to the previous image in the slider
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1) // Loop back to the last image if at the beginning
    );
  };

  return (
    <div className="h-screen">
      {" "}
      {/* Full screen height container */}
      <HeaderSPSection /> {/* Render the header section */}
      <div className="py-4 px-10 my-5 lg:mx-44 md:mx-32 sm:mx-16 border shadow-xl rounded-lg">
        {" "}
        {/* Main content container */}
        <div className="space-y-2">
          {" "}
          {/* Space between sections */}
          {/* Order details section */}
          <div className="text-end text-sm md:text-lg">
            <p>
              رقم الطلب: <span className="text-gray-400">100087976545</span>
            </p>
          </div>
          <div className="text-end text-sm md:text-lg">
            <p>
              تاريخ الطلب: <span className="text-gray-400">10/20/2023</span>
            </p>
          </div>
          <div className="text-end text-sm md:text-lg">
            <p>
              مقدم الطلب: <span className="text-gray-400">مغسلة رغوة</span>
            </p>
          </div>
          <div className="text-end text-sm md:text-lg">
            <p>
              نوع الطلب: <span className="text-gray-400">جديد</span>
            </p>
          </div>
          <div className="text-end text-sm md:text-lg">
            <p>
              رقم المعرف: <span className="text-gray-400">١٠٩٢٨٧٤٥٧٣٧٦</span>
            </p>
          </div>
        </div>
        <hr className="-mx-3 border-1 border-black my-4" /> {/* Divider line */}
        <div className="relative w-full max-w-4xl mx-auto my-6 rounded-lg">
          {" "}
          {/* Image slider container */}
          {/* Image container */}
          <div className="relative h-64 sm:h-96 overflow-hidden mx-auto">
            {" "}
            {/* Set height and hide overflow */}
            {/* Image display */}
            <img
              src={images[currentIndex]} // Display the current image
              alt={`Slide ${currentIndex}`} // Alt text for accessibility
              className="w-full h-full object-contain transition duration-500 ease-in-out" // Style for the image
            />
          </div>
          {/* Left Arrow for navigation */}
          <button
            onClick={prevSlide} // Call prevSlide function on click
            className="absolute top-1/2 transform -translate-y-1/2 -left-4 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          >
            <IoIosArrowBack size={30} /> {/* Left arrow icon */}
          </button>
          {/* Right Arrow for navigation */}
          <button
            onClick={nextSlide} // Call nextSlide function on click
            className="absolute top-1/2 transform -translate-y-1/2 -right-4 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          >
            <IoIosArrowForward size={30} /> {/* Right arrow icon */}
          </button>
        </div>
        <hr className="-mx-3 border-1 border-black my-4" /> {/* Divider line */}
        <div className="space-y-2">
          {" "}
          {/* Space between sections */}
          <div className="text-end text-lg md:text-lg ">
            <p>
              غسيل سيارات
              <span className="text-gray-400"> : نوع الخدمة </span>
            </p>
          </div>
          <div className="text-end text-lg md:text-lg">
            <p>: تفاصيل الخدمة</p> {/* Service details label */}
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          {" "}
          {/* Textarea container */}
          <textarea className="w-full border border-black rounded-lg p-4 h-48 md:h-80" />{" "}
          {/* Textarea for service details */}
        </div>
        <div className="text-center">
          {" "}
          {/* Centered button container */}
          <button className="bg-blue-950 text-white text-lg md:text-lg px-8 md:px-16 py-2 rounded-lg">
            اغلاق {/* Close button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesReviewAdmin; // Export the component for use in other parts of the application
