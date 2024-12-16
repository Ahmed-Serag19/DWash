import React, { useState } from "react";
import Image1 from "../../../../Assets/GroupB.png"; // Logo image
import CarImg from "../../../../Assets/Mask group.png"; // Car image for branding
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io"; // Icons for dropdown and logout
import { BiSolidCategory, BiSolidLock } from "react-icons/bi"; // Icons for category and lock
import { GiBanknote } from "react-icons/gi"; // Icon for banknote
import { CiUser } from "react-icons/ci"; // Icon for user profile
import { LiaClipboardListSolid } from "react-icons/lia"; // Icon for orders
import { useLocation, useNavigate } from "react-router-dom"; // Hooks for navigation and location
import ProfileLogo from "../../../../Assets/Profile.webp"; // Profile image

const MainHeader = ({ setdata }) => {
  // State to manage dropdown visibility for user actions
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [ShowName, setShowName] = useState("االملف الشخصي"); // Default name displayed in dropdown

  const navigate = useNavigate(); // Hook to programmatically navigate
  const pathname = useLocation().pathname; // Get current pathname for conditional navigation

  // Function to toggle the main dropdown for user profile actions
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Function to toggle the mobile menu dropdown
  const toggleDropdownB = () => setIsOpenB(!isOpenB);

  return (
    <div className="bg-[#1C2650] pt-4 pb-4 px-4 ">
      <div className="flex justify-between items-center">
        {/* Logo and Profile Section */}
        <div className="flex items-center">
          <div className="me-3">
            <img className="my-2" src={Image1} alt="icon" />
          </div>

          {/* Profile dropdown button */}
          <div
            className="bg-[#f5f5f7] flex justify-center items-center space-x-2 px-3 py-1 rounded-lg relative"
            onClick={toggleDropdown}
            style={{ borderColor: isOpen ? "#66666666" : "transparent" }} // Change border color on hover
          >
            <img
              className="rounded-full w-8 h-8"
              src={ProfileLogo}
              alt="No Preview"
            />
            <p className="text-blue-950 text-sm">تسجيل الدخول</p>
            <button className="flex items-center h-6 w-6">
              <IoIosArrowDown className="h-4 w-4" />
            </button>

            {/* Dropdown menu for user options */}
            {isOpen && (
              <div
                className="absolute top-full mt-1 w-full bg-white border border-gray-200 text-gray-500 rounded-md shadow-lg text-end "
                style={{ borderColor: "#66666666" }} // Dropdown border color
              >
                <ul className="py-1 text-center">
                  <li
                    onClick={() => {
                      // Navigate to profile or main request based on the current path
                      pathname === "/main-request"
                        ? setdata(1) // Set data when in main-request
                        : navigate("/main-request");
                      toggleDropdown();
                      setShowName("االملف الشخصي"); // Show profile name
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-center items-center"
                  >
                    <CiUser className="ml-3 w-4 h-4" />
                    االملف الشخصي
                  </li>
                  <li
                    onClick={() => {
                      // Navigate to orders or main request based on the current path
                      pathname === "/main-request"
                        ? setdata(0)
                        : navigate("/main-request");
                      toggleDropdown();
                      setShowName("طلباتي"); // Show orders name
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-center items-center"
                  >
                    <LiaClipboardListSolid className="ml-3 w-4 h-4" />
                    طلباتي
                  </li>
                  <hr className="border-gray-300" />
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex justify-center items-center">
                    <IoIosLogOut className="ml-3 w-4 h-4" />
                    تسجيل الخروج
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-8">
          <p
            onClick={() => navigate("/main-home")}
            className="text-white text-lg cursor-pointer flex justify-center items-center space-x-2"
          >
            تواصل معنا
          </p>
          <p
            onClick={() => navigate("/main-service-providers")}
            className="text-white text-lg cursor-pointer flex justify-center items-center space-x-2"
          >
            خدماتنا
          </p>
          <p
            onClick={() => navigate("/main-home")}
            className="text-white text-lg cursor-pointer flex justify-center items-center space-x-2"
          >
            الرئيسية
          </p>
        </div>

        {/* Mobile Menu - Hamburger Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleDropdownB}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpenB ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} // Conditional rendering for hamburger icon
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpenB && (
          <div className="sm:hidden absolute top-[90px] left-20 right-20 bg-white shadow-lg rounded-lg py-4">
            <div
              onClick={() => navigate("/main-home")}
              className="flex justify-end items-center"
            >
              <button className="text-gray-500 text-sm px-4 py-2 flex items-center">
                <BiSolidCategory />
                <p>تواصل معنا</p>
              </button>
            </div>
            <div
              onClick={() => navigate("/main-service-providers")}
              className="flex justify-end items-center"
            >
              <button className="text-gray-500 text-sm px-4 py-2 flex items-center">
                <BiSolidLock />
                <p>خدماتنا</p>
              </button>
            </div>
            <div
              onClick={() => navigate("/main-home")}
              className="flex justify-end items-center"
            >
              <button className="text-gray-500 text-sm px-4 py-2 flex items-center">
                <GiBanknote className="text-xl" />
                <p>الرئيسية</p>
              </button>
            </div>
          </div>
        )}

        {/* Main Car Image Logo */}
        <div
          onClick={() => navigate("/main-home")}
          className="lg:px-16 sm:px-3 cursor-pointer"
        >
          <img src={CarImg} className="w-24 sm:w-28" alt="No Preview" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
