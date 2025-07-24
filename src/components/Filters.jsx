import {
  ArrowRight,
  ChevronDown,
  CircleQuestionMark,
  Filter,
} from "lucide-react";
import { useState } from "react";
import CustomDropdown from "./ui/Dropdown";
import FilterModal from "./ui/FilterModal";

const Filters = ({ visibleFilters = {}, lastSync, apply, className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full flex items-end justify-between gap-4 flex-wrap ${className}`}>
      {/* Filter dropdowns container */}
      <div className="flex flex-1 flex-wrap items-end gap-2 overflow-hidden mt-[16px]">
        {/* Select CBG Plant */}
        {visibleFilters.selectPlant !== false && (
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1 whitespace-nowrap">
              <span>
                Select CBG Plant
              </span>
              <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
            </label>
            <div className="relative">
              <select className="appearance-none border border-[#ACDC79] rounded-full pl-4 pr-8 py-1 text-sm text-gray-700 w-full h-[40px] bg-[#F6FEF9]">
                <option>Select CBG Plant</option>
              </select>
              <ChevronDown className="w-4 h-4 m-1 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
            </div>
          </div>
        )}

        {/* Current Region */}
        {visibleFilters.region !== false && (
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1 whitespace-nowrap">
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
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1 whitespace-nowrap">
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
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1 whitespace-nowrap">
              <span>
                Overlay Toggle Group
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
          <div className="flex flex-col flex-1 min-w-0">
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1 whitespace-nowrap">
              <span>Search village/Parcel</span>
            </label>
            <div className="relative w-full">
              <CustomDropdown />
            </div>
          </div>
        )}

        {/* Filter Icon */}
        {visibleFilters.filter !== false && (
          <div className="w-[44px] border border-[#D5D7DA] h-[44px] bg-white p-3 rounded-[8px] flex items-center justify-center flex-shrink-0">
            <Filter />
          </div>
        )}
      </div>

      {/* Actions (Apply, Last Synced, Refresh) */}
      <div className="flex gap-2 items-center flex-shrink-0">
        {/* Apply Button */}
        {visibleFilters.apply !== false && (
          <div className="w-[109px] h-[44px] flex items-center justify-center gap-2 bg-[#4CA30D] text-white px-[18px] py-[12px] rounded-lg text-sm font-medium cursor-pointer flex-shrink-0">
            <div>Apply</div>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}

        {/* Last Synced */}
        {visibleFilters.lastSync !== false && (
          <div className="flex items-center gap-2 text-xs text-gray-500 flex-shrink-0">
            <div className="bg-white w-[44px] h-[44px] flex items-center justify-center gap-1 cursor-pointer rounded-md shadow-sm border border-[#D5D7DA]">
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

        {/* Refresh Icon Only */}
        {visibleFilters.refresh !== false && (
          <div className="flex items-center gap-2 text-xs text-gray-500 flex-shrink-0">
            <div className="bg-white w-[44px] h-[44px] flex items-center justify-center gap-1 cursor-pointer rounded-md shadow-sm border border-[#D5D7DA]">
              <img
                alt="Refresh Icon"
                src="/images/RefreshIcon.svg"
                className="w-[20px] h-[20px] text-green-700"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;