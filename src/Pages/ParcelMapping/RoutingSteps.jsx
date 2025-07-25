import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const RoutingSteps = ({ setShowPointSelection }) => {
  return (
    <div className="w-full h-auto bg-white font-sans mt-[24px] rounded-md ">
      {/* Header */}
      <div className="w-full flex items-center justify-center rounded-[8px] text-[#414651] text-md font-bold py-[10px] px-[16px] border border-[#D5D7DA] mb-[16px]">
        <span>
          <IoIosArrowRoundBack className="w-[20px] h-[20px] text-[#A4A7AE]" />
        </span>
        <Link to="/parcel-mapping-two" className="ml-2 no-underline">
          Select Parcels from Another Village
        </Link>
      </div>

      {/* Continue Button */}
      <button
        onClick={() => setShowPointSelection(false)}
        className="w-full bg-[#4F7A21] text-white py-3 text-center text-md font-bold rounded-md mb-[16px]"
      >
        Continue to Routing Phase
      </button>

      {/* Steps */}
      <div className="flex justify-between text-sm space-x-4">
        <div className="flex-1 text-left">
          <div className="border-t-4 border-[#4A772F] w-full"></div>
          <div className="font-bold text-[#414651] text-sm pt-[12px]">Step 1:</div>
          <div className="text-[#535862]">
            Discover Villages with Harvest Potential
          </div>
        </div>

        <div className="flex-1 text-left">
          <div className="border-t-4 border-[#A5D549] w-full"></div>
          <div className="font-bold text-[#414651] text-sm pt-[12px]">Step 2:</div>
          <div className="text-[#4A772F]">Select Parcels for the Trip</div>
        </div>

        <div className="flex-1 text-left">
          <div className="border-t-4 border-[#E5E5E5] w-full"></div>
          <div className="font-bold text-[#414651] text-sm pt-[12px]">Step 3:</div>
          <div className="text-[#535862]">Optimize Route</div>
        </div>

        <div className="flex-1 text-left">
          <div className="border-t-4 border-[#E5E5E5] w-full"></div>
          <div className="font-bold text-[#414651] text-sm pt-[12px]">Step 4:</div>
          <div className="text-[#535862]">
            Assign Driver, Vehicle & Create Trip
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutingSteps;
