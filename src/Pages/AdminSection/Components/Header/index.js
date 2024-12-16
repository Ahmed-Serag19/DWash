import React from "react";
import { useNavigate } from "react-router-dom";
import CarLogo from "../../../../Assets/CarLogo.png";
import DropdownMenu from "../DropdownMenu"; // Import the DropdownMenu component

const HeaderAdminSection = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Clear any authentication data (e.g., localStorage, cookies)
    localStorage.removeItem("authToken");
    // Redirect to login page
    navigate("/admin-login");
  };

  return (
    <div>
      <div className="container mx-auto my-2 flex justify-between items-center px-5 md:px-16 lg:px-14">
        {/* Profile section with dropdown */}
        <DropdownMenu onLogout={handleLogout} />

        {/* Logo section with navigation */}
        <div onClick={() => navigate("/admin-home")} className="cursor-pointer">
          <img src={CarLogo} className="w-24 sm:w-28" alt="D.Wash Logo" />
          <p className="text-lg text-center mt-2" style={{ color: "#1C2650" }}>
            D.Wash
          </p>
        </div>
      </div>

      <hr className="border-1 border-gray-300" />
    </div>
  );
};

export default HeaderAdminSection;
