import React from "react";

const parcels = [
  {
    stop: 1,
    id: "P-108",
    village: "Shirgaon",
    readiness: "85%",
    load: "1.9 T",
    status: "Completed",
    notes: "Collection done successfully",
  },
  {
    stop: 2,
    id: "P-114",
    village: "Ambewadi",
    readiness: "75%",
    load: "2.1 T",
    status: "Completed",
    notes: "On-time",
  },
  {
    stop: 3,
    id: "P-121",
    village: "Shahuwadi",
    readiness: "90%",
    load: "1.8 T",
    status: "In Progress",
    notes: "Truck currently here",
  },
  {
    stop: 4,
    id: "P-126",
    village: "Kale",
    readiness: "80%",
    load: "1.6 T",
    status: "Scheduled",
    notes: "Next stop",
  },
  {
    stop: 5,
    id: "P-135",
    village: "Padal",
    readiness: "70%",
    load: "1.7 T",
    status: "Scheduled",
    notes: "Final pickup before plant",
  },
  {
    stop: "-",
    id: "-",
    village: "Kolhapur Plant",
    readiness: "-",
    load: "-",
    status: "-",
    notes: "Drop-off destination",
  },
];

const getStatusBadge = (status) => {
  const base =
    "inline-flex items-center gap-1 px-2 py-[2px] text-xs rounded-full font-medium whitespace-nowrap"; // Added `whitespace-nowrap`

  const dotStyle = "w-[6px] h-[6px] rounded-full mt-[1px] flex-shrink-0";

  switch (status) {
    case "Completed":
      return (
        <span
          className={`${base} bg-[#ECFDF3] border border-[#ABEFC6] text-[#079455]`}
        >
          <span className={`${dotStyle} bg-[#079455]`}></span>
          {status}
        </span>
      );
    case "In Progress":
      return (
        <span
          className={`${base} bg-[#FEF6EE] border border-[#F7B27A] text-[#E04F16]`}
        >
          <span className={`${dotStyle} bg-[#E04F16]`}></span>
          {status}
        </span>
      );
    case "Scheduled":
      return (
        <span
          className={`${base} bg-[#FAFAFA] border border-[#E9EAEB] text-[#414651]`}
        >
          <span className={`${dotStyle} bg-[#414651]`}></span>
          {status}
        </span>
      );
    default:
      return <span className="text-gray-400">-</span>;
  }
};

const steps = [
  { label: "Step 1", status: "complete" },
  { label: "Step 2", status: "current" },
  { label: "Step 3", status: "upcoming" },
];



const ParcelProgressTable = () => {
  return (
    <div className="rounded-xl overflow-x-auto shadow border border-[#E9EAEB]">
      <table className="text-sm text-left bg-white">
        <thead className="bg-[#FAFAFA] text-[#717680] font-bold text-xs">
          <tr>
            <th className="px-[24px] py-[13px]">Stop</th>
            <th className="px-[24px] py-[13px]">Parcel ID</th>
            <th className="px-[24px] py-[13px]">Village Name</th>
            <th className="px-[24px] py-[13px]">Readiness %</th>
            <th className="px-[24px] py-[13px]">Load (Tons)</th>
            <th className="px-[24px] py-[13px]">Status</th>
            <th className="px-[24px] py-[13px]">Notes</th>
            <th className="px-[24px] py-[13px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, idx) => (
            <tr
              key={idx}
              className="bg-white text-sm border-b border-[#E9EAEB]"
            >
              <td className="pl-[14px] pr-[38px] py-[16px] text-[#535862]">{parcel.stop}</td>
              <td className="pl-[14px] pr-[38px] py-[16px] text-[#535862]">{parcel.id}</td>
              <td className="pl-[14px] pr-[38px] py-[16px] text-[#535862] gap-2">
                {parcel.village === "Kolhapur Plant" && (
                  <span role="img" aria-label="plant">
                    <img
                      src="/images/Factory.svg"
                      alt="Magnify"
                      className="w-[27px] h-[27px]"
                    />
                  </span>
                )}
                {parcel.village}
              </td>
              <td className="pl-[14px] pr-[38px] py-[16px] text-[#181D27] font-semibold">
                {parcel.readiness}
              </td>
              <td className="pl-[14px] pr-[38px] py-[16px] text-[#181D27]">{parcel.load}</td>
              <td className="pl-[14px] pr-[38px] py-[16px] text-[#535862]">
                {getStatusBadge(parcel.status)}
              </td>
              <td className="pl-[14px] pr-[38px] py-[16px] text-[#181D27] text-sm font-medium">
                {parcel.notes}
              </td>
              <td className="pl-[14px] pr-[38px] py-[16px] text-center">
                <span>
                  <img
                    src="/images/Magnify.svg"
                    alt="Magnify"
                    className="w-[27px] h-[27px]"
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelProgressTable;
