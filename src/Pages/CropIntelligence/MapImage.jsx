import React from "react";
import { BsCopy } from "react-icons/bs";
import MapDataSnippet from "./MapDataSnippet";

const MapImage = () => {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-[10px] items-start overflow-hidden" style={{ minHeight: "215px", height: "215px" }}>
            {/* Map Image */}
            <div className="rounded-lg w-full flex items-center justify-center col-span-2 h-[215px]">
                <MapDataSnippet />
            </div>

            {/* Field Info */}
            <div className="w-full p-2 rounded-2xl border border-[#ECECED] space-y-3 bg-white col-span-3 h-[215px]">
                {/* Tag Label */}
                <div className="text-xs sm:text-sm lg:text-base text-[#717680] font-medium">Field/Village Type Tag</div>

                {/* Tags */}
                <div className="flex gap-[5px] flex-nowrap">
                    <span className="text-xs sm:text-sm lg:text-base text-[#067647] bg-[#ECFDF3] border border-[#ABEFC6] px-3 py-0.5 rounded-md font-medium">
                        Field
                    </span>
                    <span className="text-xs sm:text-sm lg:text-base text-[#B93815] bg-[#FEF6EE] border border-[#F9DBAF] px-3 py-0.5 rounded-md font-medium">
                        Village
                    </span>
                    <span className="text-xs sm:text-sm lg:text-base text-[#5925DC] bg-[#F4F3FF] border border-[#D9D6FE] px-3 py-0.5 rounded-md font-medium">
                        Cluster
                    </span>
                </div>

                {/* Parcel ID */}
                <div className="w-full lg:w-[246px] h-[56px]">
                    <div className="flex items-center justify-start space-x-2 text-xs sm:text-sm lg:text-base text-[#717680] font-semibold">
                        <span>Parcel ID / Village Name</span>
                        <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
                    </div>
                    <div className="text-base sm:text-lg lg:text-lg text-[#414651] font-bold leading-[32px] m-0">
                        #Field-128 — Shirgaon
                    </div>
                </div>

                {/* Coordinates */}
                <div className="w-full lg:w-[290px] h-[56px]">
                    <div className="flex items-center justify-start space-x-2 text-xs sm:text-sm lg:text-base text-[#717680] font-normal">
                        <span>Coordinates</span>
                        <BsCopy className="w-[12px] h-[12px] text-gray-400 cursor-pointer" />
                    </div>
                    <div className="text-sm sm:text-base lg:text-md text-[#414651] font-bold leading-tight mt-[2px]">
                        Lat: 16.69° N Long: 74.23° E
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapImage;
