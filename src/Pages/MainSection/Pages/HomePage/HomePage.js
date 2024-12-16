import React from "react"; // Import React library
import MainHeader from "../../Components/Header"; // Import the MainHeader component
import HeroImg from "../../../../Assets/HeroImg.svg"; // Import the hero image
import Section2Home from "./Section2Home"; // Import Section2Home component
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  return (
    <div>
      {/* Render the MainHeader component */}
      <MainHeader />

      {/* Hero Image Section */}
      <div>
        <img
          src={HeroImg} // Source of the hero image
          alt="hero" // Alt text for the image
          className="w-full h-auto object-cover lg:h-[450px] sm:h-[300px]" // Responsive styles for the image
        />
      </div>

      {/* Service Providers Button */}
      <div
        onClick={() => navigate("/main-service-providers")} // Navigate to the service providers page on click
        className="cursor-pointer mt-12 flex justify-center" // Styles for the button container
      >
        <h1 className=" text-center rounded-3xl font-[700] lg:text-4xl sm:text-sm text-[#ffffff] ps-3 pe-3 pt-3 pb-3 bg-[#1C2650]">
          خدمات غسيل السيارات {/* Text for the service */}
        </h1>
      </div>

      {/* Render Section2Home component */}
      <Section2Home />
    </div>
  );
};

export default HomePage; // Export the HomePage component for use in other files
