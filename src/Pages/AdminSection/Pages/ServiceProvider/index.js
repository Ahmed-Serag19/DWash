// Import React and necessary hooks and components
import React, { useState } from "react";
import CarLogo from "../../../../Assets/CarLogo.png"; // Importing car logo asset
import LogoName from "../../../../Assets/LogoName.png"; // Importing logo name asset
import Search from "../../../../Assets/search.png"; // Importing search icon asset
import { useNavigate } from "react-router-dom"; // Importing navigation hook
import HeaderAdminSection from "../../Components/Header"; // Importing header component

// Main functional component for ServiceProviderAdmin
const ServiceProviderAdmin = () => {
  const [data, setdata] = useState(0); // State to manage active/inactive data toggle
  const navigate = useNavigate(); // Initialize navigation

  // Card Data A (for active service providers)

  const cardDataA = [
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
    {
      logoA: LogoName,
      companyNameA: "مغسلة رغوة",
      joinDateA: "10/20/2023",
      idTypeA: "عمل حر",
      idNumberA: "8779254375",
      nationalIDA: "1091111111",
      phoneNumberA: "050656565",
      emailA: "test@test.com",
    },
  ];

  // Card Data B (for inactive service providers)

  const cardDataB = [
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
    {
      logoB: LogoName,
      companyNameB: "مغسلة رغوة",
      joinDateB: "10/20/2023",
      idTypeB: "عمل حر",
      idNumberB: "8779254375",
      nationalIDB: "1091111111",
      phoneNumberB: "050656565",
      emailB: "test@test.com",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <HeaderAdminSection />
      <div className="container mx-auto px-4 pt-6 flex justify-end items-end"></div>

      <div className="h-screen container  mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Title Section */}
        <div>
          <h4 className="text-3xl text-blue-900 flex justify-end items-end mb-8 font-bold">
            قائمة مقدمي الخدمات
          </h4>
        </div>

        {/* Toggle Buttons for Active/Inactive Status */}

        <div className="flex justify-center items-center">
          <button
            onClick={() => setdata(0)}
            className={`lg:px-22 md:px-16 sm:px-12 px-8 py-3 lg:text-sm md:text-xl sm:text-base text-sm ${
              data === 1
                ? "bg-transparent text-gray-500"
                : "bg-blue-950 text-white"
            } rounded-s-xl border border-gray-400`}
          >
            غير نشط
          </button>
          <button
            onClick={() => setdata(1)}
            className={`lg:px-20 md:px-16 sm:px-12 px-8 py-3 lg:text-sm md:text-xl sm:text-base text-sm ${
              data === 0
                ? "bg-transparent text-gray-500"
                : "bg-blue-950 text-white"
            } rounded-e-xl border border-gray-400`}
          >
            نشط
          </button>
        </div>

        <hr className="border-gray-400 border-t-1 mt-14 mb-10 w-full" />

        {/* Search bar */}

        <div className="mb-8 px-4 md:px-20 lg:px-20 xl:px-20">
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
            {/* Active Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-6 gap-8 px-4 md:px-20 lg:px-20 xl:px-20">
              {cardDataA.map((card, index) => (
                <div
                  key={index}
                  className="border-gray-400 border rounded-lg p-6"
                >
                  <div className="flex flex-col justify-center items-center">
                    <img src={card.logoA} alt="No Preview" />
                    {/* Company Logo */}

                    <h4 className="text-center my-6 text-2xl text-blue-950 font-bold">
                      {card.companyNameA}
                    </h4>
                  </div>

                  <div className="text-end space-y-4 text-md text-blue-950 font-600 mb-10 ">
                    {/* Card Details */}
                    <p>تاريخ الانضمام: {card.joinDateA}</p>
                    <p>نوع المعرف: {card.idTypeA}</p>
                    <p>رقم المعرف: {card.idNumberA}</p>
                    <p>الهوية الوطنية: {card.nationalIDA}</p>
                    <p>رقم الجوال: {card.phoneNumberA}</p>
                    <p>البريد الالكتروني: {card.emailA}</p>
                  </div>

                  <hr className="-mx-6 border-gray-400 border-t-1" />
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-2 mt-6">
                    <button className="bg-red-700 text-white text-sm px-12 py-2 rounded-lg">
                      تعطيل{/* Disable */}
                    </button>
                    <button className="bg-blue-950 text-white text-sm px-12 py-2 rounded-lg">
                      تعديل{/* Edit */}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Inactive Cards Section */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 container mx-auto p-6 gap-8 px-4 md:px-20 lg:px-20 xl:px-20">
              {cardDataB.map((card, index) => (
                <div
                  key={index}
                  className="border-gray-400 border rounded-lg p-6"
                >
                  <div className="flex flex-col justify-center items-center">
                    <img src={card.logoB} alt="No Preview" />
                    {/* Company Logo */}

                    <h4 className="text-center my-6 text-2xl text-blue-950 font-bold">
                      {card.companyNameB}
                      {/* Company Name */}
                    </h4>
                  </div>

                  <div className="text-end space-y-4 text-md text-blue-950 font-600 mb-10">
                    {/* Card Details */}
                    <p>تاريخ الانضمام: {card.joinDateB}</p>
                    <p>نوع المعرف: {card.idTypeB}</p>
                    <p>رقم المعرف: {card.idNumberB}</p>
                    <p>الهوية الوطنية: {card.nationalIDB}</p>
                    <p>رقم الجوال: {card.phoneNumberB}</p>
                    <p>البريد الالكتروني: {card.emailB}</p>
                  </div>

                  <hr className="-mx-6 border-gray-400 border-t-1" />
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-2 mt-6">
                    <button className="bg-green-700 text-white lg:text-sm md:text-sm sm:text-base text-sm lg:px-12 md:px-10 sm:px-8 px-6 py-2 rounded-lg">
                      تنشيط{/* Enable */}
                    </button>
                    <button className="bg-blue-950 text-white lg:text-sm md:text-sm sm:text-base text-sm lg:px-12 md:px-10 sm:px-8 px-6 py-2 rounded-lg">
                      تعديل{/* Edit */}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Pagination controls */}
        <div className="flex justify-center gap-8 pb-8 mt-10">
          <p>التالي</p>
          <p className="rounded-3xl bg-blue-950 px-4 py-2 text-white">1</p>
          <p>السابق</p>
        </div>
      </div>
    </>
  );
};

export default ServiceProviderAdmin;
