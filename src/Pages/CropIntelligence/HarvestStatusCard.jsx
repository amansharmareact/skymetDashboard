import { RotateCcw } from "lucide-react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import CropReadinessCard from "./CropReadinessCard";
import LogisticsSection from "./LogisticsSection";
import MapImage from "./MapImage";
import PastCollection from "./PastCollection";
import VisitLog from "./VisitLog";
import WeatherForecast from "./WeatherForecast";

const HarvestStatusCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 space-y-4 text-sm text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 w-full">
        {/* Left: Sync Status */}
        <div className="flex items-center gap-3">
          <div className="border border-[#C8F169] bg-[#F0FCD6] rounded-md p-1 w-[36px] h-[36px] flex items-center justify-center">
            <RotateCcw className="w-[20px] h-[20px] text-green-700" />
          </div>
          <div>
            <p className="text-sm text-[#3F4857] font-medium">
              Last Sync Status
            </p>
            <p className="text-xs text-[#6C737F]">Updated 3 hrs ago</p>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 cursor-pointer">
          {/* Expand Icon */}
          <AiOutlineExpandAlt className="w-[20px] h-[20px]" />

          {/* Close Icon */}
          <IoMdClose className="w-[20px] h-[20px]" />
        </div>
      </div>

      {/* Map Image */}
      <MapImage />

      {/* Crop Harvest Summary */}
      <CropReadinessCard />

      {/* Weather Forecast */}
      <WeatherForecast />

      {/* Logistics */}
      <LogisticsSection />

      {/* Past Collection Attempts */}
      <PastCollection />

      {/* Visit Log */}
      <VisitLog />
    </div>
  );
};

export default HarvestStatusCard;
