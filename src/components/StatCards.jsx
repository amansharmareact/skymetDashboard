import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";

const stats = [
  {
    color: '#E6F4EA',
    stroke: '#CEEAB0',
    icon: '/images/Plant Icon.png',
    title: '20,1020',
    subtitle: 'Biomass (Next 7 Days)',
    footer: 'Updated 2h ago',
  },
  {
    color: '#E8F0FA',
    stroke: '#B2DDFF',
    icon: '/images/Plant Icon (1).png',
    title: '87%',
    subtitle: 'Plant Capacity Utilization',
    footer: 'Daily Rolling Avg',
  },
  {
    color: '#FFF1D9',
    stroke: '#FFD6AE',
    icon: '/images/Plant Icon (2).png',
    title: '2 Parcels',
    subtitle: 'Low Collection Risk Zones',
    footer: 'Prioritize',
  },
  {
    color: '#FFF5D1',
    stroke: '#FEDF89',
    icon: '/images/Plant Icon (3).png',
    title: '12 / 16',
    subtitle: 'Collection Trips Completed',
    footer: 'As of 2:00 PM',
  },
  {
    color: '#FDEBEC',
    stroke: '#F6D0FE',
    icon: '/images/Plant Icon (4).png',
    title: '4 Zones',
    subtitle: 'Rain Threat Forecast',
    footer: 'View Details',
  },
  {
    color: '#F8E4E4',
    stroke: '#FDA29B',
    icon: '/images/Plant Icon (5).png',
    title: '5 Alerts',
    subtitle: 'Pending Supply/Harvest Issues',
    footer: 'View Alerts',
  },
]

const StatCards = () =>{
  return (
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-[7px] mt-[10px] ml-[65px]">
      {stats.map((stat, idx) => (
        <Card
         key={idx}
          className="rounded-[24px]  px-[6px] py-[6px] w-[240px] h-[150px] shadow-sm border "
          style={{ backgroundColor: stat.color, borderColor: stat.stroke }}
        >

          <CardContent className="p-4">
           <img src={stat.icon} alt="icon" className="w-8 h-8 mb-2" />
          <div className="text-[30px] font-bold text-[#181D27]">{stat.title}</div>
          <div className="text-[12px] text-[#252B37]">{stat.subtitle}</div>
          <div className="text-[9px] text-[#717680] mt-1">{stat.footer}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default StatCards