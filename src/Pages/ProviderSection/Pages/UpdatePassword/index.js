import React from "react"; // Import React library
import HeaderProviderSection from "../../Components/Header"; // Import custom header component

const UpdatePassword = () => {
  return (
    <div>
      <HeaderProviderSection /> {/* Render header section */}
      <div className="container mx-auto my-10 px-4 sm:px-6 md:px-10 lg:px-20 h-screen flex flex-col justify-center items-center">
        {/* Main container with full height, centered content */}
        <div className="space-y-8 w-full max-w-md">
          {/* Container for the input fields */}
          <div>
            <input
              className="border border-gray-400 bg-grey rounded-lg px-4 py-2 text-end w-full h-16 text-gray-500 mb-4"
              placeholder="كلمية المرور الحالية" // Placeholder for current password
            />
          </div>
          <div>
            <input
              className="border border-gray-400 bg-grey rounded-lg px-4 py-2 text-end w-full h-16 text-gray-500 mb-4"
              placeholder="كلمية المرور الجديدة" // Placeholder for new password
            />
          </div>
          <div>
            <input
              className="border border-gray-400 bg-grey rounded-lg px-4 py-2 text-end w-full h-16 text-gray-500 mb-4"
              placeholder="تأكيد كلمة المرور" // Placeholder for password confirmation
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          {/* Button to save the updated password */}
          <button className="bg-blue-950 text-white rounded-lg px-8 py-2 text-lg md:text-lg">
            حفظ {/* Save button text */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword; // Export the UpdatePassword component
