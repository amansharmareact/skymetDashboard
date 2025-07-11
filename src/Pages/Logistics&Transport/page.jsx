import React from "react";
import TransportStatusCard from "./TransportStatusCard";
import ScheduledTripsCard from "./ScheduledTripsCard";
import Filters from "../../components/Filters";
import TripStatusCard from "./TripStatusCard";

const LogisticsAndTransport = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Filters */}
      <Filters />

      {/* Header Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-4">
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
        <div className="mt-6">
          <TripStatusCard />
        </div>
      </div>
    </div>
  );
};

export default LogisticsAndTransport;
