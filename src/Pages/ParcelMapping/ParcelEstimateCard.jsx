import React from "react";

const ParcelEstimateCard = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start border border-[#ECECED] rounded-2xl mt-4 text-[#717680] text-base font-medium gap-4 p-4">
      <div className="flex flex-col w-full sm:w-auto justify-start">
        <p>Fields Selected:</p>
        <p className="text-[#414651] text-2xl font-bold">6 Parcels</p>
      </div>
      <div className="flex flex-col w-full sm:w-auto justify-start">
        <p>Total Load Estimate:</p>
        <p className="text-[#414651] text-2xl font-bold">10.9 Tons</p>
      </div>
      <div className="flex flex-col w-full sm:w-auto justify-start">
        <p>Route Estimate:</p>
        <p className="text-[#414651] text-2xl font-bold">Approx. 18 km</p>
      </div>
    </div>
  );
};

export default ParcelEstimateCard;
