import React, { useState } from "react";

const sidebarItems = [
  { icon: "/images/CBS Sidebar-items.svg", label: "Dashboard Home" },
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

  const handleItemHover = (idx) => {
    setSelectedIndex(idx);
    setExpanded(true);
  };

  return (
    <div
      onMouseLeave={() => setExpanded(false)}
      className={`h-screen bg-white border-r border-[#D9FFCE] transition-all duration-300 ease-in-out flex flex-col ${expanded ? "w-60" : "w-[80px]"}`}
    >
      <div className="flex-1 overflow-y-auto py-4 px-2">
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => handleItemHover(idx)}
            className={`group flex items-center px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ${selectedIndex === idx ? "bg-[#3B7C0F]" : ""}`}
          >
            <div className="w-6 h-6 flex justify-center items-center shrink-0">
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
            </div>

            {/* Text label */}
            <span
              className={`ml-3 text-[13px] font-medium transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                expanded
                  ? "opacity-100 text-[#22C55E] max-w-[160px]"
                  : "opacity-0 max-w-0 text-transparent"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Logout Section */}
      <div className="p-3 flex items-center">
        <div className="w-6 h-6 flex justify-center items-center">
          <img
            src="/images/Logout.svg"
            alt="Logout"
            className="w-5 h-5 p-1 bg-[#FEE2E2] rounded-md"
          />
        </div>
        <span
          className={`ml-3 text-[13px] font-medium text-[#E14343] transition-all duration-300 overflow-hidden whitespace-nowrap ${
            expanded ? "opacity-100 max-w-[160px]" : "opacity-0 max-w-0"
          }`}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
