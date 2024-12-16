import React, { useState } from "react";
import CarLogo from "../../../../../Assets/CarLogo.png"; // Car logo asset
import Search from "../../../../../Assets/search.png"; // Search icon asset
import { useNavigate } from "react-router-dom";
import HeaderAdminSection from "../../../Components/Header"; // Header component

// Main functional component
const ServicesRequestAdmin = () => {
  const [data, setdata] = useState(0);
  const navigate = useNavigate();

  // Define sections data - each section contains button configurations and order details

  const sectionss = [
    {
      buttons: [
        {
          text: "عرض التفاصيل",
          bgColor: "#752B3F",
          padding: "px-12",
          path: "/admin-services-review",
        },
      ],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    {
      buttons: [
        {
          text: "عرض التفاصيل",
          bgColor: "#752B3F",
          padding: "px-12",
          path: "/admin-services-review",
        },
      ],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    {
      buttons: [
        {
          text: "عرض التفاصيل",
          bgColor: "#752B3F",
          padding: "px-12",
          path: "/admin-services-review",
        },
      ],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    // Add more section data here if needed for multiple sections
  ];
  const sectionssB = [
    {
      buttons: [
        {
          text: "عرض التفاصيل",
          bgColor: "#752B3F",
          padding: "px-12",
          path: "/admin-services-review",
        },
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
        {
          text: "عرض التفاصيل",
          bgColor: "#752B3F",
          padding: "px-12",
          path: "/admin-services-review",
        },
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
        {
          text: "عرض التفاصيل",
          bgColor: "#752B3F",
          padding: "px-12",
          path: "/admin-services-review",
        },
        { text: "قبول", bgColor: "#00A177", padding: "px-16" },
        { text: "رفض", bgColor: "#D90000", padding: "px-16" },
      ],
      orderDetails: {
        title: "مغسلة رغوة",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
      },
    },
    // Add more section data here if needed for multiple sections
  ];

  return (
    <>
      {/* Header section */}
      <HeaderAdminSection />
      <div className="h-screen container mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Title section */}
        <div className="text-3xl text-blue-900 mb-8 flex justify-end items-end font-bold">
          <h4>قائمة طلبات مقدمي الخدمات تقديم الخدمات</h4>
        </div>

        {/* Toggle buttons for request types */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => setdata(0)}
            className={`lg:px-22 md:px-16 sm:px-12 px-8 py-3 lg:text-sm md:text-xl sm:text-base text-sm ${
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

        <hr className="border-gray-400 border-t-1 mt-14 mb-10" />

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

        {/* Service Request Cards */}
        <div>
          {data === 1
            ? sectionssB.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
                >
                  <div className="flex flex-col space-y-4">
                    {section.buttons.map((button, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        style={{ backgroundColor: button.bgColor }}
                        className={`text-white text-lg py-2 ${button.padding} rounded shadow-md border border-black`}
                        onClick={() => {
                          if (buttonIndex === 0) {
                            navigate(button.path);
                          }
                        }}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center items-center flex-col lg:flex-row">
                    <div className="text-end">
                      <p className="text-red-950 text-lg py-2 px-4 rounded border-gray-200 font-bold">
                        {section.orderDetails.title}
                      </p>
                      <p className="text-lg py-2 px-4 rounded border-gray-200">
                        رقم الطلب: {section.orderDetails.orderNumber}
                      </p>
                      <p className="text-lg py-2 px-4 rounded border-gray-200">
                        تاريخ الطلب: {section.orderDetails.orderDate}
                      </p>
                    </div>
                    <div>
                      <img src={CarLogo} width={150} alt="No Preview" />
                    </div>
                  </div>
                </div>
              ))
            : sectionss.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
                >
                  <div className="flex flex-col space-y-4">
                    {section.buttons.map((button, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        style={{ backgroundColor: button.bgColor }}
                        className={`text-white text-lg py-2 ${button.padding} rounded shadow-md border border-black`}
                        onClick={() => {
                          if (buttonIndex === 0) {
                            navigate(button.path);
                          }
                        }}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-center items-center flex-col lg:flex-row">
                    <div className="text-end ">
                      <p className="text-red-950 text-lg py-2 px-4 rounded border-gray-200 font-bold">
                        {section.orderDetails.title}
                      </p>
                      <p className="text-lg py-2 px-4 rounded border-gray-200">
                        رقم الطلب: {section.orderDetails.orderNumber}
                      </p>
                      <p className="text-lg py-2 px-4 rounded border-gray-200">
                        تاريخ الطلب: {section.orderDetails.orderDate}
                      </p>
                    </div>
                    <div>
                      <img src={CarLogo} width={150} alt="No Preview" />
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
    </>
  );
};

export default ServicesRequestAdmin;
