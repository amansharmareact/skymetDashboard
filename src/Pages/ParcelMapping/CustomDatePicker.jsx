import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CustomDateRangePicker = ({ onCancel, onApply }) => {
  const today = new Date();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(
      new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [isSelectingStart, setIsSelectingStart] = useState(true);

  const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
  ).getDate();

  const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
  ).getDay();

  const handleDayClick = (day) => {
    const selected = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
    );

    if (isSelectingStart) {
      setStartDate(selected);
      setEndDate(null);
      setIsSelectingStart(false);
    } else {
      if (startDate && selected < startDate) {
        setStartDate(selected);
        setEndDate(null);
      } else {
        setEndDate(selected);
        setIsSelectingStart(true);
      }
    }
  };

  const isSelected = (day) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return (
        (startDate && d.toDateString() === startDate.toDateString()) ||
        (endDate && d.toDateString() === endDate.toDateString())
    );
  };

  const isInRange = (day) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return startDate && endDate && d > startDate && d < endDate;
  };

  return (
      <div className="rounded-2xl bg-black bg-opacity-30 flex items-center justify-center shadow-lg p-5 fixed inset-0 z-[99999]">
        <div className="bg-white rounded-xl w-[328px] p-6 relative shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between text-[#252B37] mb-4">
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="text-xl text-[#717680]">
              <MdKeyboardArrowLeft />
            </button>
            <p className="font-bold text-sm">
              {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
            </p>
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="text-xl text-[#717680]">
              <MdKeyboardArrowRight />
            </button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 text-center text-sm text-[#414651] font-medium mb-2">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <div key={d}>{d}</div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 text-sm text-center mb-5 text-[#414651]">
            {Array(firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1).fill("").map((_, i) => (
                <div key={`blank-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              return (
                  <button
                      key={day}
                      onClick={() => handleDayClick(day)}
                      className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full transition 
                  ${isSelected(day) ? "bg-[#4F7A21] text-white font-semibold" : ""}
                  ${isInRange(day) ? "bg-[#E0F3C3]" : ""}
                  hover:bg-gray-200`}
                  >
                    {day}
                  </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex justify-between pt-4 border-t border-gray-200 gap-4">
            <button onClick={onCancel} className="h-[40px] w-full px-5 border border-[#D5D7DA] rounded-md text-sm font-semibold text-[#252B37] hover:bg-gray-100">
              Cancel
            </button>
            <button
                onClick={() => onApply({ startDate, endDate })}
                className="h-[40px] w-full px-6 bg-[#4F7A21] text-white rounded-md text-sm font-semibold hover:bg-[#3a620c]"
                disabled={!startDate || !endDate}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
  );
};

export default CustomDateRangePicker;
