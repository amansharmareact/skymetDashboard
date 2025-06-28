import React from 'react';
import Card from "./ui/Card";

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
];
const hexToRgba = (hex, alpha) => {
  let r = 0, g = 0, b = 0;
  hex = hex.replace('#', '');

  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-3 md:px-0 items-stretch">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          className="rounded-[24px] w-full min-h-[150px] h-full shadow-sm border flex"
          style={{ backgroundColor: `${hexToRgba(stat.color, 0.5)}`, borderColor: stat.stroke }}
        >
          <div className="p-2 flex flex-col justify-between w-full h-full">
            {/* Top - Icon + Title */}
            <div>
              <img src={stat.icon} alt="icon" className="w-8 h-8 mb-1" />
              <div className="text-[26px] font-bold text-[#181D27] leading-tight truncate">{stat.title}</div>
            </div>

            {/* Bottom - Subtitle + Footer */}
            <div className="mb-2">
              <div className="text-[16px] text-[#252B37] leading-tight truncate">{stat.subtitle}</div>
              <div className="text-[14px] text-[#717680] leading-tight truncate">{stat.footer}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;
