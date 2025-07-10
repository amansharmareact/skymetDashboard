import { BsCopy } from "react-icons/bs";
import SemiCircleProgress from "./SemiCircleProgress";

const CropReadinessCard = () => {
  return (
    <div className="">
      <div className="text-[#717680] font-bold text-sm ml-2 mb-2">
        Crop + Harvest Summary :
      </div>
      <div className="grid grid-cols-2 gap-2 w-full max-w-xl leading-6">
        {/* Crop + Harvest Summary */}
        <div className="space-y-2 p-2 border border-[#ECECED] rounded-xl">
          <div className="text-md text-[#717680] font-normal">Crop Type</div>
          <div className="text-[24px] font-bold text-[#101828]">Sugarcane</div>

          <div className="text-md text-[#717680] font-normal">
            Yield Estimate
          </div>
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
        <div className="flex flex-col items-center justify-between rounded-xl border border-[#ECECED] px-2 py-4">
          <div className="flex items-center gap-1 text-[#717680] text-xs font-medium mb-1">
            <span>Readiness Score</span>
            <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
          </div>
          <SemiCircleProgress percentage={75} />
          <p className="text-[24px] font-bold text-[#414651] mt-2">
            Harvest Ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default CropReadinessCard;
