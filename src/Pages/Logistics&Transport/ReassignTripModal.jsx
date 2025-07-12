import React from "react";

const ReassignTripModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[580px] p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Top Icon */}
        <div className="w-[48px] h-[48px] rounded-[10px] border border-[#E9EAEB] bg-[#FFFFFF] flex items-center justify-center mb-3">
          <img src="/images/Refresh.svg" alt="Refresh" />
        </div>

        <h2 className="text-lg font-bold text-[#181D27]">Reassign Trip</h2>
        <p className="text-sm font-normal text-[#535862] mb-5">
          Update driver or vehicle allocation for this trip
        </p>

        {/* Trip Info */}
        <div className="grid grid-cols-3 gap-3 text-sm mb-4">
          <div>
            <p className="text-[#717680] font-medium">Trip ID</p>
            <p className="fontibold text[#414651]B]">TRP-3409</p>
          </div>
          <div>
            <p className="text-[#717680] font-medium">Current Driver</p>
            <p className="font-bold text-[#414651]">Sunil Pawar</p>
          </div>
          <div>
            <p className="text-[#717680] font-medium">Current Vehicle</p>
            <p className="font-bold text-[#414651]">MH12-AB-2563</p>
          </div>
        </div>

        {/* Reassign Form */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="text-sm font-medium text-[#414651] mb-1 block">
              Select New Driver <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[44px]  border border-[#D5D7DA] text-[#717680] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Choose from available drivers</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-[#414651] mb-1 block">
              New Vehicle <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[44px] border border-[#D5D7DA] text-[#717680] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Choose available truck / vehicle</option>
            </select>
          </div>
        </div>

        {/* Timestamp */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#414651]">
            Time Stamp: <span className="font-bold">21/08/2025 14:23</span>
          </p>
          {/* Submit Button */}
          <button className="w-full bg-[#4F7A21] text-white h-[44px] font-bold py-2 rounded-lg hover:bg-[#3a620c] transition">
            Reassign
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReassignTripModal;
