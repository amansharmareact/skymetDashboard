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
    <div className="flex flex-col md:flex-row items-stretch justify-between gap-1 w-full">

      {/* ----------- First Card: White background ----------- */}
      <Card
        className="rounded-2xl border shadow-sm flex flex-1 flex-col basis-full md:basis-1/3"
        style={{
          background: `rgba(255, 255, 255, 0.7)`,
          borderColor: '#FECDCA',
        }}
      >
        <CardContent className="flex flex-col flex-1  justify-between h-full p-2">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/Plant Icon (4).svg" alt="icon" className="w-12 h-12" />
              <div>
                <h4 className="text-[16px] font-medium text-[#E14343]">Weather Alert</h4>
                <p className="text-[10px] text-[#717680]">Updated 2h ago</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[38px] font-medium text-[#181D27]">3 Parcels</h3>
              <p className="text-[28px] font-normal text-[#181D27]">Rainfall risk</p>
              <div className="flex flex-wrap gap-2 text-[12px] mt-4">
                <span className="bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647] font-semibold px-4 py-2 rounded-full">Crop: Maize</span>
                <span className="bg-[#F8F9FC] border border-[#CBD5E1] text-[#363F72] font-semibold px-4 py-2 rounded-full">Readiness: 85%</span>
                <span className="bg-[#FFFAEB] border border-[#FCD34D] text-[#B54708] font-semibold px-4 py-2 rounded-full">Rain ETA: 18 hrs</span>
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
            <div className="bg-white shadow-sm inline-flex rounded-2xl border border-[#D5D7DA] text-[9px] font-semibold text-[#414651] w-full">
              <button className="px-4 text-[10px] py-2  hover:bg-gray-100 transition-all hover:rounded-l-2xl text-black">View on Map</button>
              <div className="w-px bg-gray-300" />
              <button className="px-4 text-[10px] py-2  hover:bg-gray-100 transition-all hover:rounded-r-2xl   text-black">Acknowledge</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ----------- Second Card: Linear Gradient with 50% opacity ----------- */}
      <Card
        className="rounded-2xl border shadow-sm flex flex-1 flex-col basis-full md:basis-1/3"
        style={{
          background: `rgba(255, 255, 255, 0.7)`,
          borderColor: '#FEEE95',
        }}
      >
        <CardContent className="flex flex-col justify-between h-full p-2">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/Plant Icon (8).svg" alt="icon" className="w-12 h-12" />
              <div>
                <h4 className="text-[16px] font-medium text-[#CA6702]">Logistics Delay</h4>
                <p className="text-[10px] text-[#717680]">Updated 2h ago</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[38px] font-medium text-[#181D27] mt-2">5 Collection</h3>
              <p className="text-[28px] font-normal text-[#181D27]">Trips Delayed</p>
              <div className="mt-7">
                <p className="text-[12px] text-[#181D27]">Total biomass: <br /><div className="font-medium text-[20px]">620 tons</div></p>
                <p className="text-[12px] text-[#181D27] mt-4">Unassigned Parcels:<br /><div className="font-medium text-[20px]">#98, #106, #110</div></p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-b my-3" />
            <div className="bg-white shadow-sm inline-flex rounded-2xl border border-[#D5D7DA] text-[10px] font-semibold text-[#414651] w-full ">
              <button className="px-4 py-2  hover:bg-gray-100 transition-all hover:rounded-l-2xl  text-black">Assign Agents</button>
              <div className="w-px bg-gray-300" />
              <button className="px-4 py-2  hover:bg-gray-100 transition-all hover:rounded-r-2xl  text-black">View Routes</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ----------- Third Card: Solid bgColor with 50% opacity ----------- */}
      <Card
        className="rounded-2xl border shadow-sm flex flex-col flex-1 basis-full md:basis-1/3"
        style={{
          backgroundColor: '#F0F9FF',
          borderColor: '#7CD4FD',
        }}
      >
        <CardContent className="flex flex-col justify-between h-full p-2">
          <div>
            <div className="flex items-start gap-2">
              <img src="/images/Plant Icon (6).svg" alt="icon" className="w-12 h-12" />
              <div>
                <h4 className="text-[16px] font-medium text-[#1D4ED8]">Utilization Drop</h4>
                <p className="text-[10px] text-[#717680]">Updated 2h ago</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-[38px] font-medium">63%</h3>
              <p className="text-[28px] font-normal text-[#181D27]">Utilization Down</p>
              <div className="mt-4">
                <p className="text-[12px] text-[#181D27] mt-[5px]">Consecutive dip:<br /><div className="font-medium text-[20px] font-medium">3 Day</div></p>
                <div className="flex mt-[10px] space-x-4">
                  <p className="text-[12px]">Forecasted:<br /><div className="font-medium text-[20px]">1080 <span className="text-[12px]">tons</span></div></p>
                  <p className="text-[12px]">Collected:<br /><div className="font-medium text-[20px]">620 <span className="text-[12px]">tons</span></div></p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="border-b my-3" />
            <div className="bg-white shadow-sm inline-flex rounded-2xl border border-[#D5D7DA] text-[10px] font-semibold text-[#414651] w-full">
              <button className="px-4 py-2   text-black hover:bg-gray-100 transition-all hover:rounded-l-2xl">Open Report</button>
              <div className="w-px bg-gray-300" />
              <button className="px-4 py-2  text-black hover:bg-gray-100 transition-all hover:rounded-r-2xl ">Analyze Drop</button>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default AlertsSection;
