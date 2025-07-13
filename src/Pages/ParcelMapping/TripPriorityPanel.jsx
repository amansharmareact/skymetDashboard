import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ConfirmTripModal from "./ConfirmTripModal";
import UnsavedChangesModal from "./UnsavedChangesModal";
import CustomDatePicker from "./CustomDatePicker";

const TripPriorityPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [unsavedShowModal, setUnsavedShowModal] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleApply = (date) => {
    setSelectedDate(date);
    setShowPicker(false);
  };
  return (
    <div className="w-full max-w-5xl bg-white px-4 py-2">
      {/* Top Row: Dropdown and Audit Code */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-full flex items-center justify-between">
          <div className="">
            <label className="block text-sm font-medium text-[#717680] mb-1">
              Trip Priority <span className="text-[#4F7A21]">*</span>
            </label>
            <select className="w-[450px] h-[44px] border border-[#D5D7DA] text-[#717680] rounded-md px-[14px] py-[10px] text-sm focus:outline-none">
              <option>Rain Sensitive</option>
            </select>
          </div>
          <div>
            <p
              className="text-sm font-medium text-[#717680] ml-2"
              onClick={() => setShowPicker(!showPicker)}
            >
              Audit Tracking Code
            </p>
            <p className="text-[24px] font-bold text-[#414651]">427452</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mb-5 gap-x-4">
        <button className="flex items-center justify-center gap-2 w-full border border-[#D5D7DA] px-4 h-[44px] text-[#414651] font-bold rounded-md bg-white hover:bg-gray-100 transition">
          <FaArrowLeft className="text-sm" />
          Go Back Selecting Parcels
        </button>

        <button className="flex items-center justify-center w-full gap-2 bg-[#4F7A21] text-white font-bold rounded-md px-6 h-[44px] transition">
          Assign Driver & Vehicle
          <FaArrowRight className="text-sm" />
        </button>
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
      {/* <ConfirmTripModal onClose={() => setShowModal(false)} /> */}
      {/* <UnsavedChangesModal onUnsavedClose={() => setUnsavedShowModal(false)} /> */}
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
