const ParcelTable = ({ selectedParcels }) => {
  return (
    <div className="w-[540px]">
      <h2 className="text-[#717680] text-sm font-bold mb-2">
        Select Parcels for the trip-391
      </h2>

      <div className="rounded-xl border border-[#E9EAEB] shadow-xs">
        <div className="bg-[#FAFAFA] text-[#7B7B7B] text-xs font-bold grid grid-cols-2 py-3 px-4 gap-[30px]">
          <div className="text-left flex items-center gap-1">Parcel ID
            <span className="inline-block">
              <img
                src="/images/TableArrow.svg"
                alt="TableArrow"
                className="w-[12px] h-[12px]"
              />
            </span>
          </div>
          <div className="flex justify-between">
          <div className="text-left flex items-center gap-1">Readiness %
            <span className="inline-block">
              <img
                src="/images/TableArrow.svg"
                alt="TableArrow"
                className="w-[12px] h-[12px]"
              />
            </span>
          </div>
          <div className="text-left flex items-center gap-1">Est. Tons
            <span className="inline-block">
              <img
                src="/images/TableArrow.svg"
                alt="TableArrow"
                className="w-[12px] h-[12px]"
              />
            </span>
          </div>
          </div>
        </div>

        {selectedParcels.length === 0 ? (
          <div className="text-sm text-[#535862] py-4 px-4">
            No parcels selected yet.
          </div>
        ) : (
          selectedParcels.map((parcel, index) => (
            <div
              key={index}
              className="text-sm text-[#535862] grid grid-cols-3 py-4 px-4 border-t border-[#E9EAEB]"
            >
              <div className="text-left font-regular">{parcel.id}</div>
              <div className="text-left font-medium text-[#181D27]">
                {parcel.readiness}
              </div>
              <div className="text-left">{parcel.estimatedTons}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ParcelTable;
