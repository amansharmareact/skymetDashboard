import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CustomDatePicker = ({ onCancel, onApply }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(
    new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
  );

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
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today);
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  return (
    <div
      className="rounded-2xl bg-black bg-opacity-30 flex items-center justify-center shadow-lg p-5 fixed inset-0"
      style={{ zIndex: "99999" }}
    >
      <div className="bg-white rounded-xl w-[328px] p-6 relative shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between text-[#252B37] mb-4">
          <button onClick={handlePrevMonth} className="text-xl text-[#717680]">
            <MdKeyboardArrowLeft />
          </button>
          <p className="font-bold text-sm">
            {currentMonth.toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentMonth.getFullYear()}
          </p>
          <button onClick={handleNextMonth} className="text-xl text-[#717680]">
            <MdKeyboardArrowRight />
          </button>
        </div>

        {/* Date Input */}
        <div className="flex items-center justify-between mb-4">
          <input
            className="border border-[#D5D7DA] rounded-md px-3 py-2 text-md text-[#181D27] w-[160px]"
            value={selectedDate.toDateString()}
            readOnly
          />
          <button
            onClick={handleToday}
            className="px-4 py-[6px] border border-[#D5D7DA] rounded-md font-bold text-sm text-[#252B37] hover:bg-gray-100"
          >
            Today
          </button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 text-center text-sm text-[#414651] font-medium mb-2">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 text-sm text-center mb-5 text-[#414651]">
          {Array(firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1)
            .fill("")
            .map((_, i) => (
              <div key={`blank-${i}`} />
            ))}

          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;
            const isSelected =
              selectedDate.getFullYear() === currentMonth.getFullYear() &&
              selectedDate.getMonth() === currentMonth.getMonth() &&
              selectedDate.getDate() === day;

            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full transition ${
                  isSelected
                    ? "bg-[#4F7A21] text-white font-semibold"
                    : "hover:bg-gray-200"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between pt-4 border-t border-gray-200 gap-4">
          <button
            onClick={onCancel}
            className="h-[40px] w-full px-5 border border-[#D5D7DA] rounded-md text-sm font-semibold text-[#252B37] hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onApply(selectedDate)}
            className="h-[40px] w-full px-6 bg-[#4F7A21] border-2 text-white rounded-md text-sm font-semibold hover:bg-[#3a620c]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDatePicker;
