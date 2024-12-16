import React from "react";
import { useNavigate } from "react-router-dom";
import CarLogo from "../../../../Assets/CarLogo.png";
import Envelop from "../../../../Assets/Envelop.png";
import Lock from "../../../../Assets/Lock.png";

const LogInPageAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-grow">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 items-center text-center h-screen font-serif px-4">
          {/* Car logo */}
          <div className="grid items lg:justify-end md:justify-end sm:justify-center xs:justify-center">
            <img
              width={500}
              src={CarLogo}
              alt="Car Logo"
              className="w-full sm:w-auto"
            />
            <p className="text-4xl font-mono font-light text-blue-950 mt-6">
              D.Wash
            </p>
          </div>

          <div className="grid item flex-col lg:justify-start md:justify-start sm:justify-center sm:ms-0 xs:ms-0">
            <div className="w-full sm:w-[450px] mx-auto">
              <div className="p-8 rounded-lg bg-white">
                {/* Title */}
                <h2 className="text-4xl font-medium text-center text-blue-950 mb-10 sm:mb-20">
                  تسجيل دخول
                </h2>

                {/* Email Input */}
                <div className="mb-8 sm:mb-14">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full pe-10 ps-4 py-3 text-right bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="البريد الإلكتروني"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center">
                      <img src={Envelop} alt="envelop" />
                    </span>
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-8 sm:mb-14">
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="w-full pe-10 ps-4 py-3 text-right bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="كلمة المرور"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center">
                      <img src={Lock} alt="Lock" />
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    onClick={() => navigate("/admin-home")}
                    className="w-full sm:w-44 bg-blue-950 text-2xl text-white font-medium py-3 px-0 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    تسجيل دخول
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPageAdmin;
