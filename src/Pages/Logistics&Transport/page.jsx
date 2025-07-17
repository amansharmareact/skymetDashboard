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

const LogisticsAndTransport = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-[20px]">
      {/* Filters */}
      <Filters />

      {/* Header Cards Section */}
      <div className="flex flex-wrap gap-[4px] pt-[16px]">
        {Array.from({ length: 6 }).map((_, idx) => (
          <ScheduledTripsCard key={idx} />
        ))}
      </div>

      {/* Transport Status Cards */}
      <div className="flex">
        <div className="flex flex-col px-1">
          {Array.from({ length: 6 }).map((_, idx) => (
            <TransportStatusCard key={idx} />
          ))}
        </div>
        <div className="flex flex-col">
          <div className="mt-1 w-full">
            <TripStatusCard />
          </div>
          <div className="mt-1 w-full">
            <img src="/images/DummyMapLogistics.png" alt="Map" />
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
          <div className="mt-1 w-full">
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
