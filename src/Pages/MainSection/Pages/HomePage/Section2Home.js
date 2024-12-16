import React from "react"; // Import React library
import CarImg from "../../../../Assets/mobile.png"; // Import the car image

const Section2Home = () => {
  return (
    <div>
      {/* Container for the car image */}
      <div className="mt-12 flex justify-center w-full object-cover ">
        <img src={CarImg} alt="car" /> {/* Render the car image */}
      </div>

      {/* A colored div below the car image for styling purposes */}
      <div className="bg-[#1C2650] p-1 mb-10"></div>
    </div>
  );
};

export default Section2Home; // Export the Section2Home component for use in other files
