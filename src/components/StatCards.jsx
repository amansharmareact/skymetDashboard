import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";

const stats = [
  { title: "Biomass (Next 7 Days)", value: "20,1020" },
  { title: "Plant Capacity Utilization", value: "87%" },
  { title: "Low Collection Risk Zones", value: "2 Parcels" },
  { title: "Collection Trips Completed", value: "12 / 16" },
  { title: "Rain Threat Forecast", value: "4 Zones" },
  { title: "Pending Supply/Harvest Issues", value: "5 Alerts" },
];

const StatCards = () =>{
  return (
    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <Card key={idx} className="bg-white">
          <CardContent className="p-4">
            <p className="text-sm">{stat.title}</p>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default StatCards