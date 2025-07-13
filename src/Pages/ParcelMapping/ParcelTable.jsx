import React from "react";

const ParcelTable = () => {
  return (
    <div className="w-[512px]">
      <h2 className="text-[#717680] text-sm font-bold mb-2">
        Select Parcels for the trip-391
      </h2>

      <div className="rounded-xl border border-[#E9EAEB] shadow-xs">
        {/* Table Header */}
        <div className="bg-[#FAFAFA] text-[#7B7B7B] text-xs font-bold grid grid-cols-3 py-3 px-4">
          <div className="text-left">
            Parcel ID{" "}
            <span className="inline-block">
              <img
                src="/images/TableArrow.svg"
                alt="TableArrow"
                className="w-[12px] h-[12px]"
              />
            </span>
          </div>
          <div className="text-left">
            Readiness %{" "}
            <span className="inline-block">
              <img
                src="/images/TableArrow.svg"
                alt="TableArrow"
                className="w-[12px] h-[12px]"
              />
            </span>
          </div>
          <div className="text-left">
            Est. Tons{" "}
            <span className="inline-block">
              <img
                src="/images/TableArrow.svg"
                alt="TableArrow"
                className="w-[12px] h-[12px]"
              />
            </span>
          </div>
        </div>

        {/* Table Row */}
        <div className="text-sm text-[#535862] grid grid-cols-3 py-4 px-4">
          <div className="text-left font-regular">P-108</div>
          <div className="text-left font-medium text-[#181D27]">85%</div>
          <div className="text-left">1.9 T</div>
        </div>
      </div>
    </div>
  );
};

export default ParcelTable;
