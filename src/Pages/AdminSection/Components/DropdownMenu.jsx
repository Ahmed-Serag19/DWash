import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import ProfileLogo from "../../../Assets/Profile.webp";

const DropdownMenu = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Refs for dropdown and button to detect clicks outside
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    // Adding event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={buttonRef} // Attach the ref to the button that triggers dropdown
        className="bg-[#f5f5f7] flex justify-center items-center space-x-2 px-3 py-1 rounded-lg cursor-pointer"
        onClick={toggleDropdown}
      >
        <img className="rounded-full w-8 h-8" src={ProfileLogo} alt="Profile" />
        <p className="text-blue-950 text-sm">مسؤل</p>
        <button className="flex items-center h-6 w-6">
          <IoIosArrowDown className="h-4 w-4" />
        </button>
      </div>

      {/* Dropdown menu with animation */}
      {isOpen && (
        <div
          ref={dropdownRef} // Attach ref to dropdown menu for click detection
          className={`absolute top-full mt-1 w-full bg-white border border-gray-200 text-gray-500 rounded-md shadow-lg text-end transition-all duration-200 ease-out transform ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <ul className="py-1 text-sm">
            <li
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex justify-end items-center"
              onClick={onLogout}
            >
              تسجيل الخروج
              <IoIosLogOut className="ml-3 w-4 h-4" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
