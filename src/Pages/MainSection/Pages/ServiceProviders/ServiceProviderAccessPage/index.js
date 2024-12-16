import React, { useState } from "react";
import CarImage from "../../../../../Assets/AccessCarImage.png";
import Search from "../../../../../Assets/search.png";
import MainHeader from "../../../Components/Header";
import { IoStarSharp } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Sort from "../../../../../Assets/sort.png";
import AccessPageSlider from "../AccessPageSlider";
import { useNavigate } from "react-router-dom";

const ServiceProviderAccessPage = () => {
  // State to manage the dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <MainHeader />

      <div className="h-screen">
        <div>
          <img
            src={CarImage}
            className="rounded-b-lg w-full h-auto object-cover lg:h-[400px] sm:h-[300px]"
            alt="No Preview"
          />
        </div>
        <div className="h-screen container mx-auto w-13/15 sm:w-4/5 px-5 py-4">
          <div className="flex flex-col justify-center items-center mt-8 ">
            {/* Button Group for Service Options */}
            <div className="border border-black rounded-full flex justify-center items-center px-4 sm:px-6 lg:px-16 py-2 space-x-2 sm:space-x-4 lg:space-x-20">
              {["باقات", "تلميع", "غسيل"].map((item, index) => (
                <button
                  key={index}
                  className="bg-blue-950 text-white text-xl px-4 py-2 rounded-full"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}

          <div className="flex flex-col md:flex-row justify-between items-center relative mt-10">
            {/* Sort Icon */}
            <img src={Sort} className="w-8 h-8 mb-4 md:mb-0" />

            {/* Search Bar */}
            <div className="mb-8 w-full md:w-3/4 flex justify-end relative">
              <input
                type="email"
                id="email"
                style={{ height: "40px", width: "300px" }}
                className="pe-12 ps-12 py-4 text-right bg-white rounded-md border border-[#66666666] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="البريد الإلكتروني"
              />
              <span className="absolute inset-y-0 right-3 flex items-center">
                <img src={Search} alt="Search" />
              </span>
            </div>
          </div>
          {/* Service Card */}
          <div className="h-screen ">
            <div className="w-full border rounded-lg">
              <div className="flex justify-between px-4 sm:px-8 py-4 text-end">
                <div className="space-y-2">
                  <p className="text-2xl">150.00 ر.س</p>
                  <button
                    onClick={toggleDropdown}
                    className="border px-4 sm:px-10 py-2"
                  >
                    تخصيص
                  </button>

                  {/* Drop Down */}
                  {isOpen && (
                    <div className="absolute mt-8 w-56 bg-white border-2 border-gray-200 text-blue-950 rounded-md shadow-lg z-10 text-end">
                      <ul className="py-1">
                        <li className="px-4 py-4 hover:bg-gray-100 cursor-pointer text-lg flex justify-end">
                          غسيل داخلي فقط
                          <input className="ms-4" type="checkbox" />
                        </li>
                        <li className="px-4 py-4 hover:bg-gray-100 cursor-pointer text-lg flex justify-end">
                          غسيل داخلي وخارجي
                          <input className="ms-4" type="checkbox" />
                        </li>
                        <hr className="border text-gray-500" />
                        <li className="px-4 py-4 hover:bg-gray-100 cursor-pointer text-lg flex justify-end items-center">
                          حفظ التغيرات
                          <FaArrowRightFromBracket className="ms-4" />
                        </li>
                      </ul>
                    </div>
                  )}

                  <div className="flex space-x-1 sm:space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <IoStarSharp
                        key={i}
                        className="w-4 h-4 text-orange-600"
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="space-y-2 text-end cursor-pointer"
                  onClick={() => navigate("/main-shopping-cart")}
                >
                  <p className="font-bold text-xl">غسيل عادي</p>
                  <p className="text-gray-500">خدمات الغسيل العادي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center pt-16 pb-16">
          <div className=" flex justify-between items-center space-x-6 ">
            <p className="text-gray-400">التالي</p>
            <button className="bg-blue-950 rounded-full px-4 py-2 text-white text-lg">
              1
            </button>
            <p className="text-gray-400">السابق</p>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />

        <div className="h-96">
          <AccessPageSlider />
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderAccessPage;
