import React, { useState } from "react";
import CustomDatePicker from "./CustomDatePicker"; // ✅ Make sure path is correct

const DateRangeSelector = ({ onChange, label = "Date Range Picker" }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedRange, setSelectedRange] = useState({
        startDate: null,
        endDate: null,
    });

    const formatDate = (date) =>
        date?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    const handleApply = (range) => {
        setSelectedRange(range);
        setShowDatePicker(false);
        onChange?.(range); // Notify parent
    };

    return (
        <>
            {/* 📅 Date Range Picker */}
            <div className="flex flex-col text-sm font-medium text-[#414651]">
                <div
                    onClick={() => setShowDatePicker(true)}
                    className="flex items-center gap-2 h-[36px] w-[233px] border border-[#ACDC79] bg-[#F6FEF9] rounded-full px-[12px] py-[8px] text-sm text-[#717680] cursor-pointer"
                >
                    <img
                        src="/images/CalendarIcon.svg"
                        alt="CalendarIcon"
                        className="text-[#4F7A21] w-[20px] h-[20px]"
                    />
                    <span className="text-sm text-[#414651]">
            {selectedRange?.startDate instanceof Date &&
            selectedRange?.endDate instanceof Date
                ? `${formatDate(selectedRange.startDate)} – ${formatDate(
                    selectedRange.endDate
                )}`
                : "Select Range"}
          </span>
                </div>

                {/* Overlay Calendar */}
                {showDatePicker && (
                    <CustomDatePicker
                        onCancel={() => setShowDatePicker(false)}
                        onApply={handleApply}
                    />
                )}
            </div>

            {/* 🚚 Trip Type Selector */}
            <div className="mt-4">
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
        </>
    );
};

export default DateRangeSelector;
