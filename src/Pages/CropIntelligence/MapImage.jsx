import React from "react";
import {BsCopy} from "react-icons/bs";
import MapDataSnippet from "./MapDataSnippet";

const MapImage = () => {
    return (
        <div className="w-full flex justify-items-start items-center">
            <div className="rounded-lg overflow-hidden">
                <MapDataSnippet />
            </div>

            {/* Field Info */}
            <div className="text-xs w-[315px] p-4 rounded-2xl border border-[#ECECED] space-y-3">
                {/* Tag Label */}
                <div className="text-[#717680] font-400 text-[16px]">Field/Village Type Tag</div>

                {/* Tags */}
                <div className="flex gap-2">
          <span
              className="text-[#067647] bg-[#ECFDF3] border border-[#ABEFC6] px-3 py-0.5 rounded-md text-sm font-medium">
            Field
          </span>
                    <span
                        className="text-[#B93815] bg-[#FEF6EE] border border-[#F9DBAF] px-3 py-0.5 rounded-md text-sm font-medium">
            Village
          </span>
                    <span
                        className="text-[#5925DC] bg-[#F4F3FF] border border-[#D9D6FE] px-3 py-0.5 rounded-md text-sm font-medium">
            Cluster
          </span>
                </div>

                {/* Parcel ID */}
                <div className="w-[246px] h-[56px]">
                    <div className="flex items-center justify-start space-x-2 text-[#717680] font-600 text-[16px]">
                        <span>Parcel ID / Village Name</span>
                        <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer"/>
                    </div>
                    <div className="text-[#414651] text-[24px] font-bold leading-[32px] font-700 m-0">
                        #Field-128 — Shirgaon
                    </div>
                </div>

                {/* Coordinates */}
                <div className="w-[290px] h-[56px]">
                    <div className="flex items-center justify-start space-x-2 text-[#717680] font-400 text-[16px]">
                        <span>Coordinates</span>
                        <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer"/>
                    </div>
                    <div className="text-[#414651] text-lg font-bold leading-tight mt-[2px]">
                        Lat: 16.69° N Long: 74.23° E
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapImage;
