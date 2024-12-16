import React, { useState } from "react";
import Search from "../../../../Assets/search.png";
import LogoName from "../../../../Assets/LogoName.png";
import Modal from "../Modal/index";
import HeaderProviderSection from "../../Components/Header";
import { IoMdImages, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ListOfServices = () => {
  const sectionsB = [
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        mainTitle: "غسيل عادي",
        orderNumber: " 238766",
        orderDate: " من 10/20/2023 الى 10/20/2023",
        orderTime: "20:00:00-20:50:00",
        orderStatus: "متاح",
      },
    },
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        mainTitle: "غسيل عادي",
        orderNumber: "238766",
        orderDate: "من 10/20/2023 الى 10/20/202",
        orderTime: "20:00:00-20:50:00",
        orderStatus: "متاح",
      },
    },
    {
      buttons: [{ text: "حذف", padding: "px-12" }],
      orderDetails: {
        mainTitle: "غسيل عادي",
        orderNumber: "238766",
        orderDate: "من 10/20/2023 الى 10/20/2023",
        orderTime: "20:00:00-20:50:00",
        orderStatus: "متاح",
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [
    LogoName,
    "https://via.placeholder.com/800x400.png?text=Image+2",
    "https://via.placeholder.com/800x400.png?text=Image+3",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <HeaderProviderSection />

      <div className="container h-screen container  mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Modal component */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="space-y-4 mx-6 lg:px-20 sm:px-2">
            <div className="text-end text-xl text-blue-950">
              <p>
                رقم الخدمة: <span className="text-gray-300">100087976545</span>
              </p>
            </div>
            <hr />

            <div className="relative w-full mx-auto my-12 rounded-lg">
              {/* Image container */}
              <div className=" flex items-center justify-center">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="w-[250px] h-[250px] transition duration-500 ease-in-out"
                />
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 transform -translate-y-1/2 left-4 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                >
                  <IoIosArrowBack size={30} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 transform -translate-y-1/2 right-4 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                >
                  <IoIosArrowForward size={30} />
                </button>
                {/* Delete Button */}
                <div className="absolute bottom-4 w-full flex justify-start">
                  <button className="px-2 py-2 rounded-full bg-red-600 text-white">
                    <RiDeleteBin6Fill />
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-blue-950 text-white text-2xl rounded-lg py-2 px-8">
                  اغلاق
                </button>
              </div>
            </div>
          </div>
        </Modal>

        {/* Heading and Search Bar */}
        <div className="text-3xl text-blue-900 flex justify-end items-end mb-8 font-bold">
          <h4 className="text-4xl text-blue-950">الفواصل الزمنية</h4>
        </div>
        {/* Search bar */}
        <div className="mb-8 container mx-auto w-11/12 sm:w-3/5  ">
          <div className="flex justify-end relative">
            <input
              type="email"
              id="email"
              className="pe-12 ps-12 py-4 text-right bg-white rounded-md border border-[#66666666] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="البريد الإلكتروني"
              style={{ height: "40px", width: "300px" }}
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <img src={Search} alt="Search" />
            </span>
          </div>
        </div>

        {/* Loop through sections */}
        {sectionsB.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
          >
            <div className="space-y-4">
              {/* Loop through buttons */}
              {section.buttons.map((button, buttonIndex) => (
                <div className="flex flex-col mb-4" key={buttonIndex}>
                  <div className="flex">
                    <IoMdImages
                      onClick={openModal}
                      className="w-16 h-16 me-4 text-rose-800 cursor-pointer"
                    />
                    <button className="bg-blue-950 text-white rounded-lg px-4 py-2 text-lg ">
                      طلب تعديل
                    </button>
                  </div>
                  <button
                    className={`bg-red-600 text-white text-lg py-2 ${button.padding} mt-4 rounded shadow-md border border-black`}
                  >
                    {button.text}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col text-end mt-4 sm:mt-0">
              <p className="text-blue-950 text-lg font-bold py-2 px-4 rounded border-gray-200">
                {section.orderDetails.mainTitle}
              </p>
              <div>
                <p className="text-lg py-2 px-4 rounded border-gray-200">
                  رقم الفاصل الزمني : {section.orderDetails.orderNumber}
                </p>
                <p className="text-lg py-2 px-4 rounded border-gray-200">
                  التاريخ : {section.orderDetails.orderDate}
                </p>
                <p className="text-lg py-2 px-4 rounded border-gray-200">
                  الوقت : {section.orderDetails.orderTime}
                </p>
                <p className="text-lg py-2 px-4 rounded border-gray-200">
                  الحالة : {section.orderDetails.orderStatus}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center gap-4 py-8">
          <p>التالي</p>
          <p className="rounded-3xl bg-blue-950 px-4 py-2 text-white">1</p>
          <p>السابق</p>
        </div>
      </div>
    </div>
  );
};

export default ListOfServices;
