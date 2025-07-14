import React from "react";
import { Link } from "react-router-dom";
const ParcelMappingHeader = () => {
  return (
    <div className="flex justify-between items-center py-3 px-4 bg-white">
      {/* Left Side */}
      <div>
        <h1 className="text-[18px] font-bold text-[#000000] mb-[2px]">
          Parcel Mapping Dashboard
        </h1>
        <p className="text-[18px] text-[#000000] font-normal">
          Plan and assign optimized field collection or dispatch trips from this
          center.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <Link to="/parcel-mapping-two">

          <button className=" w-[200px] h-[36px] flex items-center gap-2 px-4 py-2 bg-[#4F7A21] text-white text-sm font-bold rounded-md">
            <span className="text-lg font-normal">＋</span> Create Collection Trip
          </button>
        </Link>
        <Link to="/parcel-mapping-three">

          <button className="w-[190px] h-[36px] flex items-center gap-2 px-4 py-2 bg-[#4F7A21] text-white text-sm font-bold rounded-md">
            <span className="text-lg font-normal">＋</span> Create Dispatch Trip
          </button>
        </Link>
          <div className="flex items-center px-4 py-2 border border-[#D5D7DA] rounded-md bg-white cursor-pointer">

            <img
              src="/images/Draft.svg"
              alt="Drafts"
              className="w-[18px] h-[18px] mr-2"
            />
            <span className="text-sm text-[#414651] font-bold">Drafts</span>
          </div>

        <div className="text-xs text-[#414651] font-medium">
          Last Synced <br />
          <span className="text-[#414651] font-bold">21/08/2025 14:23</span>
        </div>
      </div>
    </div>
  );
};

export default ParcelMappingHeader;
