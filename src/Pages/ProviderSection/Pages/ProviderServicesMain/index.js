import React from "react"; // Import React library
import HeaderProviderSection from "../../Components/Header"; // Import custom header component
import CarLogo from "../../../../Assets/CarLogo.png"; // Import car logo image
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom for navigation

const ProviderServicesMain = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  return (
    <div>
      <HeaderProviderSection /> {/* Render header section */}
      <div className="h-screen flex justify-center items-center ">
        {/* Main container that fills the screen height and centers its content */}
        <div className="px-4 sm:px-6 w-full max-w-lg ">
          {/* Container for the service options with a max width for larger screens */}
          <div className="border-2 border-gray-400 rounded-lg text-center px-4 sm:px-8 py-8">
            {/* Box for service options with border and padding */}
            <div className="flex justify-center items-center mb-6 mt-6">
              <img className="w-24 h-8" src={CarLogo} alt="No Preview" />{" "}
              {/* Car logo image */}
            </div>

            <p className="text-xl sm:text-2xl text-blue-950 font-bold mb-4">
              الخدمات {/* Title for services section */}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Button container that adjusts layout for mobile and desktop */}
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md sm:px-6 sm:py-2 w-full sm:w-auto transition duration-300 hover:bg-gray-500">
                إيقاف {/* Stop button */}
              </button>
              <button
                onClick={() => navigate("/provider-services-list")} // Navigate to provider services list on click
                className="bg-blue-950 text-white px-4 py-2 rounded-md sm:px-6 sm:py-2 w-full sm:w-auto transition duration-300 hover:bg-blue-800"
              >
                ادارة {/* Manage button */}
              </button>
              <button
                onClick={() => navigate("/provider-add-services")} // Navigate to add services page on click
                className="bg-blue-950 text-white px-4 py-2 rounded-md sm:px-6 sm:py-2 w-full sm:w-auto transition duration-300 hover:bg-blue-800"
              >
                اضافة {/* Add button */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderServicesMain; // Export the ProviderServicesMain component
