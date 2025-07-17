import React from "react";

const DriverSelectorWithDetails = () => {
  return (
    <div className="border border-[#ECECED] rounded-2xl p-4 bg-white mt-[16px]">
      {/* Dropdown */}
      <label className="block text-sm font-medium text-[#414651] mb-1">
        Select New Driver <span className="text-red-500">*</span>
      </label>
      <select className="w-[630px] h-[44px] border border-[#D5D7DA] rounded-md px-[14px] py-[10px] text-sm text-[#717680] mb-4 focus:outline-none">
        <option>Choose from available drivers</option>
      </select>

      {/* Driver Card */}
      <div className="flex gap-4">
        {/* Image */}
        <img
          src="/images/Driver.svg"
          alt="Driver"
          className="w-[124px] h-[124px] object-cover rounded-lg"
        />

        {/* Info */}
        <div className="grid grid-cols-3 font-medium rounded-xl p-[10px]  gap-y-3 text-sm text-[#717680] w-[494px] h-[182px] bg-[#F6F7F8]">
          <div>
            <p>Driver Name</p>
            <p className="font-bold text-[#181D27] text-md">Sunil Pawar</p>
          </div>
          <div>
            <p>Driver Contact</p>
            <p className="font-bold text-[#181D27] text-md">+91-9876543210</p>
          </div>
          <div>
            <p>Driver License No.</p>
            <p className="font-bold text-[#181D27] text-md">MH14-2023-4567</p>
          </div>

          <div>
            <p>License Type</p>
            <p className="font-bold text-[#181D27] text-md">
              HGV, LMV, Commercial
            </p>
          </div>
          <div>
            <p>Driver Experience</p>
            <p className="font-bold text-[#181D27] text-md">5 years</p>
          </div>
          <div>
            <p>Availability Status</p>
            <p className="font-bold text-[#181D27] text-md">Available</p>
          </div>

          <div>
            <p>Driving Zone Familiarity</p>
            <p className="font-bold text-[#181D27] text-md">Kolhapur</p>
          </div>
          <div>
            <p>Driver Assigned By</p>
            <p className="font-bold text-[#181D27] text-md">Jayesh Patil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverSelectorWithDetails;
