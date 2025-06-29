import React from "react";

const sidebarItems = [
  { icon: "/images/CBS Sidebar-items.svg", alt: "Home" },
  { icon: "/images/Insect.svg", alt: "Alert" },
  { icon: "/images/Capa_1.svg", alt: "Buildings" },
  { icon: "/images/Layer_1.svg", alt: "Truck" },
  { icon: "/images/Parcel Mapping.svg", alt: "Pin" },
  { icon: "/images/Calendar Planner.svg", alt: "Calendar" },
  { icon: "/images/Data Visualization Hub.svg", alt: "Email" },
  { icon: "/images/Analytics Tools.svg", alt: "Card" },
  { icon: "/images/Weather Intelligence.svg", alt: "Weather" },
  { icon: "/images/Harvest Priority.svg", alt: "Delivery" },
  { icon: "/images/User Management.svg", alt: "Report" },
  { icon: "/images/System Settings.svg", alt: "Settings" },
  { icon: "/images/Save.svg", alt: "Chart" },
  { icon: "/images/Headphone.svg", alt: "Support" },
];

const Sidebar = () => {
  return (
    <div className="w-[60px] bg-white border-r border-[#D9FFCE] h-screen flex flex-col">
      {/* Scrollable Icon Section */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center space-y-5 py-4 px-2">
        {sidebarItems.map((item, idx) => (
          <img key={idx} src={item.icon} alt={item.alt} className="w-5 h-5" />
        ))}
      </div>

      {/* Logout at the bottom */}
      <div className="p-2 flex justify-center">
        <img src="/images/Logout.svg" alt="Logout" className="w-5 h-5 p-2 bg-[#FEE2E2] rounded-md" />
      </div>
    </div>
  );
};

export default Sidebar;
