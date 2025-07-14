import { useState } from "react";
import ParcelMappingDateRangePicker from "./ParcelMappingDateRangePicker";
import ParcelMappingTable from "./ParcelMappingTable";
import TripPriority from "./TripPriorityPanel";
import TripSummary from "./TripSummaryBox";
import ReorderPickupTable from "./ReorderPickupTable";
// import

const Parcel = () => {
  const [dateRange, setDateRange] = useState(null);

  return (
    <div className="flex">
      <div className="w-full relative top-3 flex justify-between">
        <div className="px-5 flex flex-col gap-6">
          <div>
            <ParcelMappingDateRangePicker />
          </div>
          <TripSummary />
          <ReorderPickupTable />
          <TripPriority />
        </div>
      </div>
    </div>
  );
};

export default Parcel;
