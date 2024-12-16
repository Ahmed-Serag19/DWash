import React, { useState } from "react"; // Import React and useState hook
import Arrow from "../../../../Assets/Arrow 11.png"; // Import arrow image
import MainHeader from "../../Components/Header"; // Import main header component
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate for routing

  const [phoneNumber, setPhoneNumber] = useState(""); // State to hold phone number

  // Function to handle login action
  const handleLogin = () => {
    if (phoneNumber.trim() === "") {
      alert("Please enter a valid phone number"); // Alert if phone number is empty
      return;
    }
    // Placeholder for actual login logic (e.g., API call)
    alert(`Logging in with phone number: ${phoneNumber}`);
  };


  return (
    <div>
      <MainHeader /> {/* Render the main header */}
      <div className="flex justify-center flex-col items-center h-screen">
        <div>
          <h3 className="font-[700] text-[30px] text-end mb-3">تسجيل دخول</h3>{" "}
          {/* Title for login */}
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
            <button
              onClick={() => {
                navigate("/main-verification"); // Redirect to verification page
              }}
              className="w-full"
            >
              <p className="text-white font-[700] ps-3 pe-3 pt-2 pb-2 bg-[#1C2650] rounded-[5px]">
                تسجيل دخول {/* Login button text */}
              </p>
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={() => navigate("/main-signup")} // Handle sign-up when clicked
              className="w-full"
            >
              <p className="font-[700] flex items-center justify-center text-[#1C2650] ps-3 pe-3 pt-2 pb-2 bg-[transparent] rounded-[5px] border-[2px] border-[#1C2650]">
                <img src={Arrow} alt="arrow" className="me-3" /> إنشاء حساب{" "}
                {/* Sign-up button with arrow */}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; // Export the Login component for use in other files
