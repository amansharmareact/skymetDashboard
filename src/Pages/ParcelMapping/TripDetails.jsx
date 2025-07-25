import React, { useState } from "react";
import CustomDateRangePicker from "./CustomDatePicker"; // ✅ Ensure this path is correct

const TripDetails = () => {
  const [tripStartDate, setTripStartDate] = useState(null);
  const [tripEndDate, setTripEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) => {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    if (isNaN(date.getTime())) return "Invalid Date";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleDateApply = ({ startDate, endDate }) => {
    if (startDate && endDate) {
      setTripStartDate(new Date(startDate));
      setTripEndDate(new Date(endDate));
    }
    setShowDatePicker(false);
  };

  return (
      <div className="w-full max-w-2xl font-sans">
        {/* Draft Status */}
        <p className="text-[#535862] font-medium text-xs mb-4">
          Saving as drafts...
        </p>

        {/* Trip Info Fields */}
        <div className="flex space-x-10">
          {/* Trip Date */}
          <div>
            <label className="text-[#414651] text-sm font-medium flex items-center mb-2">
              Trip Date<span className="text-[#4F7A21] ml-1">*</span>
              <span className="ml-1 text-[#B0B0B0] cursor-pointer">&#9432;</span>
            </label>
            <div
                onClick={() => setShowDatePicker(true)}
                className="flex items-center space-x-2 bg-white border border-[#D5D7DA] rounded-[8px] px-[14px] py-[10px] w-[230px] cursor-pointer"
            >
              <img
                  src="/images/CalendarIcon.svg"
                  alt="Calendar"
                  className="h-5 w-5 text-[#7B7B7B]"
              />
              <span className="text-[#414651] text-sm font-bold">
              {tripStartDate && tripEndDate
                  ? `${formatDate(tripStartDate)} – ${formatDate(tripEndDate)}`
                  : "Select Date Range"}
            </span>
            </div>
          </div>

          {/* Trip Type */}
          <div>
            <label className="text-[#414651] text-sm font-medium flex items-center mb-2">
              Trip Type<span className="text-[#4F7A21] ml-1">*</span>
              <span className="ml-1 text-[#B0B0B0] cursor-pointer">&#9432;</span>
            </label>
            <div className="flex items-center bg-white border border-[#E5E5E5] rounded-xl w-[290px]">
              <div className="px-4 py-3 rounded-xl bg-text-[#414651] text-sm font-bold shadow-md">
                TCC (Return Trip)
              </div>
              <div className="px-4 py-3 text-[#717680] bg-[#FAFAFA] text-sm font-bold">
                Chain Routing
              </div>
            </div>
          </div>
        </div>

        {/* Show Custom Date Picker */}
        {showDatePicker && (
            <CustomDateRangePicker
                onCancel={() => setShowDatePicker(false)}
                onApply={handleDateApply}
            />
        )}
      </div>
  );
};

export default TripDetails;
