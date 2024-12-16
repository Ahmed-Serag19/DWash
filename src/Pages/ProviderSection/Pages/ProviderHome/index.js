import React from "react"; // Import React library
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import HeaderProviderSection from "../../Components/Header"; // Import custom header component
import { GiWallet, GiBackwardTime } from "react-icons/gi"; // Import wallet and time icons
import { TfiReceipt } from "react-icons/tfi"; // Import receipt icon
import { FaUser, FaListAlt } from "react-icons/fa"; // Import user and list icons

const ProviderHome = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="h-screen flex flex-col">
      {" "}
      {/* Main container with full height */}
      <HeaderProviderSection /> {/* Render header section */}
      <div className="container mx-auto my-10 px-4 sm:px-2 md:px-10 lg:px-20 lg:px-[100px] flex-grow flex justify-center items-center">
        {/* Container for the grid layout of cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Each card represents a different functionality */}
          <div
            onClick={() => navigate("/provider-wallet")} // Navigate to wallet page on click
            className="cursor-pointer border border-black px-6 sm:px-8 lg:px-12 py-6 rounded-lg flex flex-col justify-center items-center text-center"
          >
            <GiWallet className="w-24 h-20 text-blue-950" /> {/* Wallet icon */}
            <p className="text-xl sm:text-2xl text-blue-950 mt-2">
              المحفظة
            </p>{" "}
            {/* Wallet text */}
          </div>

          <div
            onClick={() => navigate("/provider-time-slot")} // Navigate to time slot page on click
            className="cursor-pointer border border-black px-6 sm:px-8 lg:px-12 py-6 rounded-lg flex flex-col justify-center items-center text-center"
          >
            <GiBackwardTime className="w-24 h-20 text-blue-950" />{" "}
            {/* Time slot icon */}
            <p className="text-xl sm:text-2xl text-blue-950 mt-2">
              الفواصل الزمنية
            </p>{" "}
            {/* Time slot text */}
          </div>

          <div
            onClick={() => navigate("/provider-order-detail")} // Navigate to order details page on click
            className="cursor-pointer border border-black px-6 sm:px-8 lg:px-12 py-6 rounded-lg flex flex-col justify-center items-center text-center"
          >
            <TfiReceipt className="w-24 h-20 text-blue-950" />{" "}
            {/* Receipt icon */}
            <p className="text-xl sm:text-2xl text-blue-950 mt-2">
              قائمة الطلبات
            </p>{" "}
            {/* Order list text */}
          </div>

          <div
            onClick={() => navigate("/provider-profile")} // Navigate to profile page on click
            className="cursor-pointer border border-black px-6 sm:px-8 lg:px-12 py-6 rounded-lg flex flex-col justify-center items-center text-center"
          >
            <FaUser className="w-24 h-20 text-blue-950" /> {/* User icon */}
            <p className="text-xl sm:text-2xl text-blue-950 mt-2">
              الملف الشخصي
            </p>{" "}
            {/* Profile text */}
          </div>

          <div
            onClick={() => navigate("/provider-services")} // Navigate to services page on click
            className="cursor-pointer border border-black px-6 sm:px-8 lg:px-12 py-6 rounded-lg flex flex-col justify-center items-center text-center"
          >
            <FaListAlt className="w-24 h-20 text-blue-950" />{" "}
            {/* Services icon */}
            <p className="text-xl sm:text-2xl text-blue-950 mt-2">
              الخدمات
            </p>{" "}
            {/* Services text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderHome; // Export the ProviderHome component
