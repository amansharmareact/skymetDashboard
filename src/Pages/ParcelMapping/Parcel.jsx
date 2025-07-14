import {React, useState} from "react";
import ParcelMappingFilters from "./ParcelMappingFilters";
import MapData from "../CropIntelligence/MapData";
import DateRangePicker from "./DateRangeSelector";
import TripSummary from "./TripSummaryBox";
import TripPriority from "./TripPriorityPanel";
import ParcelMappingTable from "./ParcelMappingTable";
// import

const Parcel = () => {
    const [dateRange, setDateRange] = useState(null);

    return (
        <div className="flex">
            <div className="w-full relative top-3 flex justify-between">
                <div className="w-full">
                    <MapData />
                </div>
                <div className="w-[60%] px-5 flex flex-col gap-6">
                    <div>
                        <label className="font-medium ml-2 mt-4">
                            Trip Date *
                        </label>
                    <DateRangePicker />
                    </div>
                    <TripSummary />
                    <ParcelMappingTable/>
                    <TripPriority/>
                </div>
            </div>
        </div>
    );
};

export default Parcel;
