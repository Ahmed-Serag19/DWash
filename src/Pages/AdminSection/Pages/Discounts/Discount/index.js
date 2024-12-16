import React, { useState } from "react";
import CarLogo from "../../../../../Assets/CarLogo.png";
import DiscountB from "../../../../../Assets/discountB.png";
import Search from "../../../../../Assets/search.png";
import ServicesModal from "../../MoreServices/ServiceModal/index";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import HeaderAdminSection from "../../../Components/Header";
import { IoIosClose } from "react-icons/io";
 
const Discount = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Functions to open and close the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Sample data for displaying discount details
  const sections = [
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        orderNumber: " 238766",
        orderDate: " من 10/20/2023 الى 10/20/2023",
      },
    },
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        orderNumber: "238766",
        orderDate: "من 10/20/2023 الى 10/20/202",
      },
    },
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        orderNumber: "238766",
        orderDate: "من 10/20/2023 الى 10/20/2023",
      },
    },
  ];

  return (
    <div>
      <HeaderAdminSection /> {/* Header section */}
      <div className="container h-screen mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Add Button and Title */}
        <div className="flex justify-between">
          <div className="p-8">
            <button
              onClick={openModal}
              className="px-8 py-2 text-white rounded text-sm sm:text-sm bg-blue-950"
            >
              اضافة
            </button>
          </div>
          <h4 className="text-3xl text-blue-900 flex justify-end items-end mb-8 font-bold">
            اضافة خصم
          </h4>
        </div>

        {/* Search bar */}
        <div className="mb-8 container mx-auto w-11/12 sm:w-3/5">
          <div className="flex justify-end relative">
            <input
              type="email"
              id="email"
              className="pe-12 ps-12 py-4 text-right bg-white rounded-md border border-[#66666666]"
              placeholder="البريد الإلكتروني"
              style={{ height: "40px", width: "300px" }}
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <img src={Search} alt="Search" />
            </span>
          </div>
        </div>

        {/* Render each section from the data */}
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
          >
            {/* Delete Button */}
            <div className="w-full sm:w-auto space-y-3 sm:space-y-4">
              {section.buttons.map((button, buttonIndex) => (
                <button
                  key={buttonIndex}
                  className={`bg-red-600 text-white text-sm sm:text-sm py-1 sm:py-2 ${button.padding} rounded shadow-md`}
                >
                  {button.text}
                </button>
              ))}
            </div>

            {/* Discount details */}
            <div className="flex justify-center items-center mt-4 sm:mt-0">
              <div className="text-end mr-4">
                <p className="text-gray-700 text-lg">
                  رقم الخصم : {section.orderDetails.orderNumber}
                </p>
                <p className="text-gray-700 text-lg">
                  الفاعلية : {section.orderDetails.orderDate}
                </p>
              </div>
              <div className="ml-4">
                <img
                  className="bg-blue-950 p-2 rounded-full"
                  src={DiscountB}
                  width={60}
                  alt="Discount Icon"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Pagination controls */}
        <div className="flex justify-center gap-4 py-4 sm:gap-8 sm:py-8">
          <p className="text-sm sm:text-base">التالي</p>
          <p className="rounded-3xl bg-blue-950 px-3 py-1 sm:px-4 sm:py-2 text-white">
            1
          </p>
          <p className="text-sm sm:text-base">السابق</p>
        </div>
      </div>
      {/* Modal for adding a new discount */}
      <ServicesModal isOpen={isModalOpen} closeModal={closeModal}>
        <div className="space-y-4 mx-6 lg:px-20 sm:px-2">
          <button
            onClick={closeModal}
            className="absolute top-10 text-gray-500 hover:text-gray-800"
          >
            <IoIosClose className="w-6 h-6" />
          </button>
          <div className="mt-10 text-end">
            {/* Form fields for adding discount details */}
            <p className="text-blue-900 text-md">رم الخصم</p>
            <input className="border-2 border-gray-400 rounded px-2 py-1 text-end w-full" />

            <p className="text-blue-900 text-md mb-4">نوع الخصم</p>
            <div className="relative">
              <input className="border-2 border-gray-400 rounded px-2 py-1 text-end w-full" />
              <button>
                <IoIosArrowDown className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-blue-950 w-5 h-5 rounded-full p-1" />
              </button>
            </div>

            <p className="text-blue-900 text-md mb-4">مقدار الخصم</p>
            <input className="border-2 border-gray-400 rounded px-2 py-1 text-end w-full" />

            <p className="text-blue-900 text-lg mb-4">التاريخ من</p>
            <input
              type="date"
              className="border-2 border-gray-400 rounded px-2 py-1 text-end w-full"
            />

            <p className="text-blue-900 text-md mb-4">التاريخ الى</p>
            <input
              type="date"
              className="border-2 border-gray-400 rounded px-2 py-1 text-end w-full"
            />

            {/* Add discount button */}
            <div className="flex justify-center items-center">
              <button className="bg-blue-950 text-white rounded-lg px-12 py-2 w-full">
                اضافة
              </button>
            </div>
          </div>
        </div>
      </ServicesModal>
    </div>
  );
};

export default Discount;
