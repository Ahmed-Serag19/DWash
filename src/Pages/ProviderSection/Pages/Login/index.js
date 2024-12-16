import React from "react";
import { useNavigate } from "react-router-dom";
import CarLogo from "../../../../Assets/CarLogo.png";
import Envelop from "../../../../Assets/Envelop.png";
import Lock from "../../../../Assets/Lock.png";

const LogInPageProvider = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center text-center h-screen font-serif">
        {/* Car logo */}
        <div className="grid items lg:justify-end md:justify-end sm:justify-center xs:justify-center">
          <img width={500} src={CarLogo} alt="Car Logo" />

          <p className="text-4xl font-mono font-light text-blue-950 mt-6">
            D.Wash
          </p>
        </div>
        <div className="grid item flex-col lg:justify-start md:justify-start sm:justify-center lg:ms-20 md:ms-20 sm:ms-0">
          <div className="w-[450px]">
            <div className="p-8 rounded-lg">
              {/* Title */}
              <h2 className="text-4xl font-medium text-center text-blue-950 mb-20">
                تسجيل دخول
              </h2>

              {/* Email Input */}
              <div className="mb-14">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full pe-10 ps py-3 text-right bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="البريد الإلكتروني"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <img src={Envelop} alt="envelop" />
                  </span>
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-14">
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
              <button
                onClick={() => navigate("/provider-home")}
                className="w-44 bg-blue-950 text-2xl text-white font-medium py-3 px-0 rounded-md hover:bg-blue-800 transition-colors"
              >
                تسجيل دخول
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer for copyright */}
      <footer className="absolute bottom-0 w-full text-center p-4 ">
        <p className="text-gray-600">© 2023 دسر. جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default LogInPageProvider;
