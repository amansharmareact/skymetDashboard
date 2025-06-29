import React from 'react';
import Card from './ui/Card';
import CardContent from './ui/CardContent';

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

const AlertsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-0">

      {/* ----------- First Card: White background ----------- */}
      <Card
        className="rounded-2xl border shadow-sm flex flex-col h-full"
        style={{
          background: `rgba(255, 255, 255, 0.7)`,
          borderColor: '#FECDCA',
        }}
      >
        <CardContent className="flex flex-col justify-between h-full p-4">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/Plant Icon (4).svg" alt="icon" className="w-12 h-12" />
              <div>
                <h4 className="text-[16px] font-medium text-[#E14343]">Weather Alert</h4>
                <p className="text-[10px] text-[#717680]">Updated 2h ago</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[30px] font-medium text-[#181D27]">3 Parcels</h3>
              <p className="text-[18px] font-normal text-[#181D27]">Rainfall risk</p>
              <div className="flex flex-wrap gap-2 text-[8px] mt-4">
                <span className="bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] font-semibold px-2 py-1.5 rounded-full">Crop: Maize</span>
                <span className="bg-[#F8F9FC] border border-[#CBD5E1] text-[#363F72] font-semibold px-2 py-1.5 rounded-full">Readiness: 85%</span>
                <span className="bg-[#FFFAEB] border border-[#FCD34D] text-[#B54708] font-semibold px-2 py-1.5 rounded-full">Rain ETA: 18 hrs</span>
              </div>
              <ul className="text-[12px] text-black mt-3 space-y-2">
                <li><strong>Parcel #103</strong> – Rajarampuri</li>
                <li><strong>Parcel #107</strong> – Shirol Block</li>
                <li><strong>Parcel #109</strong> – Ichalkaranji</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-b my-3" />
            <div className="inline-flex rounded-2xl border border-gray-300 overflow-hidden text-[9px] font-semibold text-[#414651] w-full justify-between">
              <button className="px-4 text-[8px] py-2 hover:bg-gray-100 text-black">View on Map</button>
              <div className="w-px bg-gray-300" />
              <button className="px-4 text-[8px] py-2 hover:bg-gray-100 text-black">Acknowledge</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ----------- Second Card: Linear Gradient with 50% opacity ----------- */}
      <Card
        className="rounded-2xl border shadow-sm flex flex-col h-full"
        style={{
          background: `rgba(255, 255, 255, 0.7)`,
          borderColor: '#FEEE95',
        }}
      >
        <CardContent className="flex flex-col justify-between h-full p-4">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/Plant Icon (8).svg" alt="icon" className="w-12 h-12" />
              <div>
                <h4 className="text-[16px] font-medium text-[#CA6702]">Logistics Delay</h4>
                <p className="text-[10px] text-[#717680]">Updated 2h ago</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[29px] font-medium text-[#181D27] mt-2">5 Collection</h3>
              <p className="text-[18px] font-normal text-[#181D27]">Trips Delayed</p>
              <div className="mt-7">
                <p className="text-[12px] text-[#181D27]">Total biomass: <br /><strong className="text-[20px]">620 tons</strong></p>
                <p className="text-[12px] text-[#181D27] mt-4">Unassigned Parcels:<br /><strong className="text-[20px]">#98, #106, #110</strong></p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-b my-3" />
            <div className="inline-flex rounded-2xl border border-gray-300 overflow-hidden text-[9px] font-semibold text-[#414651] w-full justify-between">
              <button className="px-[7px] py-2.5 hover:bg-gray-100  text-black">Assign Agents</button>
              <div className="w-px bg-gray-300" />
              <button className="px-4 py-2.5 hover:bg-gray-100  text-black">View Routes</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ----------- Third Card: Solid bgColor with 50% opacity ----------- */}
      <Card
        className="rounded-2xl border shadow-sm flex flex-col h-full"
        style={{
          backgroundColor: '#F0F9FF',
          borderColor: '#7CD4FD',
        }}
      >
        <CardContent className="flex flex-col justify-between h-full p-4">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/Plant Icon (6).svg" alt="icon" className="w-12 h-12" />
              <div>
                <h4 className="text-[16px] font-medium text-[#1D4ED8]">Utilization Drop</h4>
                <p className="text-[10px] text-[#717680]">Updated 2h ago</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[30px] font-medium">63%</h3>
              <p className="text-[18px] font-normal text-[#181D27]">Utilization Down</p>
              <div className="mt-4">
                <p className="text-[12px] text-[#181D27] mt-[5px]">Consecutive dip:<br /><strong className="text-[20px] font-medium">3 Day</strong></p>
                <div className="flex mt-[10px] space-x-4">
                  <p className="text-[12px]">Forecasted:<br /><strong className="text-[16px]">1080 <span className="text-[8px]">tons</span></strong></p>
                  <p className="text-[12px]">Collected:<br /><strong className="text-[16px]">620 <span className="text-[8px]">tons</span></strong></p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-b my-3" />
            <div className="inline-flex rounded-2xl border border-gray-300 overflow-hidden text-[9px] font-semibold text-[#414651] w-full justify-between">
              <button className="px-[7px] py-2.5 hover:bg-gray-100  text-black">Open Report</button>
              <div className="w-px bg-gray-300" />
              <button className="px-4 py-2.5 hover:bg-gray-100  text-black">Analyze Drop</button>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default AlertsSection;
