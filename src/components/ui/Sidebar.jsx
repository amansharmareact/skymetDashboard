import React, { useState } from "react";

const sidebarItems = [
  { icon: "/images/Home.svg", label: "Dashboard Home" },
  { icon: "/images/Insect.svg", label: "Crop Intelligence" },
  { icon: "/images/Capa_1.svg", label: "Production & Capacity" },
  { icon: "/images/Layer_1.svg", label: "Logistics & Transport" },
  { icon: "/images/Parcel Mapping.svg", label: "Parcel Mapping" },
  { icon: "/images/Calendar Planner.svg", label: "Calendar Planner" },
  { icon: "/images/Data Visualization Hub.svg", label: "Data Visualization Hub" },
  { icon: "/images/Analytics Tools.svg", label: "Analytics Tools" },
  { icon: "/images/Weather Intelligence.svg", label: "Weather Intelligence" },
  { icon: "/images/Harvest Priority.svg", label: "Harvest Priority (AI)" },
  { icon: "/images/User Management.svg", label: "User Management" },
  { icon: "/images/System Settings.svg", label: "System Settings" },
  { icon: "/images/Save.svg", label: "Exports" },
  { icon: "/images/Headphone.svg", label: "Help" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      onMouseLeave={() => {
        setExpanded(false);
        setHoveredIndex(null);
      }}
      className={`h-screen bg-white border-r border-[#D9FFCE] transition-all duration-300 ease-in-out flex flex-col ${expanded ? "w-60" : "w-[80px]"
        }`}
    >
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {sidebarItems.map((item, idx) => {
          const isSelected = selectedIndex === idx;
          const isHovered = hoveredIndex === idx;

          const bgClass = isSelected
            ? "bg-[#3B7C0F]"
            : isHovered
              ? "bg-gray-100"
              : "";

          const textColor = isSelected
            ? "text-white"
            : "text-[#86CB3C]";

          return (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setExpanded(true);
              }}
              className={`group flex items-center px-3 py-2 rounded-[32px] cursor-pointer transition-all duration-200 ${bgClass}`}
            >
              <div className="w-6 h-6 flex justify-center items-center shrink-0">
                <img
                  src={item.icon}
                  alt={item.label}
                  className={`transition duration-200 ${selectedIndex === idx
                    ? "w-5 h-5" // selected icon size
                    : "w-4 h-4" // normal icon size
                    } ${selectedIndex === idx ? "filter invert brightness-0" : ""}`}
                />
              </div>
              <span
                className={`ml-3 text-[13px] font-medium transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${expanded ? `opacity-100 max-w-[160px] ${textColor}` : "opacity-0 max-w-0 text-transparent"
                  }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
        {/* Logout + Version Section */}
        <div className="mt-auto flex items-center justify-between">
          {/* Logout Button */}
          <div
            className="flex items-center bg-[#FEF3F2] justify-center rounded-xl cursor-pointer w-full max-w-[200px]"
          >
            <img
              src="/images/Logout.svg"
              alt="Logout"
              className="w-[36px] h-[36px]"
            />
            {expanded && (
              <span className="text-[14px] font-semibold text-[#F24726]">
                Logout
              </span>
            )}
          </div>

          {/* Version Info */}
          {expanded && (
            <div className="text-right ml-2 w-[151px] h-[48px]">
              <p className="text-[14px] font-semibold text-black leading-tight">
                Version
              </p>
              <p className="text-[14px] font-semibold text-black leading-tight">
                1.50.00
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
