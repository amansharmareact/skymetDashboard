import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const RoutingSteps = () => {
  return (
    <div className="w-[512px] bg-white font-sans p-4 rounded-md shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-center rounded-[8px] text-[#414651] text-md font-bold py-[10px] px-[16px] border border-[#D5D7DA]">
        <span>
          <IoIosArrowRoundBack className="w-[20px] h-[20px] text-[#A4A7AE]" />
        </span>
        <Link to="/parcel-mapping" className="decoration:none">
          Select Parcels from Another Village
        </Link>

      </div>

      {/* Continue Button */}
      <Link to="/assign-driver" className="decoration:none">
          <button className="w-full bg-[#4F7A21] text-white py-3 mt-2 text-center text-md font-bold rounded-md mb-4">
            Continue to Routing Phase
          </button>
      </Link>

      {/* Steps */}
      <div className="flex justify-between text-sm">
        <div className="flex-1 text-left">
          <div className="border-t-2 border-[#4A772F] w-full mb-1"></div>
          <div className="font-bold text-[#414651] text-sm">Step 1:</div>
          <div className="text-[#535862]">
            Discover Villages with Harvest Potential
          </div>
        </div>

        <div className="flex-1 text-left">
          <div className="border-t-2 border-[#A5D549] w-full mb-1"></div>
          <div className="font-bold text-[#414651] text-sm">Step 2:</div>
          <div className="text-[#4A772F]">Select Parcels for the Trip</div>
        </div>

        <div className="flex-1 text-left">
          <div className="border-t-2 border-[#E5E5E5] w-full mb-1"></div>
          <div className="font-bold text-[#414651] text-sm">Step 3:</div>
          <div className="text-[#535862]">Optimize Route</div>
        </div>

        <div className="flex-1 text-left">
          <div className="border-t-2 border-[#E5E5E5] w-full mb-1"></div>
          <div className="font-bold text-[#414651] text-sm">Step 4:</div>
          <div className="text-[#535862]">
            Assign Driver, Vehicle & Create Trip
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutingSteps;
