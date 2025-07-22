import React from "react";
import TransportStatusCard from "./TransportStatusCard";
import ScheduledTripsCard from "./ScheduledTripsCard";
import Filters from "../../components/Filters";
import TripStatusCard from "./TripStatusCard";
import PickupPoint from "./PickupPoint";
import ParcelSummaryHeader from "./ParcelSummaryHeader.jsx";
import ParcelProgressTable from "./ParcelProgressTable.jsx.jsx";
import ParcelTimeline from "./ParcelTimeline.jsx";
import FieldOfficerComments from "./FieldOfficerComments.jsx";
import TripActivityLog from "./TripActivityLog.jsx";
import MapDataLogistics from "./MapDataLogistics";
import ProgressFilter from "./progressFilter";
import "../../App.css"

const LogisticsAndTransport = () => {
  return (
    <div className="backgroundColor min-h-screen px-[20px] w-full">
      {/* Filters */}
      <Filters lastSync={true} apply={true}
        visibleFilters={{
          lastSync: false,
        }} />
      {/* Header Cards Section */}
      <div className="w-full flex flex-wrap gap-[4px] pt-[16px]">
        {Array.from({ length: 6 }).map((_, idx) => (
          <ScheduledTripsCard key={idx} />
        ))}
      </div>
      {/* Transport Status Cards */}
      <div className="flex w-full mt-[16px]">
        <div className="w-[30%] bg-white border p-[6px] border-[#E9EAEB] rounded-[16px] flex flex-col h-[100vh] overflow-y-auto">
          <ProgressFilter />
          {Array.from({ length: 6 }).map((_, idx) => (
            <TransportStatusCard key={idx} />
          ))}
        </div>
        <div className="flex flex-col w-[70%] backgroundColor border border-[#E9EAEB] p-[6px] rounded-xl pl-[4px]">
          <div className="w-full">
            <TripStatusCard />
          </div>
          <div className="mt-[4px] w-full z-0">
            <MapDataLogistics visibleFilters={{
              circle: false
            }} />
          </div>
          <div className="mt-1 w-full">
            <PickupPoint />
          </div>
          <div className="mt-1 w-full">
            <ParcelSummaryHeader />
          </div>
          <div className="mt-1 w-full">
            <ParcelProgressTable />
          </div>
          <div className="">
            <ParcelTimeline />
          </div>
          <div className="mt-1 w-full">
            <FieldOfficerComments />
          </div>
          <div className="mt-1 w-full">
            <TripActivityLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsAndTransport;
