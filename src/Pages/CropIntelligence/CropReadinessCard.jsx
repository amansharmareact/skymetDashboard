import { BsCopy } from "react-icons/bs";

const CropReadinessCard = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full max-w-xl">
      {/* Crop + Harvest Summary */}
      <div className="space-y-2 p-2 border border-[#ECECED] rounded-xl">
        <div className="text-md text-[#717680] font-normal">Crop Type</div>
        <div className="text-[24px] font-bold text-[#101828]">Sugarcane</div>

        <div className="text-md text-[#717680] font-normal">Yield Estimate</div>
        <div className="text-[24px] font-bold text-[#101828]">12.4 tons</div>

        <div className="text-md text-[#717680] font-normal">
          Forecast Harvest Date
        </div>
        <div className="text-[24px] font-bold text-[#101828]">
          ETA:
          <span className="text-[#079455]"> 26 June 2025</span>
        </div>

        <div className="text-md text-[#717680] font-normal">Biomass Type</div>
        <div className="text-[24px] font-bold text-[#101828]">Wet Biomas</div>
      </div>

      {/* Readiness Score */}
      <div className="flex flex-col items-center justify-center rounded-xl border border-[#ECECED] px-2 py-4">
        <div className="flex items-center gap-1 text-[#717680] text-xs font-medium mb-1">
          <span>Readiness Score</span>
          <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
        </div>
        <div className="relative w-28 h-14">
          {/* Semi Circular Progress Bar */}
          <svg viewBox="0 0 36 18" className="w-full h-full">
            <path
              d="M2,18 A16,16 0 0,1 34,18"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="4"
            />
            <path
              d="M2,18 A16,16 0 0,1 27,2"
              fill="none"
              stroke="#437329"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-end justify-center pb-1 text-lg font-semibold text-[#101828]">
            75%
          </div>
        </div>
        <p className="text-sm font-semibold text-[#101828] mt-2">
          Harvest Ready
        </p>
      </div>
    </div>
  );
};

export default CropReadinessCard;
