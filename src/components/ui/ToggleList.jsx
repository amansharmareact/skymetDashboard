import React, { useState } from "react";

const toggleItems = [
  "Crop Readiness",
  "Harvest Status",
  "Logistics Activity",
  "Weather Risk Zones",
  "Collection Center Network",
  "Crop Type Distribution",
];

const ToggleList = () => {
  const [activeToggle, setActiveToggle] = useState("Crop Readiness");

  return (
    <div className="bg-white p-4 w-[173px] rounded-2xl shadow-md space-y-4">
      {toggleItems.map((item) => (
        <div key={item} className="flex items-center space-x-3">
          <button
            className={`w-10 h-6 rounded-full p-[2px] transition-colors duration-300 ${
              activeToggle === item ? "bg-green-500" : "bg-gray-200"
            }`}
            onClick={() => setActiveToggle(item)}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                activeToggle === item ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-[16px] font-medium text-black">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default ToggleList;
