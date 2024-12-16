import React from "react";
import { IoIosArrowDown } from "react-icons/io"; // Importing the down arrow icon
import CarLogo from "../../../../Assets/CarLogo.png"; // Importing a logo image (unused in this code)
import { useNavigate } from "react-router-dom"; // Importing navigation hook
import HeaderAdminSection from "../../Components/Header"; // Importing the header component

// Main component for the admin signup form
const SignupAdmin = () => {
  const navigate = useNavigate(); // Initializing navigation hook for future redirects

  return (
    <>
      {/* Header section */}
      <HeaderAdminSection />

      {/* Main container for the form */}
      <div className="h-screen container mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        <div className="flex flex-col items-end">
          {/* Form title */}
          <div className="w-full sm:w-auto text-end">
            <h1 className="text-blue-900 text-3xl mb-10 font-bold">
              تسجيل عميل جديد {/* Arabic text for "New Client Registration" */}
            </h1>

            {/* Form fields */}
            <div className="space-y-4 ">
              {/* Arabic Name Field */}
              <div>
                <p className="text-blue-900 text-lg mb-3">الأسم (عربي)</p>
                <input
                  className="border border-gray-400 rounded px-2 py-2 text-end w-full sm:w-80"
                  type="text"
                />
              </div>

              {/* English Name Field */}
              <div>
                <p className="text-blue-900 text-lg mb-3">الأسم (انجليزي)</p>
                <input
                  className="border border-gray-400 rounded px-2 py-2 text-end w-full sm:w-80"
                  type="text"
                />
              </div>

              {/* Identifier Type Field with Dropdown Icon */}
              <div>
                <p className="text-blue-900 text-lg mb-3">نوع المعرف</p>
                <div className="relative w-full sm:w-96">
                  <input
                    className="border border-gray-400 rounded px-2 py-2 text-end w-full"
                    type="text"
                  />
                  <button>
                    <IoIosArrowDown className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white bg-blue-950 w-6 h-6 rounded-full p-1" />
                  </button>
                </div>
              </div>

              {/* Identifier Number Field */}
              <div>
                <p className="text-blue-900 text-lg mb-3">رقم المعرف</p>
                <div className="relative w-full sm:w-96">
                  <input
                    className="border border-gray-400 rounded px-2 py-2 text-end w-full"
                    type="text"
                  />
                </div>
              </div>

              {/* ID Number Field */}
              <div>
                <p className="text-blue-900 text-lg mb-3">رقم الهوية</p>
                <input
                  className="border border-gray-400 rounded px-2 py-2 text-end w-full sm:w-80"
                  type="text"
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <p className="text-blue-900 text-lg mb-3">رقم الجوال</p>
                <input
                  className="border border-gray-400 rounded px-2 py-2 text-end w-full sm:w-80"
                  type="text"
                />
              </div>

              {/* Email Field */}
              <div>
                <p className="text-blue-900 text-lg mb-3">البريد الالكتروني</p>
                <input
                  className="border border-gray-400 rounded px-2 py-2 text-end w-full sm:w-80"
                  type="email"
                />
              </div>

              {/* Deduction Percentage Field */}
              <div>
                <p className="text-blue-900 text-lg mb-3">نسبة الاستقطاع ٪</p>
                <input
                  className="border border-gray-400 rounded px-2 py-2 text-end w-full sm:w-80"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button className="bg-blue-950 text-white rounded-lg px-14 py-3 text-lg sm:text-xl mt-10 mb-10">
            <p>تسجيل</p> {/* Arabic text for "Register" */}
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupAdmin;
