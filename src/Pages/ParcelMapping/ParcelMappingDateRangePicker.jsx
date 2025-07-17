import React, { useState } from "react";
import CustomDatePicker from "./CustomDatePicker";

const ParcelMappingDateRangePicker = ({ onChange }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedRange, setSelectedRange] = useState({
        startDate: new Date("2025-07-11"), // default for preview
        endDate: new Date("2025-07-11"),
    });

    const [tripType, setTripType] = useState("tcc");

    const formatDate = (date) =>
        date?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

    const handleApply = (range) => {
        setSelectedRange(range);
        setShowDatePicker(false);
        onChange?.(range);
    };

    return (
        <div className="flex items-center gap-6">
            {/* 📅 Trip Date */}
            <div className="flex flex-col text-sm font-medium text-[#414651]">
                <label className="mb-1 text-[#414651] text-sm font-medium flex items-center">
                    Trip Date<span className="text-[#4F7A21] ml-1">*</span>
                    <span className="ml-1 text-[#B0B0B0] cursor-pointer">&#9432;</span>
                </label>
                <div
                    onClick={() => setShowDatePicker(true)}
                    className="flex items-center gap-2 h-[36px] border border-[#E5E5E5] bg-[bg-[#FAFAFA]] rounded-md px-[12px] py-[8px] text-sm shadow-sm text-[#717680] cursor-pointer"
                >
                    <img
                        src="/images/CalendarIcon.svg"
                        alt="Calendar"
                        className="w-[16px] h-[16px]"
                    />
                    <span className="text-sm text-[#414651] font-medium">
                        {selectedRange?.startDate instanceof Date
                            ? formatDate(selectedRange.startDate)
                            : "Select Date"}
                    </span>
                </div>

                {showDatePicker && (
                    <CustomDatePicker
                        onCancel={() => setShowDatePicker(false)}
                        onApply={handleApply}
                    />
                )}
            </div>

            {/* 🚚 Trip Type */}
            <div className="flex flex-col">
                <label className="text-[#414651] text-sm font-medium flex items-center mb-1">
                    Trip Type<span className="text-[#4F7A21] ml-1">*</span>
                    <span className="ml-1 text-[#B0B0B0] cursor-pointer">&#9432;</span>
                </label>
                <div className="flex border border-[#E5E5E5] rounded-xl overflow-hidden">
                    <button
                        onClick={() => setTripType("tcc")}
                        className={`px-4 py-2 text-sm font-semibold ${tripType === "tcc"
                            ? "bg-white text-[#414651] shadow"
                            : "bg-[#FAFAFA] text-[#717680]"
                            }`}
                    >
                        TCC (Return Trip)
                    </button>
                    <button
                        onClick={() => setTripType("chain")}
                        className={`px-4 py-2 text-sm font-semibold ${tripType === "chain"
                            ? "bg-white text-[#414651] shadow"
                            : "bg-[#FAFAFA] text-[#717680]"
                            }`}
                    >
                        Chain Routing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ParcelMappingDateRangePicker;
