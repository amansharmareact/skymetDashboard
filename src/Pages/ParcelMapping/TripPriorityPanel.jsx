import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ConfirmTripModal from "./ConfirmTripModal";
import UnsavedChangesModal from "./UnsavedChangesModal";
import CustomDatePicker from "./CustomDatePicker";
import { Link, useRouteError } from "react-router-dom"

const TripPriorityPanel = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleApply = (date) => {
    setSelectedDate(date);
    setShowPicker(false);
  };


  return (
    <div className="w-full max-w-5xl bg-white py-[24px]">

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mb-5 gap-x-4">
        <Link to="/parcel-mapping-two" className="decoration:none flex items-center justify-center gap-2 w-full border border-[#D5D7DA] px-4 h-[44px] text-[#414651] font-bold rounded-md bg-white hover:bg-gray-100 transition">
          <FaArrowLeft className="text-sm" />
          <span> Go Back Selecting Parcels</span>
        </Link>

        <Link to="/assign-driver" className="flex items-center justify-center w-full gap-2 bg-[#4F7A21] text-white font-bold rounded-md px-6 h-[44px] transition">
          Assign Driver & Vehicle
          <FaArrowRight className="text-sm" />
        </Link>

      </div>

      {/* Step Progress Bar */}
      <div className="grid grid-cols-4 gap-4 text-sm">
        <div>
          <hr className="border-t-[3px] border-[#4F7A21] mb-2" />
          <p className="font-bold text-sm text-[#414651]">Step 1:</p>
          <p className="text[#535862] font-normal text-sm">
            Discover Villages with Harvest Potential
          </p>
        </div>
        <div>
          <hr className="border-t-[3px] border-[#4F7A21] mb-2" />
          <p className="font-bold text-sm text-[#414651]">Step 2:</p>
          <p className="text[#535862] font-normal text-sm">
            Select Parcels for the Trip
          </p>
        </div>
        <div>
          <hr className="border-t-[3px] border-[#4F7A21] mb-2" />
          <p className="font-bold text-sm text-[#414651]">Step 3:</p>
          <p className="text[#535862] font-normal text-sm">Optimize Route</p>
        </div>
        <div>
          <hr className="border-t-[3px] border-[#B5E68A] mb-2" />
          <p className="font-bold text-sm text-[#414651]">Step 4:</p>
          <p className="text[#535862] font-normal text-sm">
            Assign Driver, Vehicle & Create Trip
          </p>
        </div>
      </div>
      {showPicker && (
        <div className="mt-6 z-50">
          <CustomDatePicker
            onCancel={() => setShowPicker(false)}
            onApply={handleApply}
          />
        </div>
      )}
    </div>
  );
};

export default TripPriorityPanel;
