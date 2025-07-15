import React from "react";

const TripSummaryBox = () => {
  return (
    <div className="w-[756px] font-sans">
      <h2 className="text-[#717680] text-sm font-bold mb-2">Trip Summary</h2>

      <div className="bg-[#F5F5F5] rounded-xl p-4 text-sm text-[#4A4A4A] flex flex-wrap gap-x-[30px] gap-y-4">
        {/* Row 1 */}
        <div>
          <div className="text-[#717680] font-medium  text-sm">Trip ID</div>
          <div className="font-bold text-md text-[#181D27]">Trip-417</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium  text-sm">Trip Date</div>
          <div className="font-bold text-md text-[#181D27]">24 June 2025</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium  text-sm">Trip type</div>
          <div className="font-bold text-md text-[#181D27]">Collection</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium  text-sm">Current TCC</div>
          <div className="font-bold text-md text-[#181D27]">Shirgaon TCC</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium  text-sm">Crop Type’s</div>
          <div className="font-bold text-md text-[#181D27]">Sugarcane</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium  text-sm">
            Parcel Stops
          </div>
          <div className="font-bold text-md text-[#181D27]">6</div>
        </div>

        {/* Row 2 */}
        <div>
          <div className="text-[#717680] font-medium  text-sm">
            Total Est. Load:
          </div>
          <div className="font-bold text-md text-[#181D27]">10.9T</div>
        </div>
        <div>
          <div className="text-[#717680] font-medium  text-sm">
            Route Ends At
          </div>
          <div className="font-bold text-md text-[#181D27]">TCC</div>
        </div>
        <div className="col-span-4">
          <div className="text-[#717680] font-medium  text-sm">
            Rain Risk Parcels:
          </div>
          <div className="font-bold text-md text-[#181D27]">
            2 Parcels flagged
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSummaryBox;
