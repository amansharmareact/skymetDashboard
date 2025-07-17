import React from "react";

const PastCollection = () => {
  return (
    <div className="space-y-2">
      <p className="text-[#717680] font-bold text-sm ml-2 mb-2">
        Past Collection Attempts
      </p>

      <div className="w-full rounded-2xl border border-[#ECECED] px-5 py-4 space-y-4">
        {/* Last Trip Attempt */}
        <div>
          <p className="text-xs text-[#717680] mb-1">Last Trip Attempt</p>
          <p className="text-[18px] font-semibold text-[#414651]">
            25 June – Cancelled (
            <span className="">⚠️ Rain</span>)
          </p>
        </div>

        {/* Trip Success Rate */}
        <div>
          <p className="text-xs text-[#717680] mb-1">
            Previous Trip Success Rate
          </p>
          <p className="text-[18px] font-semibold text-[#414651]">
            3/5 Completed in last 14 days
          </p>
        </div>

        {/* Skipped Reasons & Logs */}
        <div className="grid grid-cols-2">
          <div>
            <p className="text-xs text-[#717680] mb-1">
              Skipped Reasons (if any)
            </p>
            <p className="text-[18px] font-semibold text-[#414651]">
              Rainfall, Access Blocked
            </p>
          </div>
          <div>
            <p className="text-xs text-[#717680] mb-1">Trip Logs History</p>
            <p className="text-[18px] font-semibold text-[#1D2739] underline cursor-pointer">
              View
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastCollection;
