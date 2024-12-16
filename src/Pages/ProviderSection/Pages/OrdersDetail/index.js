import React, { useState } from "react";
import Search from "../../../../Assets/search.png";
import Modal from "../Modal/index";
import HeaderProviderSection from "../../Components/Header";

const OrdersDetail = () => {
  const [data, setdata] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //   Loop Data

  const sections = [
    {
      buttons: [
        { text: "عرض التفاصيل", bgColor: "#002147", padding: "px-12" },
        
      ],
      orderDetails: {
        title: "غسيل عادي",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderDateVisit: "10/20/2023",
        orderTimeOfVisit: "4:30 Pm",
        orderName: "نورة فهد",
        OrderMobileNumber: "050656565",
        orderLocation: "الذهاب للموقع",
        orderTotal: "600.00 ر.س",
      },
    },
    {
      buttons: [
        { text: "عرض التفاصيل", bgColor: "#002147", padding: "px-12" },
        
      ],
      orderDetails: {
        title: "غسيل عادي",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderDateVisit: "10/20/2023",
        orderTimeOfVisit: "4:30 Pm",
        orderName: "نورة فهد",
        OrderMobileNumber: "050656565",
        orderLocation: "الذهاب للموقع",
        orderTotal: "600.00 ر.س",
      },
    },
    {
      buttons: [
        { text: "عرض التفاصيل", bgColor: "#002147", padding: "px-12" },
        
      ],
      orderDetails: {
        title: "غسيل عادي",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderDateVisit: "10/20/2023",
        orderTimeOfVisit: "4:30 Pm",
        orderName: "نورة فهد",
        OrderMobileNumber: "050656565",
        orderLocation: "الذهاب للموقع",
        orderTotal: "600.00 ر.س",
      },
    },
  ];

  const sectionsB = [
    {
      buttonsB: [
        { text: "عرض التفاصيل", bgColor: "#002147", padding: "px-12" },
        { text: "قبول", bgColor: "#00A177", padding: "px-16" },
        { text: "رفض", bgColor: "#D90000", padding: "px-16" },
      ],
      orderDetailsB: {
        title: "غسيل عادي",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderDateVisit: "10/20/2023",
        orderTimeOfVisit: "4:30 Pm",
        orderName: "نورة فهد",
        OrderMobileNumber: "050656565",
        orderLocation: "الذهاب للموقع",
        orderTotal: "600.00 ر.س",
      },
    },
    {
      buttonsB: [
        { text: "عرض التفاصيل", bgColor: "#002147", padding: "px-12" },
        { text: "قبول", bgColor: "#00A177", padding: "px-16" },
        { text: "رفض", bgColor: "#D90000", padding: "px-16" },
      ],
      orderDetailsB: {
        title: "غسيل عادي",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderDateVisit: "10/20/2023",
        orderTimeOfVisit: "4:30 Pm",
        orderName: "نورة فهد",
        OrderMobileNumber: "050656565",
        orderLocation: "الذهاب للموقع",
        orderTotal: "600.00 ر.س",
      },
    },
    {
      buttonsB: [
        { text: "عرض التفاصيل", bgColor: "#002147", padding: "px-12" },
        { text: "قبول", bgColor: "#00A177", padding: "px-16" },
        { text: "رفض", bgColor: "#D90000", padding: "px-16" },
      ],
      orderDetailsB: {
        title: "غسيل عادي",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderDateVisit: "10/20/2023",
        orderTimeOfVisit: "4:30 Pm",
        orderName: "نورة فهد",
        OrderMobileNumber: "050656565",
        orderLocation: "الذهاب للموقع",
        orderTotal: "600.00 ر.س",
      },
    },
  ];

  return (
    <>
      <HeaderProviderSection />

      <div className="h-screen container mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="h-[85vh] container mx-auto px-8">
            <div className="text-end text-lg text-blue-950 space-y-4">
              <p>
                رقم الخدمة: <span className="text-gray-500">100087976545</span>
              </p>
              <p>
                تاريخ الطلب: <span className="text-gray-500">10/20/2023</span>
              </p>
              <p>
                تاريخ الزيارة: <span className="text-gray-500">10/20/2023</span>
              </p>
              <p>
                وقت الزيارة: <span className="text-gray-500">4:30 </span>
              </p>
              <p>
                الأسم: <span className="text-gray-600">نورة فهد</span>
              </p>
              <p>
                رقم الجوال: <span className="text-gray-500">050656565</span>
              </p>
              <p>
                الموقع: <span className="text-gray-500">الذهاب للموقع</span>
              </p>
              <p>
                المجموع: <span className="text-gray-500">600.00 ر.س</span>
              </p>
              <hr className="-mx-96 border border-gray-400" />
              <p>
                نوع الخدمة: <span className="text-gray-500"> قص شعر</span>
              </p>
              <p>: تفاصيل الخدمة</p>

              <div>
                <textarea className="w-full border rounded-lg border-gray-500 h-80 mb-6 p-6 text-end" />
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-950 text-white text-2xl rounded-lg py-2 px-14 mb-8">
                اغلاق
              </button>
            </div>
          </div>
        </Modal>

        {/* Buttons */}

        <div className="flex justify-center items-center my-6  md:flex-row">
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

        {/* Display sections based on data state */}
        {data === 1 ? (
          <div>
            {/* Loop through sections for current orders */}
            {sectionsB.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
              >
                <div>
                  <div className="flex flex-col space-y-4">
                    {/* Loop through buttons */}
                    {section.buttonsB.map((button, buttonIndex) => (
                      <button
                        style={{ backgroundColor: button.bgColor }}
                        className={`text-white text-lg py-2 ${button.padding} rounded shadow-md border border-black`}
                        onClick={() => {
                          if (buttonIndex === 0) {
                            setIsModalOpen(true); // Open modal for the first button
                          }
                        }}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-start mt-4 lg:mt-0">
                  <div className="text-end">
                    <p className="text-blue-950 text-lg py-2 px-4 font-bold">
                      {section.orderDetailsB.title}
                    </p>
                    <div>
                      <p className="text-lg py-2 px-4">
                        رقم الطلب: {section.orderDetailsB.orderNumber}
                      </p>
                      <p className="text-lg py-2 px-4">
                        تاريخ الطلب: {section.orderDetailsB.orderDate}
                      </p>
                      <p className="text-lg py-2 px-4">
                        تاريخ الزيارة: {section.orderDetailsB.orderDateVisit}
                      </p>
                      <p className="text-lg py-2 px-4">
                        وقت الزيارة: {section.orderDetailsB.orderTimeOfVisit}
                      </p>
                      <p className="text-lg py-2 px-4">
                        الأسم: {section.orderDetailsB.OrderMobileNumber}
                      </p>
                      <p className="text-lg py-2 px-4">
                        رقم الجوال: {section.orderDetailsB.orderLocation}
                      </p>
                      <p className="text-lg py-2 px-4">
                        الموقع: {section.orderDetailsB.orderTotal}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-950 p-10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* Loop through sections for previous orders */}
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
              >
                <div>
                  <div className="flex flex-col space-y-4">
                    {/* Loop through buttons */}
                    {section.buttons.map((button, buttonIndex) => (
                      <div>
                        <button
                          style={{ backgroundColor: button.bgColor }}
                          className={`text-white text-lg py-2 ${button.padding} rounded shadow-md border border-black`}
                          onClick={() => {
                            if (buttonIndex === 0) {
                              setIsModalOpen(true); // Open modal for the first button
                            }
                          }}
                        >
                          {button.text}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-start mt-4 lg:mt-0 ">
                  <div className="text-end">
                    <p className="text-blue-950 text-lg py-2 px-4 font-bold">
                      {section.orderDetails.title}
                    </p>
                    <div>
                      <p className="text-lg py-2 px-4">
                        رقم الطلب: {section.orderDetails.orderNumber}
                      </p>
                      <p className="text-lg py-2 px-4">
                        تاريخ الطلب: {section.orderDetails.orderDate}
                      </p>
                      <p className="text-lg py-2 px-4">
                        تاريخ الزيارة: {section.orderDetails.orderDateVisit}
                      </p>
                      <p className="text-lg py-2 px-4">
                        وقت الزيارة: {section.orderDetails.orderTimeOfVisit}
                      </p>
                      <p className="text-lg py-2 px-4">
                        الأسم: {section.orderDetails.OrderMobileNumber}
                      </p>
                      <p className="text-lg py-2 px-4">
                        رقم الجوال: {section.orderDetails.orderLocation}
                      </p>
                      <p className="text-lg py-2 px-4">
                        الموقع: {section.orderDetails.orderTotal}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-950 p-10 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-8 py-8">
          <p>التالي</p>
          <p className="rounded-3xl bg-blue-950 px-4 py-2 text-white">1</p>
          <p>السابق</p>
        </div>
      </div>
    </>
  );
};

export default OrdersDetail;
