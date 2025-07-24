import React from "react";

const WeatherForecast = () => {
  const cards = [
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
  ];

  return (
    <div className="w-full mt-[16px]">
      <p className="text-[#717680] font-bold text-sm ml-2 mb-2">Weather Forecast</p>
      <div className="flex gap-[10px] overflow-x-auto no-scrollbar">
        {cards?.map((card, index) => (
          <div
            key={index}
            className="min-w-[180px]  snap-start scroll-smooth snap-x  border border-[#E5E7EB] rounded-2xl flex items-center gap-[10px] bg-white h-full"
          >
            <div>
              <div className="flex justify-center p-[12px]">
                <img src={card.icon} alt={card.title} className="w-[42px] h-[42px]" />
                <div className="flex flex-col items-start ml-[10px]">
                  <p className="text-xs text-[#414651]">{card.date}</p>
                  <p className="text-xl font-semibold text-[#414651]">{card.title}</p>
                </div>
              </div>
              <p className="text-xs p-[12px]" style={{ color: card.noteColor }}>{card.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
