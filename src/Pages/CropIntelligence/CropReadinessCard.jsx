import { BsCopy } from "react-icons/bs";
import SemiCircleProgress from "./SemiCircleProgress";

const CropReadinessCard = () => {
  return (
    <div className="w-full p-0 mt-4 flex flex-wrap">
      <div className="text-[#717680] font-bold text-[14px] ml-2 mb-2 w-full">
        Crop + Harvest Summary :
      </div>

      <div className="w-full grid-col-1 gap-4 lg:max-w-5xl grid grid-cols-2">
        {/* Crop + Harvest Summary */}
        <div className="w-full h-auto p-4 border border-[#ECECED] rounded-xl space-y-2">
          <div className="text-md text-[#717680] text-[16px] font-normal">
            Crop Type
          </div>
          <div className="text-[22px] lg:text-[24px] font-bold text-[#414651]">
            Sugarcane
          </div>

          <div className="text-[16px] text-[#717680] font-normal">
            Yield Estimate
          </div>
          <div className="text-[22px] lg:text-[24px] font-bold text-[#414651]">
            12.4 tons
          </div>

          <div className="text-[16px] text-[#717680] font-normal">
            Forecast Harvest Date
          </div>
          <div className="text-[22px] lg:text-[24px] font-bold text-[#414651]">
            ETA:
            <span className="text-[#079455]"> 26 June 2025</span>
          </div>

          <div className="text-[16px] text-[#717680] font-normal">Biomass Type</div>
          <div className="text-[22px] lg:text-[24px] font-bold text-[#414651]">
            Wet Biomass
          </div>
        </div>

        {/* Readiness Score */}
        <div className="w-full flex flex-col items-center justify-between rounded-xl border border-[#ECECED] px-4 py-6">
          <div className="flex items-center gap-1 text-[#717680] text-xs font-medium mb-2">
            <span>Readiness Score</span>
            <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
          </div>
          <div>
            <SemiCircleProgress percentage={75} />
          </div>
          <p className="text-[22px] lg:text-[24px] font-bold text-[#414651] mt-3">
            Harvest Ready
          </p>
        </div>
      </div>
    </div>
  );
};

export default CropReadinessCard;
