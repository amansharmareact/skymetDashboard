import React from "react";

const ReassignParcelModal = ({ onClose }) => {
  return (
    <div className="fixed h-screen overflow-y-auto  inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      {/* Modal Content: full screen height, scrollable if needed */}
      <div className="bg-white rounded-xl w-[660px] p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Top Icon */}
        <div className="w-[48px] h-[48px] rounded-[10px] border border-[#E9EAEB] bg-white flex items-center justify-center">
          <img src="/images/Refresh.svg" alt="Refresh" />
        </div>

        {/* Heading */}
        <h2 className="text-lg font-bold text-[#181D27] mt-[16px]">Reassign Parcels</h2>
        <p className="text-sm font-normal text-[#535862]">
          Reassign specific parcels to another vehicle
        </p>

        {/* Trip Info */}
        <div className="grid grid-cols-4 gap-3 text-sm mt-[16px]">
          <div>
            <p className="text-[#717680] font-medium">Trip ID</p>
            <p className="font-bold text-[#414651]">TRP-3409</p>
          </div>
          <div>
            <p className="text-[#717680] font-medium">Current Driver</p>
            <p className="font-bold text-[#414651]">Sunil Pawar</p>
          </div>
          <div>
            <p className="text-[#717680] font-medium">Current Vehicle</p>
            <p className="font-bold text-[#414651]">MH12-AB-2563</p>
          </div>
          <div>
            <p className="text-[#717680] font-medium">Total Stops</p>
            <p className="font-bold text-[#414651]">5 Parcels</p>
          </div>
        </div>

        {/* Parcel Table */}
        <div className="border border-[#E9EAEB] rounded-md overflow-x-auto mt-[16px]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F7F8F9] text-[#717680] text-bold text-xs text-left">
                <th className="px-4 py-2">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-2">Stop</th>
                <th className="px-4 py-2">Parcel ID</th>
                <th className="px-4 py-2">Village Name</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  stop: "3",
                  parcel: "P-121",
                  village: "Shahuwadi",
                  status: (
                    <span className="text-[13px] font-semibold px-2 py-[2px] rounded-full bg-[#FEF6EE] text-orange-600 border border-[#F7B27A]">
                      ● En Route
                    </span>
                  ),
                },
                {
                  stop: "4",
                  parcel: "P-126",
                  village: "Kale",
                  status: (
                    <span className="text-[13px] font-semibold px-2 py-[2px] rounded-full bg-[#F4F6F9] text-[#717680] border border-[#D5D7DA]">
                      ● Scheduled
                    </span>
                  ),
                },
                {
                  stop: "5",
                  parcel: "P-135",
                  village: "Padal",
                  status: (
                    <span className="text-[13px] font-semibold px-2 py-[2px] rounded-full bg-[#F4F6F9] text-[#717680] border border-[#D5D7DA]">
                      ● Scheduled
                    </span>
                  ),
                },
                {
                  stop: "-",
                  parcel: "-",
                  village: (
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/Factory.svg"
                        alt="Plant"
                        className="w-[24px] h-[24px]"
                      />
                      <span className="text-[#181D27] font-semibold">
                        Kolhapur Plant
                      </span>
                    </div>
                  ),
                  status: "-",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-[#E9EAEB] text-[#535862] font-normal"
                >
                  <td className="px-4 py-2">
                    {index !== 3 && <input type="checkbox" />}
                  </td>
                  <td className="px-4 py-2 text-[#181D27] font-medium">
                    {row.stop}
                  </td>
                  <td className="px-4 py-2">{row.parcel}</td>
                  <td className="px-4 py-2">{row.village}</td>
                  <td className="px-4 py-2">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Driver & Vehicle Dropdowns */}
        <div className="flex items-center mt-[16px] justify-between gap-4">
          <div className="w-full ">
            <label className="text-sm mb-[6px] font-medium text-[#414651] block">
              Select New Driver <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[44px] border border-[#D5D7DA] text-[#717680] rounded-md px-3 text-sm">
              <option>Choose from available drivers</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-sm mb-[6px] font-medium text-[#414651] block">
              Select New Vehicle <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[44px] border border-[#D5D7DA] text-[#717680] rounded-md px-3 text-sm">
              <option>Choose available truck / vehicle</option>
            </select>
          </div>
        </div>

        {/* Optional Note */}
        <div className="">
          <label className="text-sm font-medium text-[#414651] block mt-[16px] mb-[6px]">
            Optional Reassign Note
          </label>
          <textarea
            rows={3}
            className="w-full border border-[#D5D7DA] rounded-md px-3 py-2 text-sm text-[#414651] resize-none"
            placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product..."
          ></textarea>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-[32px]">
          <p className="text-xs text-[#414651]">
            Time Stamp: <span className="font-bold">21/08/2025 14:23</span>
          </p>
          <button className="bg-[#4F7A21] w-full hover:bg-[#3a620c] text-white px-6 py-2 h-[44px] rounded-md font-bold text-sm">
            Reassign Selected Parcels
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReassignParcelModal;
