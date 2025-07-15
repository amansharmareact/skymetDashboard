import React from "react";

const ParcelEstimateCard = () => {
  return (
    <div className="flex justify-between items-center border border-[#ECECED] rounded-xl px-6 mt-4 w-full h-[96px] text-[#717680] text-[16px] font-medium gap-8">
      <div>
        <p>Fields Selected:</p>
        <p className="text-[#414651] text-[24px] font-bold">6 Parcels</p>
      </div>
      <div>
        <p>Total Load Estimate:</p>
        <p className="text-[#414651] text-[24px] font-bold">10.9 Tons</p>
      </div>
      <div>
        <p>Route Estimate:</p>
        <p className="text-[#414651] text-[24px] font-bold">Approx. 18 km</p>
      </div>
    </div>
  );
};

export default ParcelEstimateCard;
