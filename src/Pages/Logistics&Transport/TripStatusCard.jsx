import { RotateCcw } from "lucide-react";
import React, { useState } from "react";
import ReassignTripModal from "../Logistics&Transport/ReassignTripModal";
import ReassignParcelModal from "./ReassignParcelModal";
const TripStatusCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isParcelModalOpen, setIsParcelModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseParcelModal = () => setIsParcelModalOpen(false);

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
    <div className="bg-[#F5F5F5] shadow-sm rounded-xl p-6 mx-auto text-sm">
      {/* Top Info */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <p className="font-medium text-[#717680] text-sm">Trip ID</p>
          <p className="text-md font-medium text-black pt-1">{trip.id}</p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Status</p>
          <span className="w-full flex items-center justify-center text-[13px] font-semibold px-[6px] py-[2px] rounded-full bg-[#FEF6EE] text-[#E04F16] border border-[#F7B27A]">
            <div className="w-[5px] h-[5px] bg-[#E04F16] rounded-full mr-2"></div>{" "}
            {trip.status}
          </span>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Truck No.</p>
          <p className="text-md font-medium text-black pt-1">{trip.truckNo}</p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Driver Name</p>
          <p className="text-md font-medium text-black pt-1">
            {trip.driverName}
          </p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">ETA</p>
          <p className="text-md font-medium text-black pt-1">{trip.eta}</p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Total Distance</p>
          <p className="text-md font-medium text-black pt-1">{trip.distance}</p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Stops</p>
          <p className="text-md font-medium text-black pt-1">{trip.stops}</p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Load Forecast</p>
          <p className="text-md font-medium text-black pt-1">
            {trip.loadForecast}
          </p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Actual Load</p>
          <p className="text-md font-medium text-black pt-1">
            {trip.actualLoad}
          </p>
        </div>
      </div>

      {/* Middle Info */}

      {/* Alert & Risk */}
      <div className="flex gap-6 items-center mb-4">
        <div>
          <p className="font-medium text-[#717680] text-sm">Alert Label</p>
          <p className="text-md font-medium text-black pt-1">
            {trip.alertLabel}
          </p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">
            🌧️ Risk Indicator
          </p>
          <p className="text-md font-medium text-black pt-1">
            {trip.riskIndicator}
          </p>
        </div>
        <div>
          <p className="font-medium text-[#717680] text-sm">Last Synced</p>
          <p className="text-md font-medium text-black pt-1">
            {trip.lastSynced}
          </p>
        </div>
        <div className="bg-white w-[44px] h-[44px] flex items-center justify-center gap-1 cursor-pointer rounded-md shadow-sm">
          <RotateCcw className="w-4 h-4 text-[#414651]" />
        </div>
        <div className="inline-flex border border-gray-300 rounded-md overflow-hidden text-sm font-medium">
          <button
            className="px-4 py-2 bg-white hover:bg-gray-100 border-r border-gray-300"
            onClick={handleOpenModal}
          >
            Reassign
          </button>

          {/* Modal */}
          {isModalOpen && <ReassignTripModal onClose={handleCloseModal} />}
          {isParcelModalOpen && (
            <ReassignParcelModal onClose={handleCloseParcelModal} />
          )}
          {isModalOpen && <ReassignTripModal onClose={handleCloseModal} />}
          <button
            className="px-4 py-2 bg-white hover:bg-gray-100 border-r border-gray-300"
            onClick={() => setIsParcelModalOpen(true)}
          >
            Split Parcels
          </button>
          <button className="px-4 py-2 bg-white hover:bg-gray-100">
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripStatusCard;
