import React, { useState } from "react";
import HeaderProviderSection from "../../Components/Header";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Profile = () => {
  const [fileA, setFileA] = useState(null);
  const [isDragOverA, setIsDragOverA] = useState(false);

  const [fileB, setFileB] = useState(null);
  const [isDragOverB, setIsDragOverB] = useState(false);

  const [fileC, setFileC] = useState(null);
  const [isDragOverC, setIsDragOverC] = useState(false);

  // Handler for the first file uploader
  const handleFileChangeA = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileA(selectedFile);
    }
  };

  const handleDropA = (event) => {
    event.preventDefault();
    setIsDragOverA(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFileA(droppedFile);
    }
  };

  const handleDragOverA = (event) => {
    event.preventDefault();
    setIsDragOverA(true);
  };

  const handleDragLeaveA = () => {
    setIsDragOverA(false);
  };

  const handleUploadClickA = () => {
    document.getElementById("file-input-a").click();
  };

  // Handler for the second file uploader
  const handleFileChangeB = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileB(selectedFile);
    }
  };

  const handleDropB = (event) => {
    event.preventDefault();
    setIsDragOverB(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFileB(droppedFile);
    }
  };

  const handleDragOverB = (event) => {
    event.preventDefault();
    setIsDragOverB(true);
  };

  const handleDragLeaveB = () => {
    setIsDragOverB(false);
  };

  const handleUploadClickB = () => {
    document.getElementById("file-input-b").click();
  };

  // Handler for the third file uploader
  const handleFileChangeC = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileC(selectedFile);
    }
  };

  const handleDropC = (event) => {
    event.preventDefault();
    setIsDragOverC(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFileC(droppedFile);
    }
  };

  const handleDragOverC = (event) => {
    event.preventDefault();
    setIsDragOverC(true);
  };

  const handleDragLeaveC = () => {
    setIsDragOverC(false);
  };

  const handleUploadClickC = () => {
    document.getElementById("file-input-c").click();
  };

  return (
    <div>
      <HeaderProviderSection />

      <div className="h-screen container mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        <div className="p-2 flex flex-col items-end">
          <div className="text-end container mx-auto ">
            <p className="text-blue-900 text-3xl mb-10 font-bold">
              الملف الشخصي
            </p>
            <p className="text-blue-950 text-2xl mb-4 font-700">
              البيانات الأساسية
            </p>

            <div className="space-y-4 mt-10">
              <p className="text-blue-950 text-xl mb-2 font-700">
                اسم المتجر ( بالعربي )
              </p>
              <input className="border border-gray-400 rounded px-2 py-2 text-end w-full md:w-80" />

              <p className="text-blue-950 text-xl mb-2 font-700">
                اسم المتجر ( بالانجليزي )
              </p>
              <input className="border  border-gray-400 rounded px-2 py-2 text-end w-full md:w-80" />

              <p className="text-blue-950 text-xl mb-2 font-700">
                وصف المتجر (عربي)
              </p>
              <textarea className="border border-gray-400 rounded px-2 py-2 text-end w-full h-36 md:w-[450px]" />

              <p className="text-blue-950 text-xl mb-4 font-700">
                وصف المتجر (انجليزي)
              </p>
              <textarea className="border border-gray-400 rounded px-2 py-2 text-end w-full h-36 md:w-[450px]" />

              <div className="flex flex-col md:flex-row items-center justify-end gap-10 py-10">
                {/* Store Background Section */}
                <div className="text-center mb-6 md:mb-0 md:w-[450px]">
                  <p className="text-2xl text-blue-950 font-semibold mb-6">
                    خلفية المتجر
                  </p>
                  <div
                    onDragOver={handleDragOverA}
                    onDragLeave={handleDragLeaveA}
                    onDrop={handleDropA}
                    onClick={handleUploadClickA}
                    className={`border-2 border-dashed border-blue-950 px-20 flex justify-center items-center py-4 rounded-lg text-center cursor-pointer ${
                      isDragOverA ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <AiOutlineCloudUpload className="w-12 h-12 text-blue-950 mb-2 me-2" />
                    <p className="text-gray-600">
                      {fileA ? fileA.name : "Drag and Drop here"}
                    </p>
                    <input
                      type="file"
                      id="file-input-a"
                      className="hidden"
                      onChange={handleFileChangeA}
                    />
                  </div>
                  <button className="bg-blue-950 px-16 py-1 mt-6 text-white rounded-lg text-2xl">
                    اختيار
                  </button>
                </div>

                {/* Store Logo Section */}
                <div className="text-center mb-6 md:mb-0 md:w-[450px]">
                  <p className="text-2xl text-blue-950 font-semibold mb-6">
                    شعار المتجر
                  </p>
                  <div
                    onDragOver={handleDragOverB}
                    onDragLeave={handleDragLeaveB}
                    onDrop={handleDropB}
                    onClick={handleUploadClickB}
                    className={`border-2 border-dashed border-blue-950 flex justify-center items-center px-20 py-4 rounded-lg text-center cursor-pointer ${
                      isDragOverB ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <AiOutlineCloudUpload className="w-12 h-12 text-blue-950 mb-2 me-2" />
                    <p className="text-gray-600">
                      {fileB ? fileB.name : "Drag and Drop Here"}
                    </p>
                    <input
                      type="file"
                      id="file-input-b"
                      className="hidden"
                      onChange={handleFileChangeB}
                    />
                  </div>
                  <button className="bg-blue-950 px-16 py-1 mt-6 text-white rounded-lg text-2xl">
                    اختيار
                  </button>
                </div>
              </div>

              <p className="text-blue-900 text-3xl mb-2 font-700">
                البيانات البنكية
              </p>
              <p className="text-blue-950 text-2xl mb-2 font-700">اسم البنك</p>
              <input className="border border-gray-400 rounded px-2 py-2 text-end w-full md:w-80" />

              <p className="text-blue-950 text-xl mb-2 font-700">IBAN</p>
              <input className="border border-gray-400 rounded px-2 py-2 text-end w-full md:w-80" />

              <p className="text-blue-950 text-2xl mb-2 font-700">رقم الحساب</p>
              <input className="border border-gray-400 rounded px-2 py-2 text-end w-full md:w-80" />

              {/* Store Logo Upload */}
              <div className="flex justify-end mb-6">
                <div className="text-center w-full md:w-80">
                  <p className="text-2xl text-blue-950 font-semibold mb-6">
                    شعار المتجر
                  </p>
                  <div
                    onDragOver={handleDragOverC}
                    onDragLeave={handleDragLeaveC}
                    onDrop={handleDropC}
                    onClick={handleUploadClickC}
                    className={`border-2 border-dashed border-blue-950 px-20 py-4 rounded-lg flex justify-center items-center text-center cursor-pointer ${
                      isDragOverC ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <AiOutlineCloudUpload className="w-12 h-12 text-blue-950 mb-2 me-2" />
                    <p className="text-gray-600">
                      {fileC ? fileC.name : "Drag and Drop here"}
                    </p>
                    <input
                      type="file"
                      id="file-input-c"
                      className="hidden"
                      onChange={handleFileChangeC}
                    />
                  </div>
                  <button className="bg-blue-950 px-16 py-1 mt-6 text-white rounded-lg text-2xl">
                    اختيار
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-blue-950 text-white rounded-lg px-14 py-2 text-xl mb-10">
            <p>حفظ التغيرات</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
