import {useState} from "react";
import ParcelMappingDateRangePicker from "./ParcelMappingDateRangePicker";
import ParcelMappingTable from "./ParcelMappingTable";
import TripPriority from "./TripPriorityPanel";
import TripSummary from "./TripSummaryBox";
import ReorderPickupTableWeather from "./ReorderPickupTableWeather";
import ParcelEstimateCard from "./ParcelEstimateCard";
// import

const Parcel = () => {
    const [dateRange, setDateRange] = useState(null);

    return (
        <div className="flex w-[580px]">
            <div className="w-full relative top-3 flex justify-between">
                <div className="flex flex-col">
                    <div>
                        <ParcelMappingDateRangePicker/>
                    </div>
                    <div className="mt-[24px]">
                        <TripSummary/>
                    </div>
                    <div className="mt-[16px]">
                        <p className="text-sm leading-[20px] font-bold text-[#717680]">Drag rows to reorder pickups for
                            shortest route for the Trip-417</p>
                        <div className="mt-[8px]">
                            <ReorderPickupTableWeather/>
                        </div>
                    </div>
                    <div className="w-full">
                        <ParcelEstimateCard/>
                    </div>
                    <div className="">
                        <TripPriority/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parcel;
