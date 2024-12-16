import React from "react";

// Modal component to show a popup overlay with content
const Modal = ({ isOpen, closeModal, children }) => {
  // If modal is not open, return null to prevent rendering
  if (!isOpen) return null;

  // Close modal when clicking outside the content area (overlay click)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      onClick={handleOverlayClick} // Click handler for overlay click to close modal
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" // Fullscreen overlay with semi-transparent background
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/3">
        {/* Modal content container */}
        <div className="mt-4 overflow-y-auto scrollbar-none max-h-[85vh]">
          {children} {/* Render any content passed as children */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
