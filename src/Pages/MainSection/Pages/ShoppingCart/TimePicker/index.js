import React, { useState } from "react";

const TimePicker = () => {
  // State to hold the selected time, initialized to 06:28:55 PM
  const [time, setTime] = useState({
    hour: "06",
    minute: "28",
    second: "55",
    period: "PM",
  });

  // Function to update the time state when a selection is made
  const handleChange = (type, value) => {
    setTime((prev) => ({
      ...prev,
      [type]: value, // Update the specific time component (hour, minute, second, or period)
    }));
  };

  // Utility function to create an array of time values (e.g., hours, minutes, seconds)
  const createTimeArray = (count, step = 1) => {
    return Array.from(
      { length: count },
      (_, i) => String(i * step).padStart(2, "0") // Ensures time values are two digits (e.g., "01", "02")
    );
  };

  return (
    <div className="w-full max-w-[40rem] mx-auto mt-10">
      {/* Label for the time picker */}
      <label className="block text-center text-gray-700 text-sm mb-2 border py-4 rounded-lg">
        اختيار الوقت
      </label>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
        {/* Time Picker Container */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Hours Select Dropdown */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <select
              className="w-full text-center bg-white border border-gray-300 rounded-lg p-2 focus:outline-none"
              value={time.hour}
              onChange={(e) => handleChange("hour", e.target.value)} // Update hour in state
            >
              {createTimeArray(12, 1).map((hour) => (
                <option key={hour} value={hour}>
                  {hour} {/* Display hour options (1 to 12) */}
                </option>
              ))}
            </select>
          </div>

          {/* Minutes Select Dropdown */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <select
              className="w-full text-center bg-white border border-gray-300 rounded-lg p-2 focus:outline-none"
              value={time.minute}
              onChange={(e) => handleChange("minute", e.target.value)} // Update minute in state
            >
              {createTimeArray(60).map((minute) => (
                <option key={minute} value={minute}>
                  {minute} {/* Display minute options (0 to 59) */}
                </option>
              ))}
            </select>
          </div>

          {/* Seconds Select Dropdown */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <select
              className="w-full text-center bg-white border border-gray-300 rounded-lg p-2 focus:outline-none"
              value={time.second}
              onChange={(e) => handleChange("second", e.target.value)} // Update second in state
            >
              {createTimeArray(60).map((second) => (
                <option key={second} value={second}>
                  {second} {/* Display second options (0 to 59) */}
                </option>
              ))}
            </select>
          </div>

          {/* AM/PM Select Dropdown */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <select
              className="w-full text-center bg-white border border-gray-300 rounded-lg p-2 focus:outline-none"
              value={time.period}
              onChange={(e) => handleChange("period", e.target.value)} // Update AM/PM in state
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {/* Display the selected time */}
        <div className="mt-4 text-lg font-semibold">
          {`${time.hour} : ${time.minute} : ${time.second} ${time.period}`}{" "}
          {/* Format time for display */}
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
