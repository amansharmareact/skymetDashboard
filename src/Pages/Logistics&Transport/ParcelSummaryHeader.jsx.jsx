import React from "react";

const ParcelSummaryHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-[#F5F5F5] px-4 py-2 text-sm rounded-xl font-medium">
      {/* Labels */}
      <div className="flex gap-[30px] items-center w-full">
        <div>
          <div className="text-[#717680] font-medium text-sm ">Parcel ID</div>
          <div className="font-medium text-md text-black mt-1">TRP-3409</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium text-sm ">
            Village Name
          </div>
          <div>
            <span className="w-[100px] mt-1 flex items-center justify-center text-[13px] font-semibold px-[2px] py-[2px] rounded-full bg-[#FEF6EE] text-orange-600 border border-[#F7B27A]">
              <div className="w-[5px] h-[5px] bg-[#E04F16] rounded-full mr-2"></div>{" "}
              En Route
            </span>
          </div>
        </div>
        <div>
          <div className="text-[#717680] font-medium text-sm ">
            Harvest Status
          </div>
          <div className="font-medium text-md text-black mt-1">
            MH12-AB-2563
          </div>
        </div>
        <div>
          <div className="text-[#717680] font-medium text-sm ">Load Est.</div>
          <div className="font-medium text-md text-black mt-1">Sunil Pawar</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium text-sm ">
            ETA / Completion Time
          </div>
          <div className="font-medium text-md text-black mt-1">14:25 Hrs</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium text-sm ">
            Action: Skip / Reschedule (if pending)
          </div>
          <div className="font-medium text-md text-black mt-1">36.2 km</div>
        </div>
      </div>
    </div>
  );
};

export default ParcelSummaryHeader;
