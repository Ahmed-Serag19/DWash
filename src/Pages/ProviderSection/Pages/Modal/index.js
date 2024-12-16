import React from 'react';

const ModalMain = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    // Close the modal only if the overlay (background) is clicked
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/3 flex flex-col justify-center items-center overflow-y-auto scrollbar-none">
        <div className="mt-4 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalMain;