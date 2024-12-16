import React from "react"; // Import React library
import HeaderProviderSection from "../../Components/Header"; // Import custom header component
import { GiWallet } from "react-icons/gi"; // Import wallet icon
import { FaFilePdf } from "react-icons/fa6"; // Import PDF file icon

const WalletMain = () => {
  return (
    <div>
      <HeaderProviderSection /> {/* Render header section */}
      <div className="container h-screen mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        {/* Main container for wallet page */}
        <h5 className="text-3xl text-blue-900 flex justify-end items-end mb-8 font-bold">
          المحفظة {/* Wallet title */}
        </h5>
        <h5 className="text-xl text-blue-900 flex justify-end items-end mb-8 font-800">
          رصيد المحفظة الحالي {/* Current wallet balance title */}
        </h5>

        <div className="p-6 border border-black rounded-xl mt-6 container mx-auto w-11/12 sm:w-3/5 px-5 py-4 items-center mb-6">
          {/* Wallet balance card */}
          <div className="flex flex-col justify-center items-center">
            <GiWallet className="w-20 h-20 sm:w-24 sm:h-24 text-blue-950" />{" "}
            {/* Wallet icon */}
            <p className="text-xl sm:text-2xl font-bold">ريال 450</p>{" "}
            {/* Current balance amount */}
          </div>
          <hr className="border border-gray-300 -mx-5 my-4" />{" "}
          {/* Horizontal separator */}
          <div className="flex justify-between items-center text-gray-600 my-6">
            <p> ر.س 600.00</p> {/* Total amount */}
            <p>المجموع الكلي</p> {/* Total label */}
          </div>
          <div className="flex justify-between items-center text-gray-600">
            <p> 150.00 ر.س</p> {/* Amount deducted */}
            <p> المبلغ المستقطع</p> {/* Deducted amount label */}
          </div>
          <hr className="border border-gray-300 -mx-5 my-4" />{" "}
          {/* Horizontal separator */}
          <div className="flex justify-between items-center text-gray-600">
            <p> 450.00 ر.س</p> {/* Final total amount */}
            <p> المجموع النهائي</p> {/* Final total label */}
          </div>
          <div className="flex justify-start mt-16">
            <FaFilePdf className="w-12 h-12 sm:w-16 sm:h-16 text-red-600" />{" "}
            {/* PDF icon for downloads */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletMain; // Export the WalletMain component
