import React from "react";

const ParcelTable = ({ selectedParcels }) => {
  return (
    <div className="w-full">
      <h2 className="text-[#717680] text-sm font-bold mb-2">
        Select Parcels for the trip-391
      </h2>

      <div className="rounded-xl border border-[#E9EAEB] shadow-xs overflow-hidden">
        {/* Header */}
        <div className="flex justify-between bg-[#FAFAFA] text-[#7B7B7B] text-xs font-bold px-4 py-3">
          <div className="w-1/3  justify-start flex items-center gap-1">
            Parcel ID
            <img
              src="/images/TableArrow.svg"
              alt="Sort"
              className="w-[12px] h-[12px]"
            />
          </div>
          <div className="w-1/3  justify-end flex items-center gap-1">
            Readiness %
            <img
              src="/images/TableArrow.svg"
              alt="Sort"
              className="w-[12px] h-[12px]"
            />
          </div>
          <div className="w-1/3  justify-end flex items-center gap-1">
            Est. Tons
            <img
              src="/images/TableArrow.svg"
              alt="Sort"
              className="w-[12px] h-[12px]"
            />
          </div>
        </div>

        {/* Rows */}
        {selectedParcels.length === 0 ? (
          <div className="text-sm text-[#535862] py-4 px-4">
            No parcels selected yet.
          </div>
        ) : (
          selectedParcels.map((parcel, index) => (
            <div
              key={index}
              className="flex justify-between  text-sm text-[#535862] px-4 py-4 border-t border-[#E9EAEB]"
            >
              <div className="w-1/3  justify-start flex items-center gap-1">{parcel.id}</div>
              <div className=" w-1/3  justify-end flex items-center gap-1 font-medium text-[#181D27]">{parcel.readiness}</div>
              <div className="w-1/3  justify-end flex items-center gap-1">{parcel.estimatedTons}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ParcelTable;
