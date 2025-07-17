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
const Filters = ({ visibleFilters = {} }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-wrap gap-[5px] mt-[16px] items-center">
      {/* Select CBG Plant */}
      {visibleFilters.selectPlant !== false && (
        <div className="flex flex-col">
          <div className="">
            <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
              <span>
                Select CBG Plant{" "}
                <span className="text-[#1570EF] font-medium">*</span>
              </span>
              <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
            </label>
            <div className="relative">
              <select className="border border-[#ACDC79] rounded-full pl-4 pr-8 py-1 text-sm text-gray-700 w-[228px] h-[40px] bg-[#F6FEF9]">
                <option>Select CBG Plant...</option>
              </select>
              {/*/!*<ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />*!/ was unnecessary*/}
            </div>
          </div>
        </div>
      )}

      {/* Current Region */}
      {visibleFilters.region !== false && (
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Current Region <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="w-[228px] relative bg-[#F6FEF9]">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/* Crop Picker */}
      {visibleFilters.crop !== false && (
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Crop <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="w-[228px] relative">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/* Season Filter */}
      {visibleFilters.season !== false && (
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Overlay Toggle Group{" "}
              <span className="text-[#1570EF] font-medium">*</span>
            </span>
            <CircleQuestionMark className="w-3 h-3 text-gray-400 cursor-help" />
          </label>
          <div className="w-[228px] relative">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/*Village Filter*/}
      {visibleFilters.village !== false && (
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1">
            <span>
              Search village/Parcel
            </span>
          </label>
          <div className="w-[228px] relative">
            <CustomDropdown />
          </div>
        </div>
      )}

      {/* Apply Button */}
      <>
        <div
          className="bg-white border  border-[#D5D7DA] p-[12px]  w-[44px] h-[44px] flex items-center justify-center gap-1 cursor-pointer rounded-md shadow-sm"
          onClick={() => setOpen(true)}
        >
          <Filter className="w-[16px] h-[16px] text-[#A4A7AE]" />
        </div>
        <FilterModal isOpen={open} onClose={() => setOpen(false)} />
      </>

      <div className=" w-[109px] h-[44px] flex items-center justify-center gap-2 bg-[#4CA30D] text-white px-4 py-2 rounded-lg  text-sm font-medium cursor-pointer">
        <div>Apply</div>
        <ArrowRight className="w-4 h-4" />
      </div>

      {/* Last Synced */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
        <div className="bg-white w-[44px] h-[44px] flex items-center justify-center gap-1 cursor-pointer rounded-md shadow-sm">
          <img src="/images/RefreshIcon.svg" className="w-[20px] h-[20px] text-green-700" />

        </div>
        <div className="flex flex-col">
          <span>Last Synced</span>
          <span className="text-gray-700 font-medium">21/08/2025 14:23</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
