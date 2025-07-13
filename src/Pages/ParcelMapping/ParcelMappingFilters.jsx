import { RotateCcw } from "lucide-react";
import CustomDropdown from "../../components/ui/Dropdown";
const ParcelMappingFilters = () => {
  return (
    <div className="flex items-center m-2 gap-4 flex-wrap">
      {/* TCC Location */}
      <div className="flex flex-col text-sm font-medium text-[#414651]">
        <label className="font-medium mb-1">
          TCC Location <span className="text-[#4F7A21]">*</span>
        </label>
        <select className="h-[40px] w-[233px] border border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm text-[#717680]">
          <option>Shirgaon TCC (Auto-Assign)</option>
        </select>
      </div>

      {/* Crop Type */}
      <div className="flex flex-col text-sm font-medium text-[#414651]">
        <label className="font-medium mb-1">
          Crop Type <span className="text-[#4F7A21]">*</span>
        </label>
        <div className="relative">
          <CustomDropdown />
        </div>
      </div>

      {/* Date Range Picker */}
      <div className="flex flex-col text-sm font-medium text-[#414651]">
        <label className="font-medium mb-1">
          Date Range Picker <span className="text-[#4F7A21]">*</span>
        </label>
        <div className="flex items-center gap-2 h-[36px] w-[233px] border border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm text-[#717680]">
          <img
            src="/images/CalendarIcon.svg"
            alt="CalendarIcon"
            className="text-[#4F7A21] w-[20px] h-[20px]"
          />
          <span className="text-sm text-[#414651]">
            Jan 10, 2025 – Jan 16, 2025
          </span>
        </div>
      </div>

      {/* Radius */}
      <div className="flex flex-col text-sm font-medium text-[#414651]">
        <label className="font-medium mb-1">
          Radius (km) <span className="text-[#4F7A21]">*</span>
        </label>
        <select className="h-[36px] w-[80px] border text-[#535862] border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm ">
          <option>200</option>
        </select>
      </div>

      {/* Min Readiness % */}
      <div className="flex flex-col text-sm font-medium text-[#414651]">
        <label className="font-medium mb-1">Min Readiness %</label>
        <select className="h-[36px] w-[80px]  border text-[#535862] border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm ">
          <option>80</option>
        </select>
      </div>

      {/* Exclude Risk Zones */}
      <div className="flex flex-col text-sm font-medium text-[#414651]">
        <label className="font-medium mb-1">Exclude Risk Zones</label>
        <div className="flex items-center h-[36px] border text-[#535862] border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm ">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-[#4F7A21]" />
            <span className="text-[#535862]">Exclude OFF</span>
          </label>
        </div>
      </div>

      {/* Search Parcel */}
      <div className="flex flex-col text-sm font-medium text-[#414651]">
        <label className="font-medium mb-1">Search Parcel or Village</label>
        <input
          type="text"
          placeholder="Type parcel ID or village name"
          className="h-[36px] w-[220px] border border-[#ACDC79] text-[#535862] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm "
        />
      </div>

      {/* Reload Icon */}
      <div className="flex items-end h-full pt-5">
       <div className="bg-white w-[44px] h-[44px] flex items-center border border-[#CEEAB0] justify-center gap-1 cursor-pointer rounded-md shadow-sm">
          <RotateCcw className="w-4 h-4 text-green-700" />
        </div>
      </div>
    </div>
  );
};

export default ParcelMappingFilters;
