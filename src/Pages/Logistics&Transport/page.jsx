import React from "react";
import TransportStatusCard from "./TransportStatusCard";
import ScheduledTripsCard from "./ScheduledTripsCard";
import Filters from "../../components/Filters";

const LogisticsAndTransport = () => {
  return (
    <div>
      <Filters />
      <div className="flex w-full justify-between items-center px-4">
      <ScheduledTripsCard />
      <ScheduledTripsCard />
      <ScheduledTripsCard />
      <ScheduledTripsCard />
      <ScheduledTripsCard />
      <ScheduledTripsCard />
      </div>
      <div className="px-4 pt-5">
      <TransportStatusCard />
      <TransportStatusCard />
      <TransportStatusCard />
      <TransportStatusCard />
      <TransportStatusCard />
      <TransportStatusCard />
      </div>
    </div>
  );
};

export default LogisticsAndTransport;
