import React from "react";

const BioMassCard = () => {
  return (
    <div className="w-[345px] h-full border border-[#E9EAEB] rounded-[32px] px-6 py-5 flex flex-col justify-between">
      <p className="text-[#535862] text-sm font-normal">
        Total Biomass Available...
      </p>
      <div className="flex items-end gap-1">
        <span className="text-[40px] font-medium leading-none text-[#181D27]">
          108.5
        </span>
        <span className="text-sm font-medium text-[#181D27] mb-1">Tons</span>
      </div>
      <p className="text-[#535862] text-xs mt-1">Within selected radius</p>
    </div>
  );
};

export default BioMassCard;
