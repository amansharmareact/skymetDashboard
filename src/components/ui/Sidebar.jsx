import React, { useState } from "react";

const sidebarItems = [
  { icon: "/images/Home.svg", label: "Dashboard Home" },
  { icon: "/images/Insect.svg", label: "Crop Intelligence" },
  { icon: "/images/Capa_1.svg", label: "Production & Capacity" },
  { icon: "/images/Layer_1.svg", label: "Logistics & Transport" },
  { icon: "/images/Parcel Mapping.svg", label: "Parcel Mapping" },
  { icon: "/images/Calendar Planner.svg", label: "Calendar Planner" },
  {
    icon: "/images/Data Visualization Hub.svg",
    label: "Data Visualization Hub",
  },
  { icon: "/images/Analytics Tools.svg", label: "Analytics Tools" },
  { icon: "/images/Weather Intelligence.svg", label: "Weather Intelligence" },
  { icon: "/images/Harvest Priority.svg", label: "Harvest Priority (AI)" },
  { icon: "/images/User Management.svg", label: "User Management" },
  { icon: "/images/System Settings.svg", label: "System Settings" },
  { icon: "/images/Save.svg", label: "Exports" },
  { icon: "/images/Headphone.svg", label: "Help" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      onMouseLeave={() => {
        setExpanded(false);
        setHoveredIndex(null);
      }}
      className={`h-[90vh] bg-white border-r border-[#D9FFCE] transition-all duration-300 ease-in-out flex flex-col ${
        expanded ? "w-60" : "w-[80px]"
      }`}
    >
      <div className="no-scrollbar w-[80px] overflow-x-hidden flex-1 overflow-y-auto px-[18px] ">
        {sidebarItems.map((item, idx) => {
          const isSelected = selectedIndex === idx;
          const isHovered = hoveredIndex === idx;

          const bgClass = isSelected
            ? "bg-[#3B7C0F]"
            : isHovered
            ? "bg-[#E4E7EC]"
            : "";

          const textColor = isSelected ? "text-white" : "text-[#86CB3C]";

          return (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setExpanded(true);
              }}
              className={`${
                expanded ? "w-[212px] h-[48px]" : "w-[44px] h-[44px]"
              } p-[12px] group flex items-center rounded-[32px] cursor-pointer transition-all duration-200 ${bgClass}`}
            >
              <div className="">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`transition duration-200 ${
                    selectedIndex === idx
                      ? "w-[24px] h-[24px]" // selected icon size
                      : "w-[24px] h-[24px]" // normal icon size
                  } ${
                    selectedIndex === idx ? "filter invert brightness-0" : ""
                  }`}
                />
              </div>
              {expanded && (
                <span
                  className={`ml-3 text-[14px] font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${textColor}`}
                >
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
        {/* Logout + Version Section */}
        <div className="mt-auto flex items-center justify-space-around">
          {/* Logout Button */}
          <div
            className={`flex items-center bg-[#FEF3F2] justify-center rounded-xl cursor-pointer ${
              expanded ? "w-[151px] h-[48px]" : "w-[48px] h-[48px]"
            } `}
          >
            <img src="/images/Logout.svg" alt="Logout" />
            {expanded && (
              <span className="text-[14px] font-semibold text-[#F24726]">
                Logout
              </span>
            )}
          </div>

          {/* Version Info */}
          {expanded && (
            <div className="text-right flex flex-col items-center ml-4">
              <p className="text-[14px] font-semibold text-black">Version</p>
              <p className="text-[14px] font-semibold text-black">1.50.00</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
