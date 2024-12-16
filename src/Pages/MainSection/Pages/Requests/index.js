import React, { useState } from "react";
import MainHeader from "../../Components/Header";
import Search from "../../../../Assets/search.png";
import { MdLocationOn } from "react-icons/md";

const MainRequests = () => {
  // State to manage the active tab (0 for requests, 1 for profile)
  const [data, setdata] = useState(0);
  // Sections containing order details and buttons
  const sections = [
    {
      buttons: [{ text: "الغاء الحجز", bgColor: "#D90000", padding: "px-16" }],
      orderDetails: {
        title: "محمد",
        orderNumber: "1000087864",
        orderDate: "10/20/2023",
        orderTime: "4:30 Pm",
        orderStatus: "انتظار",
        orderPrice: "150",
      },
    },
    {
      buttons: [{ text: "الغاء الحجز", bgColor: "#D90000", padding: "px-16" }],
      orderDetails: {
        title: "محمد",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderTime: "4:30 Pm",
        orderStatus: "انتظار",
        orderPrice: "150",
      },
    },
    {
      buttons: [{ text: "الغاء الحجز", bgColor: "#D90000", padding: "px-16" }],
      orderDetails: {
        title: "محمد",
        orderNumber: "١٩٨٨٢٣٧٥٤٥",
        orderDate: "10/20/2023",
        orderTime: "4:30 Pm",
        orderStatus: "انتظار",
        orderPrice: "150",
      },
    },
  ];

  return (
    <div>
      {/* Main Header Component */}
      <MainHeader setdata={setdata} />

      <div className="h-screen container mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Button Navigation for Requests and Profile */}

        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => setdata(0)}
            className={`lg:px-20 md:px-16 sm:px-12 px-8 py-3 lg:text-sm md:text-xl sm:text-base text-sm ${
              data === 1
                ? "bg-transparent text-gray-400"
                : "bg-blue-950 text-white"
            }  rounded-s-xl border border-gray-400`}
          >
            طلباتي
          </button>
          <button
            onClick={() => setdata(1)}
            className={`lg:px-20 md:px-16 sm:px-12 px-8 py-3 lg:text-sm md:text-xl sm:text-base text-sm ${
              data === 0
                ? "bg-transparent text-gray-500"
                : "bg-blue-950 text-white"
            }   rounded-e-xl border border-gray-400`}
          >
            الملف الشخصي
          </button>
        </div>

        <hr className=" border-gray-400 border-t-1 mt-14 mb-10" />

        {data === 1 ? (
          <>
            {/* Profile Form Section */}
            <div className="container mx-auto py-6 px-6">
              <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-end text-end lg:gap-32 md:gap-28 sm:gap-16">
                <div className="grid item w-full">
                  <p className="text-blue-950 text-xl font-bold mb-4">
                    البريد الإلكتروني
                  </p>
                  <input className=" h-12 rounded-lg border border-blue-950" />
                </div>
                <div className="grid item w-full">
                  <p className="text-blue-950 text-xl font-bold mb-4">الأسم </p>
                  <input className=" h-12 rounded-lg border border-blue-950" />
                </div>
              </div>

              <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-end text-end lg:gap-32 md:gap-28 sm:gap-16 ">
                <div className="grid item w-full"></div>

                <div className="grid item space-y-4 ">
                  <p className="text-blue-950 text-xl font-bold">العنوان</p>
                  <input
                    className="h-12 text-end border px-4 border-gray-950 focus:outline-none rounded-lg"
                    placeholder="المدينة"
                  />
                  <input
                    className="h-12 text-end border px-4 border-gray-950 focus:outline-none rounded-lg"
                    placeholder="الحي"
                  />
                  <div className="flex w-full rounded-lg">
                    {/* Icon Section */}
                    <div className="flex items-center justify-center bg-blue-950 lg:w-20 sm:w-10 rounded-lg">
                      <MdLocationOn className="w-8 h-8 text-white" />
                    </div>

                    {/* Input Section */}
                    <div className="flex flex-col w-full ms-1 space-y-2">
                      <input
                        className="h-12 text-end border px-4 border-gray-950 focus:outline-none rounded-lg"
                        placeholder="خط الطول"
                      />
                      <input
                        className="h-12 text-end border px-4 border-gray-950 focus:outline-none rounded-lg"
                        placeholder="خط العرض"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center my-10">
                <button className="bg-blue-950 px-16 py-2 text-lg text-white rounded-lg">
                  حفظ
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              {/* Requests Section*/}
              {sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="container mx-auto w-11/12 sm:w-3/5 px-5 py-4 border border-black rounded-lg flex flex-col sm:flex-row justify-between items-center mb-6"
                >
                  <div>
                    <div className="space-y-4">
                      {/* Loop through buttons */}
                      {section.buttons.map((button, buttonIndex) => (
                        <div key={buttonIndex}>
                          <button
                            style={{ backgroundColor: button.bgColor }}
                            className={`text-white text-lg py-2 ${button.padding} rounded shadow-md border border-black`}
                          >
                            {button.text}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center items-start ">
                    <div className="text-end">
                      <p className=" text-lg py-2 px-4 rounded border-gray-200 font-bold">
                        {section.orderDetails.title}
                      </p>
                      <div>
                        <p className="text-gray-700 text-lg py-2 px-4 rounded border-gray-200">
                          رقم الطلب: {section.orderDetails.orderNumber}
                        </p>
                        <p className="text-gray-700 text-lg py-2 px-4 rounded border-gray-200">
                          تاريخ الطلب: {section.orderDetails.orderDate}
                        </p>
                        <p className="text-gray-700 text-lg py-2 px-4 rounded border-gray-200">
                          الوقت: {section.orderDetails.orderTime}
                        </p>
                        <p className="text-gray-700 text-lg py-2 px-4 rounded border-gray-200">
                          : نوع الخدمة
                        </p>
                        <p className="text-gray-700 text-lg py-2 px-4 rounded border-gray-200">
                          الحالة: {section.orderDetails.orderStatus}
                        </p>
                        <p className="text-gray-700 text-lg py-2 px-4 rounded border-gray-200">
                          السعر : {section.orderDetails.orderPrice}
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-950 p-8 mt-4 rounded-full"></div>
                  </div>
                </div>
              ))}
              {/* Pagination for orders */}
              <div className="flex justify-center gap-8 py-8">
                <p>التالي</p>
                <p className="rounded-3xl bg-blue-950 px-4 py-2 text-white">
                  1
                </p>
                <p>السابق</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainRequests;
