import React from "react";

const WeatherForecast = () => {
  return (
    <div className="space-y-2 w-full">
      <p className="text-[#717680] font-bold text-sm ml-2 mb-2">Weather Forecast</p>
      <div className="flex items-center justify-between">
        {/* Card 1 - Sunny */}
        <div className="w-[145px] h-[100px] border rounded-2xl flex justify-between flex-col px-3 py-2">
          <div className="text-left flex justify-between items-center">
            <img src="/icons/sunny.svg" alt="Sunny" className="w-6 h-6" />
            <div className="">
              <p className="text-xs text-[#414651]">Thu, 26 June</p>
              <p className="text-xl font-semibold text-[#1D2739]">Sunny</p>
            </div>
          </div>
          <p className="text-xs text-[#717680]">Ideal Collection Day</p>
        </div>

        {/* Card 2 - Moderate Rain */}
        <div className="w-[145px] h-[100px] border rounded-2xl flex justify-between flex-col px-3 py-2">
          <div className="text-left flex justify-between">
            <img src="/icons/rain.svg" alt="Rain" className="w-6 h-6" />
            <div className="">
              <p className="text-xs text-[#414651]">Fri, 27 June</p>
              <p className="text-xl font-semibold text-[#1D2739]">Mod. Rain</p>
            </div>
          </div>
          <p className="text-xs text-[#414651]">Collection Risk</p>
        </div>

        {/* Card 3 - Cloudy */}
        <div className="w-[145px] h-[100px] border rounded-2xl flex justify-between flex-col px-3 py-2">
          <div className="text-left flex justify-between">
            <img src="/icons/cloudy.svg" alt="Cloudy" className="w-6 h-6" />
            <div className="">
              <p className="text-xs text-[#414651]">Sat, 28 June</p>
              <p className="text-xl font-semibold text-[#1D2739]">Cloudy</p>
            </div>
          </div>
          <p className="text-xs text-[#414651]">No Alert</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
