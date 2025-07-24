import React, { useState, useEffect, useRef } from "react";
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
  const rightRef = useRef(null);
  const [rightHeight, setRightHeight] = useState(0);

  useEffect(() => {
    const element = rightRef.current;

    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      setRightHeight(element.clientHeight);
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

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
        <div className="no-scrollbar w-[344px] min-w-[344px] max-w-[400px] bg-white border border-[#E9EAEB] rounded-[16px] flex flex-col overflow-x-hidden overflow-y-auto"
          style={{ height: rightHeight }}>
          <ProgressFilter />
          {Array.from({ length: 10 }).map((_, idx) => (
            <TransportStatusCard key={idx} />
          ))}
        </div>
        <div
          ref={rightRef}
          className="flex flex-col w-full bg-white border border-[#E9EAEB] p-[6px] rounded-[16px] ml-[4px]">
          <div className="w-full">
            <TripStatusCard />
          </div>
          <div className="mt-[4px] w-full">
            <MapDataLogistics className visibleFilters={{
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
