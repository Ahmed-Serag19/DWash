import React, { useState } from "react"; // Import React and useState hook
import MainHeader from "../../Components/Header"; // Import the main header component

const SignupVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); // State to hold the phone number input

  // Function to handle sign-up process
  const handleSignUp = () => {
    // Placeholder for actual sign-up logic (e.g., API call)
    alert("Redirecting to sign-up page..."); // Alert user about redirection
  };

  return (
    <div>
      <MainHeader /> {/* Render the main header */}
      <div className="flex justify-center flex-col items-center h-screen">
        <div>
          <h3 className="font-[700] text-[30px] text-end mb-3">
            إنشاء حساب جديد {/* Title for the sign-up verification page */}
          </h3>
          <div>
            <input
              className="w-[300px] h-[50px] bg-[#F5F5F7] border-[#1C2650] rounded-[5px] ps-3"
              type="text"
              placeholder="+9665XXXXXXXXX" // Placeholder for phone number input
              value={phoneNumber} // Controlled input value
              onChange={(e) => setPhoneNumber(e.target.value)} // Update state on input change
            />
          </div>
          <div className="mt-4">
            <button onClick={handleSignUp} className="w-full ">
              <p className="font-[700] text-[#1C2650] ps-3 pe-3 pt-2 pb-2 bg-[transparent] rounded-[5px] border-[2px] border-[#1C2650]">
                إنشاء حساب {/* Button text for sign-up */}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupVerification; // Export the SignupVerification component for use in other files
