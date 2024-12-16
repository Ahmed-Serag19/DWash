import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoName from "../../../../Assets/LogoName.png";
import CarLogo from "../../../../Assets/CarLogo.png";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import { BiSolidCategory, BiSolidLock } from "react-icons/bi";
import { GiBanknote } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RiRotateLockFill } from "react-icons/ri";

const HeaderProviderSection = () => {
  // State to manage dropdown visibility for the profile options
  const [isOpen, setIsOpen] = useState(false);
  // State to manage hamburger menu visibility on mobile
  const [isOpenB, setIsOpenB] = useState(false);
  const navigate = useNavigate();

  // Function to toggle the dropdown for profile options
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the mobile menu
  const toggleDropdownB = () => {
    setIsOpenB(!isOpenB);
  };

  return (
    <div>
      <div className="container mx-auto my-2 flex justify-between items-center px-5 md:px-16 lg:px-14">
        {/* Profile dropdown menu */}
        <div
          className="bg-[#f5f5f7] flex justify-center items-center space-x-2 px-3 py-1 rounded-lg relative"
          onClick={toggleDropdown}
          style={{ borderColor: isOpen ? "#66666666" : "transparent" }} // Change border color on open
        >
          <img
            className="rounded-full w-8 h-8"
            src={LogoName}
            alt="No Preview"
          />
          <p className="text-blue-950 text-sm">رغوة</p>
          <button className="flex items-center h-6 w-6">
            <IoIosArrowDown className="h-4 w-4" />
          </button>

          {isOpen && (
            <div
              className="absolute top-full mt-1  bg-white border border-gray-200 text-gray-500 rounded-md shadow-lg text-end  md:w-[200px]"
              style={{ borderColor: "#66666666" }} // Dropdown border color
            >
              <ul className="py-1">
                {/* Profile option */}
                <li
                  onClick={() => navigate("/provider-profile")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg flex justify-between whitespace-nowrap"
                >
                  الملف الشخصي
                  <CiUser className="ml-4 w-6 h-6" />
                </li>
                {/* Orders option */}
                <li
                  onClick={() => navigate("/provider-order-detail")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg flex justify-between whitespace-nowrap"
                >
                  الطلبات
                  <LiaClipboardListSolid className="ml-4 w-6 h-6" />
                </li>
                <hr className="border text-gray-500" />
                {/* Change Password option */}
                <li
                  onClick={() => navigate("/provider-update-password")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg flex justify-between whitespace-nowrap"
                >
                  تغيير كلمة المرور
                  <RiRotateLockFill className="ml-4 w-6 h-6" />
                </li>
                <hr className="border text-gray-500" />
                {/* Logout option */}
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg flex justify-between whitespace-nowrap">
                  تسجيل الخروج
                  <IoIosLogOut className="ml-4 w-6 h-6" />
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-8">
          {/* Services button */}
          <button
            onClick={() => navigate("/provider-services")}
            className="flex justify-center items-center space-x-2 text-gray-500 text-lg sm:text-lg"
          >
            <BiSolidCategory />
            <p>الخدمات</p>
          </button>
          {/* Orders button */}
          <button
            onClick={() => navigate("/provider-order-detail")}
            className="flex justify-center items-center space-x-2 text-gray-500 text-lg sm:text-lg"
          >
            <BiSolidLock />
            <p>الطلبات</p>
          </button>
          {/* Wallet button */}
          <button
            onClick={() => navigate("/provider-wallet")}
            className="flex justify-center items-center space-x-2 text-gray-500 text-lg sm:text-lg"
          >
            <GiBanknote />
            <p>المحفظة</p>
          </button>
        </div>

        {/* Mobile Menu - Hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleDropdownB}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpenB ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} // Change icon based on open state
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpenB && (
          <div className="sm:hidden absolute top-[90px] left-20 right-20 bg-white shadow-lg rounded-lg py-4">
            {/* Services option */}
            <div
              onClick={() => navigate("/provider-services")}
              className="flex justify-end items-center "
            >
              <button className="text-end text-gray-500 text-lg px-4 py-2 flex items-center space-x-2">
                <BiSolidCategory />
                <p>الخدمات</p>
              </button>
            </div>

            {/* Orders option */}
            <div
              onClick={() => navigate("/provider-order-detail")}
              className="flex justify-end items-center "
            >
              <button className=" text-gray-500 text-lg px-4 py-2  flex items-center space-x-2">
                <BiSolidLock />
                <p>الطلبات</p>
              </button>
            </div>
            {/* Wallet option */}
            <div
              onClick={() => navigate("/provider-wallet")}
              className="flex justify-end items-center "
            >
              <button className="text-gray-500 text-lg px-4 py-2 flex items-center space-x-2">
                <GiBanknote className="text-2xl sm:text-3xl" />
                <p>المحفظة</p>
              </button>
            </div>
          </div>
        )}

        {/* Logo section */}
        <div
          onClick={() => navigate("/provider-home")}
          className="cursor-pointer"
        >
          <img src={CarLogo} className="w-24 sm:w-28" alt="No Preview" />
          <p className="text-lg text-center mt-2" style={{ color: "#1C2650" }}>
            D.Wash
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-1 border-gray-300" />
    </div>
  );
};

export default HeaderProviderSection;
