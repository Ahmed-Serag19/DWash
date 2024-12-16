import React, { useState } from "react";
import CarLogo from "../../../../../Assets/CarLogo.png";
import Search from "../../../../../Assets/search.png";
import ServicesModal from "../../MoreServices/ServiceModal";
import LogoName from "../../../../../Assets/LogoName.png";
import { useNavigate } from "react-router-dom";// Importing navigation hook
import HeaderAdminSection from "../../../Components/Header";// Importing header component
import { IoIosClose } from "react-icons/io";

// Main functional component for ServiceProviderRequestAdmin

const ServiceProviderRequestAdmin = () => {
  const [data, setdata] = useState(0); // State to manage active/inactive data toggle
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Card Data A (for active service providers)

  const sections = [
    {
      buttons: [{ text: "عرض التفاصيل", bgColor: "#752B3F", padding: "px-8" }],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    {
      buttons: [{ text: "عرض التفاصيل", bgColor: "#752B3F", padding: "px-8" }],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    {
      buttons: [{ text: "عرض التفاصيل", bgColor: "#752B3F", padding: "px-8" }],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
  ];
  // Card Data B (for inactive service providers)

  const sectionsB = [
    {
      buttons: [
        { text: "عرض التفاصيل", bgColor: "#752B3F", padding: "px-12" },
        { text: "قبول", bgColor: "#00A177", padding: "px-16" },
        { text: "رفض", bgColor: "#D90000", padding: "px-16" },
      ],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    {
      buttons: [
        { text: "عرض التفاصيل", bgColor: "#752B3F", padding: "px-12" },
        { text: "قبول", bgColor: "#00A177", padding: "px-16" },
        { text: "رفض", bgColor: "#D90000", padding: "px-16" },
      ],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    {
      buttons: [
        { text: "عرض التفاصيل", bgColor: "#752B3F", padding: "px-12" },
        { text: "قبول", bgColor: "#00A177", padding: "px-16" },
        { text: "رفض", bgColor: "#D90000", padding: "px-16" },
      ],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
  ];

  return (
    <>
      {/* Header Section */}
      <HeaderAdminSection />

      <div className="h-screen container mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Title Section */}
        <div className="flex justify-end items-end lg:text-3xl md:xl sm:md text-blue-900 mb-8 font-bold">
          <h4>قائمة طلبات مقدمي الخدمات تقديم الخدمات</h4>
        </div>

        {/* Toggle Buttons for Active/Inactive Status */}

        <div className="flex justify-center items-center">
          <button
            onClick={() => setdata(0)}
            className={`lg:px-20 md:px-16 sm:px-12 px-8 py-3 lg:text-sm md:text-xl sm:text-base text-sm ${
              data === 1
                ? "bg-transparent text-gray-400"
                : "bg-blue-950 text-white"
            } rounded-s-xl border border-gray-400`}
          >
            الطلبات السابقة
          </button>
          <button
            onClick={() => setdata(1)}
            className={`lg:px-20 md:px-16 sm:px-12 px-8 py-3 lg:text-sm md:text-xl sm:text-base text-sm ${
              data === 0
                ? "bg-transparent text-gray-400"
                : "bg-blue-950 text-white"
            } rounded-e-xl border border-gray-400`}
          >
            الطلبات القائمة
          </button>
        </div>

        <hr className=" border-gray-400 border-t-1 mt-14 mb-10" />

        {/* Search bar */}

        <div className="mb-8 container mx-auto w-11/12 sm:w-3/5 ">
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

        {/* Display Cards Based on Active/Inactive Toggle */}
        {data === 1 ? (
          <>
            <div>
              {/* Loop through sections */}
              {sectionsB.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
                >
                  <div>
                    <div className="flex flex-col space-y-4">
                      {/* Loop through buttons */}
                      {section.buttons.map((button, buttonIndex) => (
                        <button
                          style={{ backgroundColor: button.bgColor }}
                          className={`text-white text-lg py-2 ${button.padding} rounded shadow-md border border-black`}
                          onClick={() => {
                            if (buttonIndex === 0) {
                              openModal(true); // Open modal for the first button
                            }
                          }}
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="text-end  mb-4 sm:mb-0 flex-1">
                      <p className="text-red-950 text-lg sm:text-3xl py-2 px-4 rounded border-gray-200 font-bold">
                        {section.orderDetails.title}
                      </p>
                      <p className="text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                        رقم الطلب: {section.orderDetails.orderNumber}
                      </p>
                      <p className="text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                        تاريخ الطلب: {section.orderDetails.orderDate}
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-0">
                      <img src={CarLogo} width={150} alt="No Preview" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div>
              {/* Loop through sections */}
              {sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
                >
                  <div>
                    <div className="space-y-4">
                      {/* Loop through buttons */}
                      {section.buttons.map((button, buttonIndex) => (
                        <div
                          className="flex flex-col items-start"
                          key={buttonIndex}
                        >
                          <button
                            style={{ backgroundColor: button.bgColor }}
                            className={`text-white text-lg py-2 ${button.padding} rounded shadow-md border border-black`}
                            onClick={() => {
                              if (buttonIndex === 0) {
                                openModal(true); // Open modal for the first button
                              }
                            }}
                          >
                            {button.text}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="text-end  flex flex-col items-end">
                      <p className="text-red-950 text-lg sm:text-3xl py-2 px-4 rounded border-gray-200 font-bold">
                        {section.orderDetails.title}
                      </p>
                      <p className="text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                        رقم الطلب: {section.orderDetails.orderNumber}
                      </p>
                      <p className="text-lg sm:text-lg py-2 px-4 rounded border-gray-200">
                        تاريخ الطلب: {section.orderDetails.orderDate}
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-0">
                      <img src={CarLogo} width={150} alt="No Preview" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Pagination controls */}
        <div className="flex justify-center gap-8 py-8">
          <p>التالي</p>
          <p className="rounded-3xl bg-blue-950 px-4 py-2 text-white">1</p>
          <p>السابق</p>
        </div>

        {/* Servicemodal open when click on button */}
        <ServicesModal isOpen={isModalOpen} closeModal={closeModal}>
          <div className="space-y-4 mx-6">
            <button
              onClick={closeModal} // Close modal on click
              className="absolute top-5 text-gray-500 hover:text-gray-800 focus:outline-none "
            >
              <IoIosClose className="w-6 h-6" />
            </button>
            <div className="text-end text-lg">
              <p className="text-end">
                رقم الطلب:{" "}
                <span className="text-gray-400 text-lg">100087976545</span>
              </p>
            </div>
            <div className="text-end text-lg">
              <p className="text-end">
                تاريخ الطلب:{" "}
                <span className="text-gray-400 text-lg">10/20/2023</span>
              </p>
            </div>
            <div className="text-end text-lg">
              <p className="text-end">
                مقدم الطلب:{" "}
                <span className="text-gray-400 text-lg">مغسلة رغوة</span>
              </p>
            </div>
            <div className="text-end text-lg">
              <p className="text-end">
                نوع الطلب: <span className="text-gray-400 text-lg">جديد</span>
              </p>
            </div>
            <div className="text-end text-lg">
              <p className="text-end">
                رقم المعرف:{" "}
                <span className="text-gray-400 text-lg">١٠٩٢٨٧٤٥٧٣٧٦</span>
              </p>
            </div>
          </div>

          <hr className="-mx-6 border-1 border-black my-5" />

          <div className="text-end text-xl mb-5">
            <p className="text-end">: الشعار</p>
          </div>

          <div className="flex justify-center items-center">
            <img src={LogoName} className="w-96 rounded-lg" alt="No Preview" />
          </div>

          <hr className="-px-6 border-1 border-black my-5" />

          <div className="text-end text-xl mb-5">
            <p className="text-end">: صورة خلفية المتجر</p>
          </div>

          <div className="flex justify-center items-center">
            <img src={LogoName} className="w-96 rounded-lg" alt="No Preview" />
          </div>

          <hr className=" border-1 border-black my-5" />

          <div className="flex justify-end items-center text-xl mb-5">
            <p>: تفاصيل العلامة التجارية</p>
          </div>

          <div className="flex justify-center items center my-8">
            <textarea className="w-full border border-black rounded-lg p-6 h-80"></textarea>
          </div>

          <div className="text-center">
            <button className="bg-blue-950 text-white text-lg px-16 py-2 rounded-lg">
              اغلاق
            </button>
          </div>
        </ServicesModal>
      </div>
    </>
  );
};

export default ServiceProviderRequestAdmin;
