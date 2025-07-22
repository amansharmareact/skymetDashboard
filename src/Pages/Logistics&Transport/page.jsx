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
      }}/>
      {/* Header Cards Section */}
      <div className="w-full flex flex-wrap gap-[4px] pt-[16px]">
        {Array.from({ length: 6 }).map((_, idx) => (
          <ScheduledTripsCard key={idx} />
        ))}
      </div>
      {/* Transport Status Cards */}
      <div className="flex">
        <div className="no-scrollbar bg-white border-2 border-[#E9EAEB] rounded-[16px] flex flex-col h-[calc(100vh-250px)] mt-[16px] overflow-y-auto">
          <ProgressFilter />
          {Array.from({ length: 6 }).map((_, idx) => (
            <TransportStatusCard key={idx} />
          ))}
        </div>
        <div className="flex flex-col">
          <div className="mt-1 w-full">
            <TripStatusCard />
          </div>
          <div className="mt-1 w-full z-0">
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
          <div className="my-[12px] mx-[12px] w-full">
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
