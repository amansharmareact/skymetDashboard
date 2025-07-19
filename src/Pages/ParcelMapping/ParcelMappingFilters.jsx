import React, { useState } from "react";
import { ChevronDown, RotateCcw } from "lucide-react";
import CustomDropdown from "../../components/ui/Dropdown";
import CustomDateRangePicker from "./CustomDatePicker";
import LastSync from "../CropIntelligence/LastSync"; // import your range picker

const ParcelMappingFilters = ({ onDateRangeChange, visibleFilters = {} }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
  });

  const formatDate = (date) =>
    date?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const handleDateApply = (range) => {
    setSelectedRange(range);
    setShowDatePicker(false);
    onDateRangeChange?.(range); // optional: notify parent
  };

  return (
    <>
      <div className="flex items-center px-[20px] flex-wrap">
        {/* TCC Location */}
        <div className="flex items-center gap-[8px] flex-wrap">
          {visibleFilters.location !== false && (
            <div className="flex flex-col text-sm font-medium text-[#414651]">
              <label className="font-medium mb-1">
                TCC Location{" "}
                <span className="text-[#4F7A21]">
                  *
                  <img
                    src="/images/HelpIcon.svg"
                    alt="Info"
                    className="inline-block ml-1 w-[16px] h-[16px]"
                  />
                </span>
              </label>
              <div className="relative">
                <select className="appearance-none h-[40px] w-[233px] border border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm text-[#717680]">
                  <option>Shirgaon TCC (Auto-Assign)</option>
                </select>
                <ChevronDown className="w-4 h-4 m-1 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Crop Type */}
          {visibleFilters.cropType !== false && (
            <div className="flex flex-col text-sm font-medium text-[#414651]">
              <label className="font-medium mb-1">
                Crop Type{" "}
                <span className="text-[#4F7A21]">
                  *
                  <img
                    src="/images/HelpIcon.svg"
                    alt="Info"
                    className="inline-block ml-1 w-[16px] h-[16px]"
                  />
                </span>
              </label>
              <div className="relative">
                <CustomDropdown />
              </div>
            </div>
          )}

          {/* Date Range Picker */}
          {visibleFilters.dateRange !== false && (
            <div className="flex flex-col text-sm font-medium text-[#414651]">
              <label className="font-medium mb-1">
                Date Range Picker{" "}
                <span className="text-[#4F7A21]">
                  *
                  <img
                    src="/images/HelpIcon.svg"
                    alt="Info"
                    className="inline-block ml-1 w-[16px] h-[16px]"
                  />
                </span>
              </label>
              <div
                onClick={() => setShowDatePicker(true)}
                className="flex items-center gap-2 h-[40px] w-[228px] border border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm text-[#717680] cursor-pointer"
              >
                <img
                  src="/images/CalendarIcon.svg"
                  alt="CalendarIcon"
                  className="text-[#4F7A21] w-[20px] h-[20px]"
                />
                <span className="text-sm text-[#414651]">
                  {selectedRange?.startDate instanceof Date &&
                  selectedRange?.endDate instanceof Date
                    ? `${formatDate(selectedRange.startDate)} – ${formatDate(
                        selectedRange.endDate
                      )}`
                    : "Select Range"}
                </span>
              </div>
            </div>
          )}

          {/* Radius */}
          {visibleFilters.radius !== false && (
            <div className="flex flex-col text-sm font-medium text-[#414651]">
              <label className="font-medium mb-1">
                Radius (km) <span className="text-[#4F7A21]">*</span>
              </label>
              <div className="relative">
                <select className="appearance-none h-[40px] w-[105px] border text-[#535862] border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm ">
                  <option>200</option>
                </select>
                <ChevronDown className="w-4 h-4 m-1 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Min Readiness % */}
          {visibleFilters.readiness !== false && (
            <div className="flex flex-col text-sm font-medium text-[#414651]">
              <label className="font-medium mb-1">
                Min Readiness %
                <img
                  src="/images/HelpIcon.svg"
                  alt="Info"
                  className="inline-block ml-1 w-[16px] h-[16px]"
                />
              </label>
              <div className="relative">
                <select className="appearance-none h-[40px] w-[138px]  border text-[#535862] border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm ">
                  <option>80</option>
                </select>
                <ChevronDown className="w-4 h-4 m-1 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Exclude Risk Zones */}
          {visibleFilters.riskZones !== false && (
            <div className="flex flex-col text-sm font-medium text-[#414651]">
              <label className="font-medium mb-1">Exclude Risk Zones</label>
              <div className="flex items-center h-[40px]  w-[156px] border text-[#535862] border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm ">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#4F7A21]" />
                  <span className="text-[#535862]">Exclude OFF</span>
                </label>
              </div>
            </div>
          )}

          {/* Search Parcel */}
          {visibleFilters.searchParcel !== false && (
            <div className="flex flex-col text-sm font-medium text-[#414651]">
              <label className="font-medium mb-1">
                Search Parcel or Village
              </label>
              <input
                type="text"
                placeholder="Type parcel ID or village name"
                className="h-[40px] w-[229px] border border-[#ACDC79] text-[#535862] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm "
              />
            </div>
          )}

          {/* Reload Icon */}
          {visibleFilters.reload !== false && (
            <div className="flex items-end h-full pt-5">
              <div className="bg-white w-[44px] h-[44px] flex items-center border border-[#CEEAB0] justify-center gap-1 cursor-pointer rounded-md shadow-sm">
                <img
                  src="/images/RefreshIcon.svg"
                  className="w-[20px] h-[20px] text-green-700"
                />
              </div>
            </div>
          )}
        </div>
        {/*Last Sync*/}
        <div>
          {visibleFilters.lastSync !== false && (
            <div className="w-[540px]">
              <LastSync />
            </div>
          )}
        </div>
      </div>

      {/* Render date picker modal */}
      {showDatePicker && (
        <CustomDateRangePicker
          onCancel={() => setShowDatePicker(false)}
          onApply={handleDateApply}
        />
      )}
    </>
  );
};

export default ParcelMappingFilters;
