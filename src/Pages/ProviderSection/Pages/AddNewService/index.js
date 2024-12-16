import React, { useState } from "react";
import HeaderProviderSection from "../../Components/Header";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddNewService = () => {
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [subServices, setSubServices] = useState([]); // State to manage sub-services

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleUploadClick = () => {
    document.getElementById("file-input").click();
  };

  const addSubService = () => {
    setSubServices([...subServices, { id: Date.now() }]); // Add a new sub-service with a unique ID
  };

  const deleteSubService = (id) => {
    setSubServices(subServices.filter((service) => service.id !== id)); // Remove the sub-service by ID
  };

  return (
    <div>
      <HeaderProviderSection />

      <div className="h-screen container mx-auto my-10 px-4 sm:px-2 md:px-16 lg:px-14">
        <div className="flex flex-col justify-end items-end my-4 text-end">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <p className="text-blue-900 text-3xl mb-10 font-bold">
              اضافة خدمة جديدة
            </p>
            <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
              اسم الخدمة (عربي)
            </p>
            <input
              type="text"
              className="w-full md:w-96 pe-4 ps-12 py-4 text-right border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="اسم الخدمة"
            />
            <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
              اسم الخدمة (إنجليزي)
            </p>
            <input
              type="text"
              className="w-full md:w-96 pe-4 ps-12 py-4 text-right border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="اسم الخدمة"
            />

            <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
              وصف الخدمة الأساسية (عربي)
            </p>

            <textarea className="border border-gray-400 rounded-lg w-full h-36 md:w-[450px]" />
            <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
              وصف الخدمة الأساسية (انجليزي)
            </p>

            <textarea className="border border-gray-400 rounded-lg w-full h-36 md:w-[450px]" />

            <p className="text-blue-950 text-xl mb-2 font-700">
              سعر الخدمة الأساسية
            </p>
            <input
              type="text"
              className="w-full md:w-96 pe-4 ps-12 py-4 text-right border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="flex flex-col justify-center items-end">
              <p className="text-blue-950 text-xl mb-2 mt-5 font-700 ">
                صورة الخدمة
              </p>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleUploadClick}
                className={`border-2 border-dashed border-blue-950 px-8 md:px-32 py-4 rounded-lg text-center cursor-pointer ${
                  isDragOver
                    ? "bg-gray-100"
                    : "bg-white flex justify-center items-center"
                }`}
              >
                <AiOutlineCloudUpload className="w-12 h-12 text-blue-950 mb-2" />
                <p className="text-gray-600">
                  {file ? file.name : "Drag and Drop here"}
                </p>
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <button className="text-white bg-blue-950 px-10 py-2 my-6 rounded-lg">
                اختيار
              </button>
            </div>

            <button
              onClick={addSubService}
              className="text-white bg-blue-950 px-10 py-2 my-6 rounded-lg"
            >
              اضافة خدمة فرعية
            </button>
          </div>
        </div>

        {/* Service Subsection */}
        {subServices.map((service) => (
          <div key={service.id} className="mt-6 flex item-end justify-end ">
            <div className="border border-gray-400 rounded-lg p-4 text-end w-[900px]">
              <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
                اسم الخدمة الفرعية (عربي)
              </p>
              <input
                type="text"
                className="w-full md:w-96 pe-4 ps-12 py-4 text-right border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
                اسم الخدمة الفرعية (انجليزي)
              </p>
              <input
                type="text"
                className="w-full md:w-96 pe-4 ps-12 py-4 text-right border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
                وصف الخدمة الفرعية (عربي)
              </p>

              <textarea className="border border-gray-400 rounded-lg w-full h-36 md:w-[450px]" />
              <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
                وصف الخدمة الفرعية (انجليزي)
              </p>

              <textarea className="border border-gray-400 rounded-lg w-full h-36 md:w-[450px]" />

              <p className="text-blue-950 text-xl mb-2 mt-5 font-700">
                سعر الخدمة الفرعية
              </p>
              <input
                type="text"
                className="w-full md:w-96 pe-4 ps-12 py-4 text-right border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <div className="flex justify-end space-x-2 my-6 text-gray-500">
                <p>إزالة</p>
                <RiDeleteBin6Line
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => deleteSubService(service.id)} // Delete the sub-service on click
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center">
          <button className="text-white bg-blue-950 px-10 py-2 my-10 rounded-lg">
            تقديم الطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
