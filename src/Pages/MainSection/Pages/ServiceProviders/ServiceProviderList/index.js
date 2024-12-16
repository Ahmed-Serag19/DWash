import React from "react";
import MainHeader from "../../../Components/Header";
import Sort from "../../../../../Assets/sort.png";
import Search from "../../../../../Assets/search.png";
import ServicesA from "../../../../../Assets/ServiceA.png";
import ServicesB from "../../../../../Assets/ServiceB.png";
import ServicesC from "../../../../../Assets/ServiceC.png";
import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ServiceProviderList = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  return (
    <div>
      <MainHeader />
      {/* Render the main header */}

      <div className="h-screen container mx-auto w-13/15 sm:w-4/5 px-5 py-4 ">
        <div className="flex flex-col justify-center items-center space-y-6">
          {/* Title and subtitle for the service providers */}
          <p className="text-blue-950 text-3xl font-bold text-center">
            مقدمي غسيل السيارات
          </p>
          <p className="text-gray-700 text-xl">مزودين خدمات غسيل السيارات</p>
        </div>
        {/* Search bar */}

        <div className="flex flex-col md:flex-row justify-between items-center relative mt-10">
          {/* Sort Icon */}
          <img src={Sort} className="w-8 h-8 mb-4 md:mb-0" />

          {/* Search Bar */}
          <div className="mb-8 w-full md:w-3/4 flex justify-end relative">
            <input
              type="email"
              id="email"
              style={{ height: "40px", width: "300px" }}
              className="pe-12 ps-12 py-4 text-right bg-white rounded-md border border-[#66666666] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder="البريد الإلكتروني"
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <img src={Search} alt="Search" />
            </span>
          </div>
        </div>
        {/* Service Provider Card */}
        {/** This card will be repeated for each service provider */}
        <div
          onClick={() => navigate("/main-access-page")} // Navigate to main access page on click
          className="flex flex-col md:flex-row justify-center items-center border rounded my-10 cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center py-10 px-8">
            <p className="text-2xl text-blue-950 mb-6">شركة رغوة الغسيل</p>
            {/* Service provider name */}
            <p className="text-gray-700 mb-16 text-center">
              {/* Description of the service provider in Arabic */}
              تعد خدمات غسيل السيارات من الخدمات الأساسية التي يحتاجها أصحاب
              السيارات للحفاظ على نظافة ومظهر سياراتهم، سواء من الخارج أو
              الداخل. مع التقدم التكنولوجي، تطورت هذه الخدمات لتصبح أكثر كفاءة
              وملاءمة للعملاء. تقدم شركات غسيل السيارات الحديثة حلولاً متكاملة
              تشمل الغسيل اليدوي والآلي باستخدام مواد صديقة للبيئة وتجهيزات
              متطورة تضمن تنظيف السيارة بعمق وحماية طلاء السيارة. سواء كان ذلك
              من خلال محطات الغسيل التقليدية أو من خلال الخدمات المتنقلة التي
              تصل إلى مكان العميل، تسعى هذه الخدمات لتوفير راحة العميل مع
              المحافظة على أعلى معايير الجودة.
            </p>
            <p className="text-gray-700">عدد المقيمين</p>
            {/* Star rating for the service provider */}
            <div className="flex mt-6 space-x-2">
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
            </div>
          </div>
          <div>
            <img
              className="h-[405px] w-screen"
              src={ServicesC}
              alt="No Preview"
            />
          </div>
        </div>
        <div
          onClick={() => navigate("/main-access-page")}
          className="flex flex-col md:flex-row justify-center items-center border rounded my-10 cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center  py-10 px-8">
            <p className="text-2xl text-blue-950 mb-6">شركة رغوة الغسيل</p>
            {/* Service provider name */}
            <p className="text-gray-700 mb-16 text-center">
              {/* Description of the service provider in Arabic */}
              تعد خدمات غسيل السيارات من الخدمات الأساسية التي يحتاجها أصحاب
              السيارات للحفاظ على نظافة ومظهر سياراتهم، سواء من الخارج أو
              الداخل. مع التقدم التكنولوجي، تطورت هذه الخدمات لتصبح أكثر كفاءة
              وملاءمة للعملاء. تقدم شركات غسيل السيارات الحديثة حلولاً متكاملة
              تشمل الغسيل اليدوي والآلي باستخدام مواد صديقة للبيئة وتجهيزات
              متطورة تضمن تنظيف السيارة بعمق وحماية طلاء السيارة. سواء كان ذلك
              من خلال محطات الغسيل التقليدية أو من خلال الخدمات المتنقلة التي
              تصل إلى مكان العميل، تسعى هذه الخدمات لتوفير راحة العميل مع
              المحافظة على أعلى معايير الجودة.
            </p>
            <p className="text-gray-700">عدد المقيمين</p>
            {/* Star rating for the service provider */}
            <div className="flex mt-6 space-x-2">
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
            </div>
          </div>
          <div>
            <img
              className="h-[405px] w-screen"
              src={ServicesA}
              alt="No Preview"
            />
          </div>
        </div>

        <div
          onClick={() => navigate("/main-access-page")}
          className="flex flex-col md:flex-row justify-center items-center border rounded my-10 cursor-pointer"
        >
          <div className="flex flex-col justify-center items-center  py-10 px-8">
            <p className="text-2xl text-blue-950 mb-6">شركة رغوة الغسيل</p>
            {/* Service provider name */}
            <p className="text-gray-700 mb-16 text-center">
              {/* Description of the service provider in Arabic */}
              تعد خدمات غسيل السيارات من الخدمات الأساسية التي يحتاجها أصحاب
              السيارات للحفاظ على نظافة ومظهر سياراتهم، سواء من الخارج أو
              الداخل. مع التقدم التكنولوجي، تطورت هذه الخدمات لتصبح أكثر كفاءة
              وملاءمة للعملاء. تقدم شركات غسيل السيارات الحديثة حلولاً متكاملة
              تشمل الغسيل اليدوي والآلي باستخدام مواد صديقة للبيئة وتجهيزات
              متطورة تضمن تنظيف السيارة بعمق وحماية طلاء السيارة. سواء كان ذلك
              من خلال محطات الغسيل التقليدية أو من خلال الخدمات المتنقلة التي
              تصل إلى مكان العميل، تسعى هذه الخدمات لتوفير راحة العميل مع
              المحافظة على أعلى معايير الجودة.
            </p>
            <p className="text-gray-700">عدد المقيمين</p>
            {/* Star rating for the service provider */}
            <div className="flex mt-6 space-x-2">
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
              <IoStar className="text-orange-300" />
            </div>
          </div>
          <div>
            <img
              className="h-[405px] w-screen"
              src={ServicesB}
              alt="No Preview"
            />
          </div>
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center pt-16 pb-16">
          <div className=" flex justify-between items-center space-x-6 ">
            <p className="text-gray-400">التالي</p>
            <button className="bg-blue-950 rounded-full px-4 py-2 text-white text-lg">
              1
            </button>
            <p className="text-gray-400">السابق</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderList;
