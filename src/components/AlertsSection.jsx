import React from 'react';
import Card from './ui/Card';
import CardContent from './ui/CardContent';

const cards = [
  {
    title: 'Weather Alert',
    icon: '/images/Plant Icon (4).png',
    titleColor: '#E14343',
    borderColor: '#FECDCA',
    body: (
      <>
        <h3 className="text-[30px] font-semibold text-[#181D27]">3 Parcels</h3>
        <p className="text-[18px] text-[#181D27]">Rainfall risk</p>
        <div className="flex flex-wrap gap-2 text-[8px] mt-4">
          <span className="bg-[#ECFDF3] border text-[#067647] px-2 py-1 rounded-full">Crop: Maize</span>
          <span className="bg-[#F8F9FC] border text-[#363F72] px-2 py-1 rounded-full">Readiness: 85%</span>
          <span className="bg-[#FFFAEB] border text-[#B54708] px-2 py-1 rounded-full">Rain ETA: 18 hrs</span>
        </div>
        <ul className="text-[12px] text-gray-600 mt-3 space-y-2">
          <li><strong>Parcel #103</strong> – Rajarampuri</li>
          <li><strong>Parcel #107</strong> – Shirol Block</li>
          <li><strong>Parcel #109</strong> – Ichalkaranji</li>
        </ul>
      </>
    ),
    actions: (
      <>
        <button className="px-[7px] text-[#414651] text-[8px] py-2 hover:bg-gray-100">View on Map</button>
        <div className="w-px bg-gray-300" />
        <button className="px-4 text-[#414651] text-[8px] py-2 hover:bg-gray-100">Acknowledge</button>
      </>
    ),
  },
  {
    title: 'Logistics Delay',
    icon: '/images/Plant Icon (6).png',
    titleColor: '#CA6702',
    borderColor: '#FEEE95',
    body: (
      <>
        <h3 className="text-[29px] font-semibold text-[#181D27] mt-2">5 Collection</h3>
        <p className="text-[18px] font-regular text-[#181D27]">Trips Delayed</p>
        <div className="mt-7">
          <p className="text-[12px] text-[#181D27] mt-1">Total biomass: <br /><strong className="text-[20px] text-[#181D27]">620 tons</strong></p>
          <p className="text-[12px] text-[#181D27] mt-4">Unassigned Parcels:<br /><strong className="text-[20px] text-[#181D27]">#98, #106, #110</strong></p>
        </div>
      </>
    ),
    actions: (
      <>
        <button className="px-[7px] text-[#414651] py-2 hover:bg-gray-100">Assign Agents</button>
        <div className="w-px bg-gray-300" />
        <button className="px-4 py-2  text-[#414651] hover:bg-gray-100">View Routes</button>
      </>
    ),
  },
  {
    title: 'Utilization Drop',
    icon: '/images/Plant Icon (7).png',
    titleColor: '#1D4ED8',
    borderColor: '#7CD4FD',
    bgColor: '#F0F9FF',
    body: (
      <>
        <h3 className="text-[30px] font-medium">63%</h3>
        <p className="text-[18px] font-regular text-[#181D27]">Utilization Down</p>
        <div className="mt-4">
          <p className="text-[12px] font-regular text-[#181D27] mt-[5px]">Consecutive dip:<br /><strong className="text-[20px] text-[#181D27] font-medium">3 Day</strong></p>
          <div className="flex mt-[10px] space-x-4">
            <p className="text-[12px]">Forecasted:<br /><strong className="text-[16px]">1080 <span className="text-[8px]">tons</span></strong></p>
            <p className="text-[12px]">Collected:<br /><strong className="text-[16px]">620 <span className="text-[8px]">tons</span></strong></p>
          </div>
        </div>
      </>
    ),
    actions: (
      <>
        <button className="px-[7px] py-2 hover:bg-gray-100">Open Report</button>
        <div className="w-px bg-gray-300" />
        <button className="px-4 py-2 hover:bg-gray-100">Analyze Drop</button>
      </>
    ),
  },
];

const AlertsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-0">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          className="rounded-2xl border shadow-sm flex flex-col h-full"
          style={{
            backgroundColor: card.bgColor || '#FFFFFF',
            borderColor: card.borderColor,
          }}
        >
          <CardContent className="flex flex-col justify-between h-full p-4">
            {/* Header */}
            <div>
              <div className="flex items-start gap-2">
                <img src={card.icon} alt="icon" className="w-8 h-8" />
                <div>
                  <h4 className="text-[16px] font-medium" style={{ color: card.titleColor }}>{card.title}</h4>
                  <p className="text-[10px] font-regular text-[#717680]">Updated 2h ago</p>
                </div>
              </div>

              <div className="mt-4">
                {card.body}
              </div>
            </div>

            {/* Divider + Buttons */}
            <div className="mt-4">
              <div className="border-b my-3" />
              <div className="inline-flex rounded-full border border-gray-300 overflow-hidden text-[9px] font-semibold text-[#414651] w-full justify-between">
                {card.actions}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AlertsSection;
