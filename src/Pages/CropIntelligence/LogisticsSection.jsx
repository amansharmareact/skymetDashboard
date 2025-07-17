import React from "react";

const LogisticsSection = () => {
  return (
    <div className="w-[540px] h-[212px] mt-[16px]">
      <p className="text-[#717680] font-bold text-[14px] ml-2">
        Logistics & Field Activity
      </p>
      <div className="w-full rounded-2xl border border-[#ECECED] px-5 py-4 grid grid-cols-2 gap-y-4">
        {/* Next Trip Scheduled */}
        <div>
          <p className="text-[16px] text-[#717680] mb-1">Next Trip Scheduled</p>
          <p className="text-[18px] font-semibold text-[#1D2739]">
            27 June 2025 – Truck-04
          </p>
        </div>

        {/* Trip Status */}
        <div>
          <p className="text-[16px] text-[#717680] mb-1">Trip Status</p>
          <p className="text-[18px] font-semibold text-[#414651]">Pending</p>
        </div>

        {/* Pickup Type */}
        <div>
          <p className="text-[16px] text-[#717680] mb-1">Pickup Type</p>
          <p className="text-[18px] font-semibold text-[#414651]">Manual</p>
        </div>

        {/* Expected Load */}
        <div>
          <p className="text-[16px] text-[#717680] mb-1">Expected Load</p>
          <p className="text-[18px] font-semibold text-[#414651]">
            8.2 Tons (Est.)
          </p>
        </div>

        {/* Route Distance */}
        <div>
          <p className="text-[16px] text-[#717680] mb-1">Route Distance</p>
          <p className="text-[18px] font-semibold text-[#414651]">
            12.5 km from plant
          </p>
        </div>

        {/* Travel Time Estimate */}
        <div>
          <p className="text-[16px] text-[#717680] mb-1">Travel Time Estimate</p>
          <p className="text-[18px] font-semibold text-[#414651]">~35 mins</p>
        </div>
      </div>
    </div>
  );
};

export default LogisticsSection;
