import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Discount from "../../../../Assets/discount.png";
import CarLogo from "../../../../Assets/CarLogo.png";
import List from "../../../../Assets/list.png";
import Group from "../../../../Assets/Group.png";
import { FaUser } from "react-icons/fa";
import HeaderAdminSection from "../../Components/Header";

const HomePageAdmin = () => {
  // State to control dropdown visibility (if used)
  const [isOpen, setIsOpen] = useState(false);
  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Header section */}
      <HeaderAdminSection />

      {/* Main container with grid layout */}
      <div className="container mx-auto my-10 px-4 sm:px-2 md:px-10 lg:px-20 lg:px-[250px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full justify-center">
          {/* Discount Card */}
          <div
            onClick={() => navigate("/admin-discounts")}
            className="grid item justify-center items-center border border-black rounded-lg py-8 cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center">
              <img width={80} src={Discount} alt="Discount Icon" />
              <div>
                <p className="lg:text-2xl md:text-xl sm:text-lg text-blue-950 font-semibold mt-4 text-center">
                  إضافة خصم
                </p>
              </div>
            </div>
          </div>

          {/* Service Providers Card */}
          <div
            onClick={() => navigate("/admin-service-providers")}
            className="grid item justify-center items-center border border-black rounded-lg py-8 cursor-pointer"
          >
            <div className="flex justify-center">
              <img className="ms-2" width={145} src={Group} alt="Group Icon" />
            </div>
            <p className="lg:text-2xl md:text-xl sm:text-lg text-blue-950 font-semibold mt-4 text-center">
              مقدمي الخدمات
            </p>
          </div>

          {/* New Signup Card */}
          <div
            onClick={() => navigate("/admin-new-signup")}
            className="grid item justify-center items-center border border-black rounded-lg py-8 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center">
              <FaUser className="w-20 h-20" />
              <p className="lg:text-2xl md:text-xl sm:text-lg text-blue-950 font-semibold mt-4 text-center">
                تسجيل مقدم خدمة
              </p>
            </div>
          </div>

          {/* Profile Requests Card */}
          <div
            onClick={() => navigate("/admin-profile-requests")}
            className="grid item justify-center items-center border border-black rounded-lg py-8 cursor-pointer"
          >
            <div className="flex justify-center">
              <img width={80} src={List} alt="Requests Icon" />
            </div>
            <p className="lg:text-2xl md:text-xl sm:text-lg px-4 text-blue-950 font-semibold mt-4 text-center">
              طلبات الخدمات : الملف الشخصي
            </p>
          </div>

          {/* Services Request List Card */}
          <div
            className="grid item justify-center items-center border border-black rounded-lg py-8 cursor-pointer"
            onClick={() => navigate("/admin-services-request-list")}
          >
            <div className="flex justify-center">
              <img width={80} src={List} alt="Providers Icon" />
            </div>
            <div>
              <p className="lg:text-2xl md:text-xl sm:text-lg text-blue-950 font-semibold mt-4 text-center">
                مقدمي الخدمات
              </p>
            </div>
          </div>

          {/* Customer Requests Card */}
          <div className="grid item justify-center items-center border border-black rounded-lg py-12 cursor-pointer">
            <div className="flex justify-center">
              <img width={80} src={List} alt="Customer Requests Icon" />
            </div>
            <div>
              <p className="lg:text-2xl md:text-xl sm:text-lg text-blue-950 font-semibold mt-4 text-center">
                طلبات العملاء
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageAdmin;
