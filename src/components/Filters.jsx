import {
  ArrowRight,
  ChevronDown,
  CircleQuestionMark,
  Filter,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import CustomDropdown from "./ui/Dropdown";
import FilterModal from "./ui/FilterModal";
const Filters = ({ visibleFilters = {}, lastSync, apply }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-nowrap gap-[12px] mt-[16px] items-center">
      {/* Select CBG Plant */}
      {visibleFilters.selectPlant !== false && (
        <div className="flex flex-col flex-grow flex-shrink min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[220px] lg:max-w-[240px]">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Select CBG Plant{" "}
              <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="relative">
            <select className="appearance-none border border-[#ACDC79] rounded-full pl-4 pr-8 py-1 text-sm text-gray-700 w-full h-[40px] bg-[#F6FEF9]">
              <option>Select CBG Plant...</option>
            </select>
            <ChevronDown className="w-4 h-4 m-1 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Current Region */}
      {visibleFilters.region !== false && (
        <div className="flex flex-col flex-grow flex-shrink min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[220px] lg:max-w-[240px]">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Current Region <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="relative bg-[#F6FEF9] w-full">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/* Crop Picker */}
      {visibleFilters.crop !== false && (
        <div className="flex flex-col flex-grow flex-shrink min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[220px] lg:max-w-[240px]">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Crop <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="relative w-full">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/* Season Filter */}
      {visibleFilters.season !== false && (
        <div className="flex flex-col flex-grow flex-shrink min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[220px] lg:max-w-[240px]">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Overlay Toggle Group{" "}
              <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="relative w-full">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/* Village Filter */}
      {visibleFilters.village !== false && (
        <div className="flex flex-col flex-grow flex-shrink min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[220px] lg:max-w-[240px]">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>Search village/Parcel</span>
          </label>
          <div className="relative w-full">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/* Apply Button
      {apply && (
        <div className="flex-grow-0 flex-shrink-0 w-[109px] h-[44px] flex items-center justify-center gap-2 bg-[#4CA30D] text-white px-[18px] py-[12px] rounded-lg text-sm font-medium cursor-pointer">
          <div>Apply</div>
          <ArrowRight className="w-4 h-4" />
        </div>
      )} */}

      {/* Last Synced */}
      {lastSync !== false && (
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2 ml-[14px] flex-grow-0 flex-shrink-0">
          <div className="bg-white w-[44px] h-[44px] flex items-center justify-center gap-1 cursor-pointer rounded-md shadow-sm">
            <img
            alt="Refresh Icon"
              src="/images/RefreshIcon.svg"
              className="w-[20px] h-[20px] text-green-700"
            />
          </div>
          <div className="flex flex-col">
            <span>Last Synced</span>
            <span className="text-gray-700 font-medium">21/08/2025 14:23</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
