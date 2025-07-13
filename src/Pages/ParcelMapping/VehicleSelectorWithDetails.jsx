import React from "react";

const VehicleSelectorWithDetails = () => {
  return (
    <div className="border border-[#ECECED] rounded-2xl p-4 w-full max-w-3xl bg-white">
      {/* Dropdown */}
      <label className="block text-sm font-medium text-[#414651] mb-1">
        Select New Vehicle <span className="text-red-500">*</span>
      </label>
      <select className="w-[630px] h-[44px] border border-[#D5D7DA] rounded-md px-[14px] py-[10px] text-sm text-[#717680] mb-4 focus:outline-none">
        <option>Choose available truck / vehicle</option>
      </select>

      {/* Driver Card */}
      <div className="flex gap-4">
        {/* Image */}
        <img
          src="/images/Truck.svg"
          alt="Truck"
          className="w-[124px] h-[124px] object-cover rounded-lg"
        />

        {/* Info */}
        <div className="grid grid-cols-3 font-medium rounded-xl p-4  gap-y-3 text-sm text-[#717680] w-full bg-[#F6F7F8]">
          <div>
            <p>Vehicle Number</p>
            <p className="font-bold text-[#181D27] text-md">MH12-AB-2563</p>
          </div>
          <div>
            <p>Vehicle Type</p>
            <p className="font-bold text-[#181D27] text-md">6T Dumper</p>
          </div>
          <div>
            <p>Vehicle Capacity</p>
            <p className="font-bold text-[#181D27] text-md">12 Tons Max</p>
          </div>

          <div>
            <p>Fuel Efficiency</p>
            <p className="font-bold text-[#181D27] text-md">3.5 km/l</p>
          </div>
          <div>
            <p>Vehicle Status</p>
            <p className="font-bold text-[#181D27] text-md">Available</p>
          </div>
          <div>
            <p>Availability Status</p>
            <p className="font-bold text-[#181D27] text-md">Available</p>
          </div>

          <div>
            <p>Ownership Type</p>
            <p className="font-bold text-[#181D27] text-md">Third-Party</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-normal text-[#717680] text-md">
            Load Capacity Used
          </p>
          <p className="font-bold text-[#414651] text-[24px]">Available</p>
        </div>
        <div>
          <p className="font-normal text-[#717680] text-md">Vehicle Status</p>
          <p className="font-bold text-[#F04438] uppercase text-[24px]">
            Available
          </p>
        </div>
      </div>
      <div className="col-span-1 mt-2">
        <label className="flex items-center text-[#414651] mb-1 font-medium text-sm">
          <span>Supervisor Notes</span>
          <span>
            <img src="/images/HelpIcon.svg" alt="HelpIcon" className="ml-1" />
          </span>
        </label>
        <textarea
          rows={4}
          placeholder="e.g. Joined Stripe's Customer Success team..."
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>
    </div>
  );
};

export default VehicleSelectorWithDetails;
