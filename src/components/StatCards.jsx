import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";

const stats = [
  {
    color: '#E6F4EA',
    stroke: '#CEEAB0',
    icon: '🌿',
    title: '20,1020',
    subtitle: 'Biomass (Next 7 Days)',
    footer: 'Updated 2h ago',
  },
  {
    color: '#E8F0FA',
    stroke: '#B2DDFF',
    icon: '🏭',
    title: '87%',
    subtitle: 'Plant Capacity Utilization',
    footer: 'Daily Rolling Avg',
  },
  {
    color: '#FFF1D9',
    stroke: '#FFD6AE',
    icon: '📦',
    title: '2 Parcels',
    subtitle: 'Low Collection Risk Zones',
    footer: 'Prioritize',
  },
  {
    color: '#FFF5D1',
    stroke: '#FEDF89',
    icon: '🚛',
    title: '12 / 16',
    subtitle: 'Collection Trips Completed',
    footer: 'As of 2:00 PM',
  },
  {
    color: '#FDEBEC',
    stroke: '#F6D0FE',
    icon: '🌧️',
    title: '4 Zones',
    subtitle: 'Rain Threat Forecast',
    footer: 'View Details',
  },
  {
    color: '#F8E4E4',
    stroke: '#FDA29B',
    icon: '⚠️',
    title: '5 Alerts',
    subtitle: 'Pending Supply/Harvest Issues',
    footer: 'View Alerts',
  },
]

const StatCards = () =>{
  return (
    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-1">
      {stats.map((stat, idx) => (
        <Card
         key={idx}
          className="rounded-[24px] px-[5px] py-[6px] w-full h-[150px] shadow-sm border "
          style={{ backgroundColor: stat.color, borderColor: stat.stroke }}
        >

          <CardContent className="p-4">
          <div className="text-2xl mb-2">{stat.icon}</div>
          <div className="text-[30px] font-bold text-[#181D27]">{stat.title}</div>
          <div className="text-sm text-gray-600">{stat.subtitle}</div>
          <div className="text-xs text-gray-500 mt-1">{stat.footer}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default StatCards