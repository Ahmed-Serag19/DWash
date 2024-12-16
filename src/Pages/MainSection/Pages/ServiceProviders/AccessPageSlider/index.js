import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const AccessPageSlider = () => {
  // State to track the current index of the testimonial being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of testimonial objects
  const testimonials = [
    {
      name: "Norah",
      location: "Qatar",
      rating: 5,
      text: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص",
    },
    {
      name: "Sara",
      location: "Qatar",
      rating: 4,
      text: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص",
    },
    {
      name: "Amna",
      location: "Qatar",
      rating: 4,
      text: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص",
    },
  ];

  // Function to handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="w-full max-w-4xl mx-auto text-center overflow-hidden mb-20">
        <div className="relative ">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <MdKeyboardArrowLeft className="w-8 h-8" />
          </button>

          {/* Slider Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full p-6 ">
                <div className="p-6 bg-white rounded-xl shadow-md border border-blue-950">
                  {/* Rating Stars */}
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          ★
                        </span>
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gray-300">
                          ★
                        </span>
                      ))}
                    </div>
                    {/* Testimonial Name */}
                    <h3 className="mt-4 text-xl font-bold ">
                      {testimonial.name}
                    </h3>
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-sm mt-4 ">{testimonial.text}</p>
                  {/* Testimonial Location */}
                  <span className="text-gray-500 text-sm">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <MdKeyboardArrowRight className="w-8 h-8" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-indigo-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessPageSlider;
