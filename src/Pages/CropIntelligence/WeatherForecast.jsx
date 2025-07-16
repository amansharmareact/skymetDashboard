import React from "react";

const WeatherForecast = () => {
  return (
    <div className="space-y-2 w-[540px] h-[130px] mt-2">
      <p className="text-[#717680] font-bold text-sm ml-2 mb-2">Weather Forecast</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
            className="w-[173.33px] h-[100px] border border-[#E5E7EB] rounded-2xl flex items-center gap-4 px-2 py-2 bg-white"
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
