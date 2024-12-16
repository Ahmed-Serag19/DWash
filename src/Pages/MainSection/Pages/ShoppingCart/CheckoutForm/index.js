import React, { useState } from "react";
import { BiSolidDiscount } from "react-icons/bi";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-center text-xl font-semibold mb-4">تفاصيل الدفع</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section - Inputs */}
        <div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-end me-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200"
              placeholder="Example@youremail.com"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-end text-gray-700 me-2">
              رقم الجوال
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
                  alt="flag"
                  className="w-5 h-5"
                />
              </span>
              <input
                type="text"
                className="pl-10 mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200"
                placeholder="(201) 830-8210"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-end me-2">
              طريقة الدفع
            </label>
            <div className="flex space-x-4">
              <button
                className={`flex items-center justify-center w-1/2 py-2 border rounded-md ${
                  paymentMethod === "card"
                    ? "border-2 border-blue-900"
                    : "border-gray-300"
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <span className="mr-2">💳</span> بطاقة
              </button>
              <button
                className={`flex items-center justify-center w-1/2 py-2 border rounded-md ${
                  paymentMethod === "bank"
                    ? "border-2 border-blue-900"
                    : "border-gray-300"
                }`}
                onClick={() => setPaymentMethod("bank")}
              >
                <span className="mr-2">🏦</span> تحويل بنكي
              </button>
            </div>
          </div>

          {/* Cardholder Name */}
          {paymentMethod === "card" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 text-end me-2">
                الاسم على البطاقة
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200"
                placeholder="Ex. Joy Lawson"
              />
            </div>
          )}

          {/* Country */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-end me-2">
              الدولة
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200">
              <option value="United States">United States</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="United Kingdom">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          {/* City */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 text-end me-2">
                الحي
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200"
                placeholder="Ex. 73923"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 text-end me-2">
                المدينة
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200"
                placeholder="Ex. New York"
              />
            </div>
          </div>
        </div>

        {/* Right Section - Summary */}
        <div className="border-l border-gray-200 pl-6">
          {/* Discount Code */}
          <div className="mb-4 flex items-center">
            <button className="absolute ms-4 text-sm text-blue-950 font-bold">
              تفعيل
            </button>

            <input
              type="text"
              className="flex-grow border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-200 text-end"
              placeholder="كود الخصم"
            />
          </div>
          <hr className=" my-6 border" />

          {/* Pricing Summary */}
          <div className="text-right flex justify-between">
            <div className="flex flex-col space-y-4">
              <p>00.00 ر.س</p>
              <p>00.00 ر.س</p>
              <p>00.00 ر.س</p>
            </div>

            <div className="flex flex-col space-y-4">
              <p>المجموع الفرعي</p>

              <p>الضريبة المضافة (15%)</p>

              <p>الخصم (5%)</p>
            </div>
          </div>

          <hr className=" my-6 border" />

          <div className="flex justify-between font-bold">
            <p>600.00 ر.س</p>
            <p>المجموع</p>
            <p>المجموع</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-14">
        <button className="bg-blue-950 rounded-lg text-white py-3 px-14 ">
          اتمام عملية الدفع
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
