import React from "react";

const RouteCard = () => {
  const route = [
    {
      name: "Chikodi",
      icon: "/images/Location.svg",
      bg: "bg-white",
      border: "border-green-500",
      text: "text-black",
    },
    {
      name: "Shirgaon",
      icon: "/images/RedPin.svg",
      bg: "bg-[#FFF8F1]",
      border: "border-[#FCD2A4]",
      text: "text-black",
    },
    {
      name: "Nipani",
      icon: "/images/RedPin.svg",
      bg: "bg-[#FFF8F1]",
      border: "border-[#FCD2A4]",
      text: "text-black",
    },
    {
      name: "Gadinglaj",
      icon: "/images/RedPin.svg",
      bg: "bg-[#FFF8F1]",
      border: "border-[#FCD2A4]",
      text: "text-black",
    },
    {
      name: "Ajara",
      icon: "/images/RedPin.svg",
      bg: "bg-[#FFF8F1]",
      border: "border-[#FCD2A4]",
      text: "text-black",
    },
    {
      name: "Kolhapur CBG Plant",
      icon: "/images/Factory.svg",
      bg: "bg-blue-50",
      border: "border-blue-400",
      text: "text-blue-700",
    },
  ];

  return (
    <div className="w-full h-[148px]  rounded-2xl px-6 py-4 bg-[#0A0D12] flex flex-col gap-3 text-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-md font-medium text-white">TRP-3409</h1>
        <span className="flex items-center justify-center text-[13px] font-semibold px-2 py-[2px] rounded-full bg-[#FEF6EE] text-orange-600 border border-[#F7B27A]">
          <div className="w-[5px] h-[5px] bg-[#E04F16] rounded-full mr-2"></div>{" "}
          En Route
        </span>
      </div>

      {/* Route Steps */}
      <div className="bg-[#0E1117] rounded-xl border border-[#252B37] px-3 py-2 flex flex-col gap-2">
        <div className="flex items-center gap-2 overflow-x-auto max-w-full">
          {route.slice(0, 3).map((loc, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`flex items-center gap-1 px-[8px] py-[3px] rounded-[24px] border ${loc.bg} ${loc.border} ${loc.text} whitespace-nowrap overflow-hidden max-w-[120px]`}
                style={{ minWidth: 0 }}
              >
                <img src={loc.icon} alt="icon" className="w-4 h-4 shrink-0" />
                <span className="text-xs text-[#252B37] font-medium truncate">
                  {loc.name}
                </span>
              </div>
              {idx !== 2 && <span className="text-white">→</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {route.slice(3).map((loc, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-full border ${loc.bg} ${loc.border} ${loc.text} max-w-[143px]`}
              >
                <img src={loc.icon} alt="icon" className="w-4 h-4 shrink-0" />
                <span className="text-xs font-medium text-[#252B37]">
                  {loc.name}
                </span>
              </div>
              {idx !== route.slice(3).length - 1 && (
                <span className="text-white">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
