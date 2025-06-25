import React from 'react';
import Card from './ui/Card';
import CardContent from './ui/CardContent';

const AlertsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Weather Alert Card */}
      <Card
        className="rounded-2xl border shadow-sm"
        style={{ backgroundColor: '#FDEBEC', borderColor: '#FDA29B' }}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <div className="text-2xl">⛈️</div>
            <div>
              <h4 className="text-sm font-semibold text-[#E14343]">Weather Alert</h4>
              <p className="text-xs text-gray-500">Updated 2h ago</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">3 Parcels</h3>
            <p className="text-sm text-gray-700">Rainfall risk</p>

            <div className="flex flex-wrap gap-2 text-xs mt-2">
              <span className="bg-[#D1FADF] text-green-800 px-2 py-1 rounded-full">Crop: Maize</span>
              <span className="bg-[#E0EAFF] text-blue-800 px-2 py-1 rounded-full">Readiness: 85%</span>
              <span className="bg-[#FECACA] text-red-700 px-2 py-1 rounded-full">Rain ETA: 18 hrs</span>
            </div>

            <ul className="text-xs text-gray-600 mt-2 space-y-1">
              <li><strong>Parcel #103</strong> – Rajarampuri</li>
              <li><strong>Parcel #107</strong> – Shirol Block</li>
              <li><strong>Parcel #109</strong> – Ichalkaranji</li>
            </ul>

            <div className="flex gap-2 mt-4">
              <button className="bg-white text-sm text-gray-800 border px-3 py-1 rounded-full">View on Map</button>
              <button className="bg-white text-sm text-gray-800 border px-3 py-1 rounded-full">Acknowledge</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logistics Delay Card */}
      <Card
        className="rounded-2xl border shadow-sm"
        style={{ backgroundColor: '#FFFFFF', borderColor: '#FEEE95' }}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <div className="text-2xl">🚚</div>
            <div>
              <h4 className="text-sm font-semibold text-[#CA6702]">Logistics Delay</h4>
              <p className="text-xs text-gray-500">Updated 2h ago</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">5 Collection</h3>
            <p className="text-sm text-gray-700">Trips Delayed</p>

            <div className="text-xs text-gray-600 mt-2">
              <p>Total biomass: <strong>620 tons</strong></p>
              <p className="mt-1">Unassigned Parcels: <strong>#98, #106, #110</strong></p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="bg-white text-sm text-gray-800 border px-3 py-1 rounded-full">Assign Agents</button>
              <button className="bg-white text-sm text-gray-800 border px-3 py-1 rounded-full">View Routes</button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Utilization Drop Card */}
      <Card
        className="rounded-2xl border shadow-sm"
        style={{ backgroundColor: '#F0F9FF', borderColor: '#7CD4FD' }}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-2">
            <div className="text-2xl">📉</div>
            <div>
              <h4 className="text-sm font-semibold text-[#1D4ED8]">Utilization Drop</h4>
              <p className="text-xs text-gray-500">Updated 2h ago</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">63%</h3>
            <p className="text-sm text-gray-700">Utilization Down</p>

            <div className="text-xs text-gray-600 mt-2">
              <p>Consecutive dip: <strong>3 Day</strong></p>
              <p>Forecasted: <strong>1080 tons</strong></p>
              <p>Collected: <strong>620 tons</strong></p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="bg-white text-sm text-gray-800 border px-3 py-1 rounded-full">Open Report</button>
              <button className="bg-white text-sm text-gray-800 border px-3 py-1 rounded-full">Analyze Drop</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertsSection;
