import React from "react";

const WeatherForecast = () => {
  return (
    <div className="w-full mt-[16px]">
      <p className="text-[#717680] font-bold text-sm ml-2 mb-2">Weather Forecast</p>
      <div className="flex flex-wrap justify-between items-center gap-[10px]">
        {/* Card */}
        {[
          {
            icon: "/images/Sunny.svg",
            date: "Thu, 26 June",
            title: "Sunny",
            note: "Ideal Collection Day",
            noteColor: "#717680",
          },
          {
            icon: "/images/Cloudy.svg",
            date: "Fri, 27 June",
            title: "Mod. Rain",
            note: "Collection Risk",
            noteColor: "#414651",
          },
          {
            icon: "/images/Rainy.svg",
            date: "Sat, 28 June",
            title: "Cloudy",
            note: "No Alert",
            noteColor: "#414651",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-[32%] border border-[#E5E7EB] rounded-2xl flex items-center gap-[10px] px-2 py-2 bg-white h-[100px]"
          >
            <img src={card.icon} alt={card.title} className="w-[42px] h-[42px]" />
            <div className="flex flex-col justify-center">
              <p className="text-xs text-[#414651]">{card.date}</p>
              <p className="text-xl font-semibold text-[#1D2739]">{card.title}</p>
              <p className="text-xs" style={{ color: card.noteColor }}>{card.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default WeatherForecast;
