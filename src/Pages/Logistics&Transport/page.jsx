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
import RouteCard from "./RouteCardTooltip.jsx";

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
      <div className="flex w-full mt-[16px] relative ">
        <div className="w-[35%] bg-white border py-[9.56px] border-[#E9EAEB] rounded-[16px] flex flex-col h-[100vh] overflow-x-visible overflow-y-auto">
          <ProgressFilter />
          {Array.from({ length: 10 }).map((_, idx) => (
            <TransportStatusCard key={idx} />
          ))}
        </div>
        {/* {true && (
          <div className="z-50 absolute -translate-x-1/2 w-max whitespace-nowrap">
            <RouteCard />
          </div>
        )} */}
        <div className="flex flex-col w-[65%] backgroundColor border border-[#E9EAEB] p-[6px] rounded-[12px] ml-[4px]">
          <div className="w-full">
            <TripStatusCard />
          </div>
          <div className="mt-[4px] w-full">
            <MapDataLogistics visibleFilters={{
              circle: false
            }} />
          </div>
          <div className="mt-[4px] w-full">
            <PickupPoint />
          </div>
          <div className="mt-[4px] w-full">
            <ParcelSummaryHeader />
          </div>
          <div className="mt-[4px] w-full">
            <ParcelProgressTable />
          </div>
          <div className="mt-[4px] w-full">
            <ParcelTimeline />
          </div>
          <div className="mt-[4px] w-full">
            <FieldOfficerComments />
          </div>
          <div className="mt-[4px] w-full">
            <TripActivityLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsAndTransport;
