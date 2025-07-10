import React from "react";
import { BsCopy } from "react-icons/bs";

const MapImage = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="rounded-lg overflow-hidden">
        <img
          src="/images/mapimage.jpg"
          alt="Map"
          className="w-full h-32 object-cover"
        />
      </div>

      {/* Field Info */}
      <div className="text-xs w-[280px] p-4 rounded-2xl border border-[#ECECED] space-y-3">
        {/* Tag Label */}
        <div className="text-[#717680] font-medium">Field/Village Type Tag</div>

        {/* Tags */}
        <div className="flex gap-2">
          <span className="text-[#067647] bg-[#ECFDF3] border border-[#ABEFC6] px-3 py-0.5 rounded-md text-sm font-medium">
            Field
          </span>
          <span className="text-[#B93815] bg-[#FEF6EE] border border-[#F9DBAF] px-3 py-0.5 rounded-md text-sm font-medium">
            Village
          </span>
          <span className="text-[#5925DC] bg-[#F4F3FF] border border-[#D9D6FE] px-3 py-0.5 rounded-md text-sm font-medium">
            Cluster
          </span>
        </div>

        {/* Parcel ID */}
        <div className="flex items-center justify-start space-x-2 text-[#717680] font-medium">
          <span>Parcel ID / Village Name</span>
          <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
        </div>
        <div className="text-[#101828] text-lg font-bold leading-tight">
          #Field-128 — Shirgaon
        </div>

        {/* Coordinates */}
        <div className="flex items-center justify-start space-x-2 text-[#717680] font-medium">
          <span>Coordinates</span>
          <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
        </div>
        <div className="text-[#101828] text-lg font-bold leading-tight">
          Lat: 16.69° N Long: 74.23° E
        </div>
      </div>
    </div>
  );
};

export default MapImage;
