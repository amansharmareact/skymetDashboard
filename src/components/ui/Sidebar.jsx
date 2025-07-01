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

  const handleItemClick = (idx) => {
    setSelectedIndex(idx);
    if (!expanded) setExpanded(true);
  };

  const handleLabelClick = () => {
    if (expanded) setExpanded(false);
  };
  const handleItemLeave=()=>{
    if (expanded) setExpanded(false);
  }

  return (
    <div
      className={`h-screen bg-white border-r border-[#D9FFCE] transition-all duration-300 ease-in-out ${expanded ? "w-60" : "w-[60px]"
        }`}
    >
      <div className="flex-1 overflow-y-auto flex flex-col space-y-2 py-4 px-2">
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => handleItemClick(idx)}
            onMouseLeave={() => handleItemLeave(idx)}
            className={`flex items-center gap-3 cursor-pointer rounded-md px-2 py-2 transition-all ${selectedIndex === idx && "bg-[#3B7C0F]"
              }`}
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            {expanded && (
              <span onClick={handleLabelClick} className={`text-[13px] font-medium ${selectedIndex === idx ? "text-white" : "text-[#22C55E]"}`}>
                {item.label}
              </span>
            )}
          </div>
        ))}

      </div>

      {/* Logout */}
      <div className="p-2 mt-auto flex items-center gap-2">
        <img
          src="/images/Logout.svg"
          alt="Logout"
          className="w-5 h-5 p-2 bg-[#FEE2E2] rounded-md"
        />
        <span
          className={`text-[13px] font-medium text-[#E14343] transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0"
            }`}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
