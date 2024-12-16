import React, { useState } from "react";
import TimeLeft from "../../../../Assets/time-left.png";
import Search from "../../../../Assets/search.png";
import Modal from "../Modal/index";
import HeaderProviderSection from "../../Components/Header";
import { IoIosClose } from "react-icons/io";

const ProviderTimeSlot = () => {
  // Sample data for order sections
  const sectionsB = [
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        orderNumber: "238766",
        orderDate: "من 10/20/2023 الى 10/20/2023",
        orderTime: "20:00:00-20:50:00",
        orderStatus: "متاح",
      },
    },
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        orderNumber: "238766",
        orderDate: "من 10/20/2023 الى 10/20/2023",
        orderTime: "20:00:00-20:50:00",
        orderStatus: "متاح",
      },
    },
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        orderNumber: "238766",
        orderDate: "من 10/20/2023 الى 10/20/2023",
        orderTime: "20:00:00-20:50:00",
        orderStatus: "متاح",
      },
    },
  ];

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeaderProviderSection /> {/* Render the header section */}
      <div className="container h-screen container  mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Buttons to add new time slots */}
        <div className="flex justify-between">
          <div className="p-8">
            <button
              onClick={openModal} // Open modal on button click
              className="px-8 py-2 text-white rounded text-sm sm:text-sm bg-blue-950 rounded-lgborder border-gray-400"
            >
              اضافة
            </button>

            {/* Modal component for adding time slots */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <div className="flex flex-col justify-end items-center">
                <button
                  onClick={closeModal} // Close modal on click
                  className="absolute top-10 text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                  <IoIosClose className="w-6 h-6" />
                </button>
                <div className="mt-10 text-end">
                  <div>
                    <p className="text-blue-900 text-md mb-2 mt-2">
                      : الوقت من
                    </p>
                    <input
                      type="time" // Input for starting time
                      className="border-2 border-gray-400 rounded px-2 py-1 text-end w-full"
                    />

                    <p className="text-blue-900 text-md mb-2 mt-2">
                      : الوقت الى
                    </p>
                    <input
                      type="time" // Input for ending time
                      className="border-2 border-gray-400 rounded px-2 py-1 text-end w-full"
                    />

                    <p className="text-blue-900 text-lg mb-2 mt-2">التاريخ</p>
                    <input
                      type="date" // Input for date selection
                      className="border-2 border-gray-400 rounded px-2 py-1 text-end text-gray-500 font-bold w-full"
                    />

                    <div className="flex justify-center items-center">
                      <button className="bg-blue-950 text-white rounded-lg px-12 py-2 sm:px-14 text-lg sm:text-xl my-3 w-full">
                        اضافة {/* Button to submit the new time slot */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>

          {/* Title for the time slots section */}
          <h4 className="text-3xl text-blue-900 flex justify-end items-end mb-8 font-bold">
            الفواصل الزمنية
          </h4>
        </div>

        {/* Search bar for filtering time slots */}
        <div className="mb-8 container mx-auto w-11/12 sm:w-3/5">
          <div className="flex justify-end relative">
            <input
              type="email" // Input field for searching by email (you might want to change this to a text input for general searching)
              id="email"
              className="pe-12 ps-12 py-4 text-right bg-white rounded-md border border-[#66666666] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="البريد الإلكتروني"
              style={{ height: "40px", width: "300px" }}
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <img src={Search} alt="Search" /> {/* Search icon */}
            </span>
          </div>
        </div>

        <div>
          {/* Loop through the sections to display order details */}
          {sectionsB.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
            >
              <div className="w-full sm:w-auto space-y-3 sm:space-y-4">
                <div>
                  {/* Loop through buttons for actions (e.g., delete) */}
                  {section.buttons.map((button, buttonIndex) => (
                    <div key={buttonIndex}>
                      <button
                        className={`bg-red-600 text-white text-sm sm:text-sm py-1 sm:py-2 ${button.padding} rounded shadow-md border border-black`}
                      >
                        {button.text} {/* Button text (e.g., "حذف") */}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Display order details */}
              <div className="flex justify-center items-center mt-4 sm:mt-0">
                <div className="text-end ">
                  <p className="text-red-950 text-lg sm:text-lg py-1 sm:py-2 px-2 sm:px-4 rounded border-gray-200 font-bold">
                    {section.orderDetails.title}
                  </p>
                  <p className="text-gray-700 text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                    رقم الفاصل الزمني: {section.orderDetails.orderNumber}{" "}
                    {/* Order number */}
                  </p>
                  <p className="text-gray-700 text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                    التاريخ: {section.orderDetails.orderDate} {/* Order date */}
                  </p>
                  <p className="text-gray-700 text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                    الوقت: {section.orderDetails.orderTime} {/* Order time */}
                  </p>
                  <p className="text-gray-700 text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                    الحالة: {section.orderDetails.orderStatus}{" "}
                    {/* Order status */}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0">
                  <img
                    className="bg-blue-950 p-4 rounded-full"
                    src={TimeLeft}
                    width={80}
                    alt="No Preview" // Placeholder for time left indicator
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center gap-8 py-8">
          <p>التالي</p>
          <p className="rounded-3xl bg-blue-950 px-4 py-2 text-white">1</p>
          <p>السابق</p>
        </div>
      </div>
    </div>
  );
};

export default ProviderTimeSlot; // Exporting the component for use in other parts of the application
