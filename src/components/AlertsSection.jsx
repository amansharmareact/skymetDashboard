import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";

const AlertsSection = ()=> {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card className="bg-[#ffe9e9]">
        <CardContent className="p-4">
          <h4 className="text-sm font-semibold">Weather Alert</h4>
          <p className="text-xs">3 Parcels</p>
          <p className="text-xs">Rain ETA: 1-3 hrs</p>
          <p className="text-xs">Readiness: 85%</p>
          <ul className="text-xs mt-2">
            <li>Parcel #103 - Rajarampuri</li>
            <li>Parcel #107 - Shirol Block</li>
            <li>Parcel #109 - Ichalkaranji</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-[#fff8e1]">
        <CardContent className="p-4">
          <h4 className="text-sm font-semibold">Logistics Delay</h4>
          <p className="text-xs">5 Collection Trips Delayed</p>
          <p className="text-xs">Total Biomass: 620 tons</p>
          <p className="text-xs">Unassigned Parcels: #98, #106, #110</p>
        </CardContent>
      </Card>
      <Card className="bg-[#e1f5fe]">
        <CardContent className="p-4">
          <h4 className="text-sm font-semibold">Utilization Drop</h4>
          <p className="text-xs">63% Utilization Down</p>
          <p className="text-xs">Consecutive dip: 3 Day</p>
          <p className="text-xs">Forecasted: 1080 tons</p>
          <p className="text-xs">Collected: 620 tons</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default AlertsSection
