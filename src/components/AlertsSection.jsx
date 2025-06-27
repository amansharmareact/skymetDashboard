import React from 'react';
import Card from './ui/Card';
import CardContent from './ui/CardContent';

const AlertsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 ">
      {/* Weather Alert Card */}
      <Card
        className="rounded-2xl border shadow-sm h-[377px] "
        style={{ backgroundColor: '#FFFFFF', borderColor: '#FECDCA' }}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <div className="text-2xl">
              <img src='/images/Plant Icon (4).png' alt='icon'/>
            </div>
            <div>
              <h4 className="text-[16px] font-semibold text-[#E14343]">Weather Alert</h4>
              <p className="text-[8px] text-[#717680]">Updated 2h ago</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-[25px] font-semibold">3 Parcels</h3>
            <p className="text-[14px] text-[#181D27]">Rainfall risk</p>

            <div className="flex flex-wrap gap-2 text-[8px]   mt-2">
              <span className="bg-[#ECFDF3] stroke-[#ABEFC6] border text-[#067647] px-2 py-1 rounded-full">Crop: Maize</span>
              <span className="bg-[#F8F9FC] stroke-[#D5D9EB] border text-[#363F72] px-2 py-1 rounded-full">Readiness: 85%</span>
              <span className="bg-[#FFFAEB] stroke-[#FEDF89] border text-[#B54708] px-2 py-1 rounded-full">Rain ETA: 18 hrs</span>
            </div>

            <ul className="text-[12px] text-gray-600 mt-2 space-y-1 ">
              <li><strong>Parcel #103</strong> – Rajarampuri</li>
              <li><strong>Parcel #107</strong> – Shirol Block</li>
              <li><strong>Parcel #109</strong> – Ichalkaranji</li>
            </ul>
            <div className='border-b mt-5'></div>

            <div className="inline-flex rounded-full border border-gray-300 overflow-hidden text-[9px] font-semibold text-[#414651] mt-[50px] ">
            <button className="px-[7px] text-[#414651] py-2 hover:bg-gray-100">View on Map</button>
              <div className="w-px bg-gray-300"></div>
            <button className="px-4 py-2 text-[#414651] hover:bg-gray-100">Acknowledge</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logistics Delay Card */}
      <Card
        className="rounded-2xl border shadow-sm h-[377px]"
        style={{ backgroundColor: '#FFFFFF', borderColor: '#FEEE95' }}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <div className="text-2xl">
               <img src='/images/Plant Icon (6).png' alt='icon'/>
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-[#CA6702]">Logistics Delay</h4>
              <p className="text-[8px] text-[#717680]">Updated 2h ago</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-[25px] font-semibold">5 Collection</h3>
            <p className="text-[14px] text-[#181D27]">Trips Delayed</p>

            <div className=" mt-5">
              <p className='text-[9px] text-[181D27]'>Total biomass: <br/> <strong className='text-[16px] text-[#181D27]'>620 tons</strong></p>
              <p className=" text-[9px] text-[181D27] mt-1">Unassigned Parcels:<br/> <strong className='text-[16px] text-[#181D27'>#98, #106, #110</strong></p>
            </div>
             <div className='border-b mt-12'></div>

            <div class="inline-flex rounded-full border border-gray-300 overflow-hidden text-[9px] font-semibold text-[#414651] mt-[53px] ">
            <button className="px-[7px] text-[#414651] py-2 hover:bg-gray-100">Assign Agents</button>
              <div className="w-px bg-gray-300"></div>
            <button className="px-4 py-2 text-[#414651] hover:bg-gray-100">View Routes</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Utilization Drop Card */}
      <Card
        className="rounded-2xl border shadow-sm h-[377px]"
        style={{ backgroundColor: '#F0F9FF', borderColor: '#7CD4FD' }}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <div className="text-2xl">
               <img src='/images/Plant Icon (7).png' alt='icon'/>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold text-[#1D4ED8]">Utilization Drop</h4>
              <p className="text-[8px] text-[#181D27]">Updated 2h ago</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-[25px] font-semibold">63%</h3>
            <p className="text-[14px] text-[#181D27]">Utilization Down</p>

            <div className=" mt-4  ">
              <p className='text-[9px] text-[181D27]'>Consecutive dip:<br/> <strong className='text-[16px] text-[#181D27]'>3 Day</strong></p>
              <div className='flex mt-2 space-x-4'>
              <p className='text-[9px] text-[181D27]'>Forecasted:<br/> <strong className='text-[16px] text-[#181D27]'>1080 <span className='text-[8px]'>tons</span></strong></p>
              <p className='text-[9px] text-[181D27]'>Collected:<br/> <strong className='text-[16px] text-[#181D27]'>620<span className='text-[8px]'>tons</span></strong></p>
              </div>
            </div>

             <div className='border-b mt-12'></div>

          <div className="inline-flex rounded-full border border-gray-300 overflow-hidden text-[9px] font-semibold text-[#414651] mt-[53px] ">
            <button className="px-[7px] py-2 hover:bg-gray-100">Open Report</button>
              <div className="w-px bg-gray-300"></div>
            <button className="px-4 py-2 hover:bg-gray-100">Analyze Drop</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsSection;
