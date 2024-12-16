import React, { useState } from "react"; // Import React and useState hook
import MainHeader from "../../Components/Header"; // Import main header component
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const VerficationCode = () => {
  const navigate = useNavigate(); // Initialize navigate for routing
  const [phoneNumber, setPhoneNumber] = useState(""); // State to hold verification code

  // Function to handle form submission
  const handleSubmit = () => {
    if (phoneNumber.trim() === "") {
      alert("enter a valid verification code"); // Alert if verification code is empty
      return;
    }
    // Placeholder for actual verification logic (e.g., API call)
    alert(`Logging in with phone number: ${phoneNumber}`);
  };

  return (
    <div>
      <MainHeader /> {/* Render the main header */}
      <div className="flex justify-center flex-col items-center h-screen">
        <div>
          <h3 className="font-[700] text-[30px] text-end mb-3">تسجيل دخول</h3>{" "}
          {/* Title for verification */}
          <div>
            <input
              className="w-[300px] h-[50px] bg-[#F5F5F7] border-[#1C2650] rounded-[5px] ps-3"
              type="text"
              placeholder="رمز التحقق" // Placeholder for verification code input
              value={phoneNumber} // Controlled input value
              onChange={(e) => setPhoneNumber(e.target.value)} // Update state on input change
            />
          </div>
          <div className="mt-4">
            <button
              onClick={() => {
                handleSubmit(); // Handle form submission
                navigate("/main-verification"); // Redirect to verification page (this seems to be incorrect, it might be a different page)
              }}
              className="w-full"
            >
              <p className="text-white font-[700] ps-3 pe-3 pt-2 pb-2 bg-[#1C2650] rounded-[5px]">
                تحقق {/* Verification button text */}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerficationCode; // Export the VerificationCode component for use in other files
