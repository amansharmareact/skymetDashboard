import React from "react";

const TripStatusCard = () => {
  const trip = {
    id: "TRP-3409",
    status: "En Route",
    truckNo: "MH12-AB-2563",
    driverName: "Sunil Pawar",
    eta: "14:25 Hrs",
    distance: "36.2 km",
    stops: "5 Parcels",
    loadForecast: "Est. 9.2 Tons",
    actualLoad: "7.5 Tons (if live)",
    alertLabel: "1 Skipped Parcel",
    riskIndicator: "Rain Risk Ahead",
    lastSynced: "21/08/2025 14:23",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mx-auto text-sm">
      {/* Top Info */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
        <div>
          <p className="font-semibold">Trip ID</p>
          <p>{trip.id}</p>
        </div>
        <div>
          <p className="font-semibold">Status</p>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-orange-700 bg-orange-100 text-xs">
            ● {trip.status}
          </span>
        </div>
        <div>
          <p className="font-semibold">Truck No.</p>
          <p>{trip.truckNo}</p>
        </div>
        <div>
          <p className="font-semibold">Driver Name</p>
          <p>{trip.driverName}</p>
        </div>
        <div>
          <p className="font-semibold">ETA</p>
          <p>{trip.eta}</p>
        </div>
      </div>

      {/* Middle Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div>
          <p className="font-semibold">Total Distance</p>
          <p>{trip.distance}</p>
        </div>
        <div>
          <p className="font-semibold">Stops</p>
          <p>{trip.stops}</p>
        </div>
        <div>
          <p className="font-semibold">Load Forecast</p>
          <p>{trip.loadForecast}</p>
        </div>
        <div>
          <p className="font-semibold">Actual Load</p>
          <p>{trip.actualLoad}</p>
        </div>
      </div>

      {/* Alert & Risk */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-4">
        <div>
          <p className="font-semibold">Alert Label</p>
          <p>{trip.alertLabel}</p>
        </div>
        <div>
          <p className="font-semibold">🌧️ Risk Indicator</p>
          <p>{trip.riskIndicator}</p>
        </div>
        <div>
          <p className="font-semibold">Last Synced</p>
          <p>{trip.lastSynced}</p>
        </div>
        <div className="flex justify-end">
          <button
            className="text-lg px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
            title="Sync"
          >
            🔄
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-2">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Reassign
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Split Parcels
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Export Report
        </button>
      </div>
    </div>
  );
};

export default TripStatusCard;
