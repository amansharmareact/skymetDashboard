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
  const base = "px-1 py-0.5 text-xs rounded-full font-medium inline-block";
  switch (status) {
    case "Completed":
      return (
        <span
          className={`${base} flex items-center justify-around bg-[#ECFDF3] border border-[#ABEFC6] text-[#079455]`}
        >
          <div className="rounded-full w-[5px] h-[5px] bg-[#079455]"></div>
          <span>{status}</span>
        </span>
      );
    case "In Progress":
      return (
        <span
          className={`${base} flex items-center justify-around bg-[#FEF6EE] border border-[#F7B27A] text-[#E04F16]`}
        >
          <div className="rounded-full w-[5px] h-[5px] bg-[#E04F16]"></div>
          <span>{status}</span>
        </span>
      );
    case "Scheduled":
      return (
        <span
          className={`${base} flex items-center justify-around bg-[#FAFAFA] text-[#414651] font-medium border border-[#E9EAEB]`}
        >
          <div className="rounded-full w-[5px] h-[5px] bg-[#414651]"></div>
          <span>{status}</span>
        </span>
      );
    default:
      return <span className="text-gray-400">-</span>;
  }
};

const ParcelMappingTable = () => {
  return (
    <div className="rounded-xl shadow border border-[#E9EAEB]">
      <table className="min-w-full text-sm text-left bg-white">
        <thead className="bg-[#FAFAFA] text-[#717680] font-bold text-xs">
          <tr>
            <th className="px-4 py-2">
              {" "}
              <span className="inline-block">
                <img
                  src="/images/TableArrow.svg"
                  alt="TableArrow"
                  className="w-[12px] h-[12px]"
                />
              </span>
            </th>
            <th className="px-4 py-2">
              <span>Parcel ID</span>{" "}
              <span className="inline-block">
                <img
                  src="/images/TableArrow.svg"
                  alt="TableArrow"
                  className="w-[12px] h-[12px]"
                />
              </span>
            </th>
            <th className="px-4 py-2">
              <span>Village </span>
              <span className="inline-block">
                <img
                  src="/images/TableArrow.svg"
                  alt="TableArrow"
                  className="w-[12px] h-[12px]"
                />
              </span>
            </th>
            <th className="px-4 py-2">
              <span>Readiness % </span>
              <span className="inline-block">
                <img
                  src="/images/TableArrow.svg"
                  alt="TableArrow"
                  className="w-[12px] h-[12px]"
                />
              </span>
            </th>
            <th className="px-4 py-2">
              <span>Est. (Tons) </span>
              <span className="inline-block">
                <img
                  src="/images/TableArrow.svg"
                  alt="TableArrow"
                  className="w-[12px] h-[12px]"
                />
              </span>
            </th>
            <th className="px-4 py-2 ">
              <span>Alert </span>
              <span className="inline-block">
                <img
                  src="/images/TableArrow.svg"
                  alt="TableArrow"
                  className="w-[12px] h-[12px]"
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, idx) => (
            <tr
              key={idx}
              className="bg-white text-sm border-b border-[#E9EAEB]"
            >
              <td className="px-4 py-2 text-[#535862]">{parcel.stop}</td>
              <td className="px-4 py-2 text-[#535862]">{parcel.id}</td>
              <td className="px-4 py-2 text-[#535862] flex items-center gap-2">
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
              <td className="px-4 py-2 text-[#181D27] font-semibold">
                {parcel.readiness}
              </td>
              <td className="px-4 py-2 text-[#181D27]">{parcel.load}</td>
              <td className="px-4 py-2 text-[#535862]">
                {getStatusBadge(parcel.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelMappingTable;
