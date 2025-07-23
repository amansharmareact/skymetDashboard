import React from "react";

const PickupPoint = () => {
  const legendItemsLeft = [
    { icon: "/images/Pin.svg", label: "Pickup Point", color: "text-blue-600" },
    { icon: "/images/GreyPin.svg", label: "Scheduled", color: "text-gray-400" },
    {
      icon: "/images/GreenPin.svg",
      label: "Completed",
      color: "text-green-500",
    },
    {
      icon: "/images/RedPin.svg",
      label: "Skipped/Failed",
      color: "text-red-500",
    },
    { icon: "/images/CloudPin.svg", label: "Rain Risk" },
  ];

  const legendItemsRight = [
    { icon: "/images/Factory.svg", label: "CBG Plant" },
    { icon: "/images/TruckImg.svg", label: "Truck Location" },
    { icon: "/images/Warning.svg", label: "Risk Marker" },
  ];

  return (
    <div className="flex justify-between items-center bg-[#F5F5F5] rounded-xl px-4 py-2 shadow-sm text-sm font-medium">
      {/* Left group */}
      <div className="flex flex-wrap items-center gap-[14px]">
        {legendItemsLeft.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <span className={item.color}>
              <img src={item.icon} alt="Pin" />{" "}
            </span>
            <span className="text-[#181D27] font-medium text-[11px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="mx-4 w-px h-6 bg-gray-300" />

      {/* Right group */}
      <div className="flex flex-wrap items-center gap-4">
        {legendItemsRight.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <span>
              {" "}
              <img src={item.icon} alt="Pin" />
            </span>
            <span className="text-[#181D27] font-medium text-[14px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickupPoint;
