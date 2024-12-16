import React, { useState } from "react";
import MainHeader from "../../Components/Header"; // Importing the main header component
import { RiDeleteBin5Line } from "react-icons/ri"; // Importing delete icon from react-icons
import Calendar from "react-calendar"; // Importing Calendar component
import "react-calendar/dist/Calendar.css"; // Importing Calendar styles
import TimePicker from "./TimePicker"; // Importing custom TimePicker component
import CheckoutForm from "./CheckoutForm"; // Importing custom CheckoutForm component

const ShoppingCart = () => {
  // State to hold the selected date
  const [date, setDate] = useState(new Date());

  // Function to handle date changes from the calendar
  const onChange = (newDate) => {
    setDate(newDate); // Update state with the new date
  };

  return (
    <div>
      <MainHeader /> {/* Rendering the main header component */}
      <div className="h-screen container mx-auto w-13/15 sm:w-4/5 px-5 py-4">
        <h2 className="text-3xl text-blue-900 mb-8 flex justify-end items-end font-bold">
          سلة الطلبات {/* Shopping Cart Title in Arabic */}
        </h2>
        <div className="py-6 px-8 border border-gray-500 rounded-lg">
          <p className="text-end text-gray-500 py-6">
            مقدم الخدمة: رغوة الغسيل {/* Service provider title in Arabic */}
          </p>

          <hr className="-mx-8" />

          {/* Item details for the shopping cart */}
          <div className="flex justify-between items-center text-end my-8">
            <div>
              <p className="text-gray-500">15.00 ر.س</p>{" "}
              {/* Item price in Arabic Riyals */}
            </div>
            <div className="space-y-4">
              <p className="text-blue-950 text-xl">غسيل عادي</p>{" "}
              {/* Item description in Arabic */}
              <p className="text-gray-500 text-xl">اضافة : عطر اضافات</p>{" "}
              {/* Additional item detail in Arabic */}
              <div className="flex justify-center items-center">
                <p className="text-gray-500 text-xl me-2">غسيل عادي</p>{" "}
                {/* Item name in Arabic */}
                <RiDeleteBin5Line className="w-6 h-6 text-gray-500" />{" "}
                {/* Delete icon */}
              </div>
            </div>
          </div>

          <hr className="-mx-8" />

          {/* Total price section */}
          <div className="flex justify-between items-center text-end my-8">
            <div>
              <p className="text-gray-500">17.00 ر.س</p>{" "}
              {/* Total price in Arabic Riyals */}
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 text-xl">
                المجموع (شامل ضريبة القيمة المضافة){" "}
                {/* Total including VAT in Arabic */}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-blue-900 mb-8 flex justify-end items-end font-bold mt-10">
            التاريخ والوقت {/* Date and Time title in Arabic */}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between my-10">
          <div>
            <TimePicker /> {/* Rendering the TimePicker component */}
            <div className="flex justify-center items- mt-14 ">
              <button className="bg-blue-950 text-white rounded-lg px-14 py-2 ">
                تأكيد الحجز {/* Confirm booking button in Arabic */}
              </button>
            </div>
          </div>

          {/* Calendar container for selecting a date */}
          <div className="calendar-container border rounded-lg w-84 mt-4 ">
            <p className="text-start mt-8 ms-4 text-xl">الإربعاء , 1 مارس</p>{" "}
            {/* Selected date in Arabic */}
            <Calendar
              onChange={onChange} // Handle date change
              value={date} // Current selected date
              className="rounded-lg shadow-md p-4 "
            />
            {/* Buttons for cancelling and confirming date selection */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4">
              <button className="bg-gray-400 text-white px-14 py-2 rounded-lg mt-2 mb-2">
                إلغاء {/* Cancel button in Arabic */}
              </button>
              <button className="bg-blue-950 text-white px-14 py-2 rounded-lg mt-2 mb-2">
                تأكيد {/* Confirm button in Arabic */}
              </button>
            </div>
          </div>
        </div>
        <hr className="border-2 border-blue-950 mt-8 " />
        <CheckoutForm /> {/* Rendering the CheckoutForm component */}
      </div>
    </div>
  );
};

export default ShoppingCart; // Exporting the ShoppingCart component
