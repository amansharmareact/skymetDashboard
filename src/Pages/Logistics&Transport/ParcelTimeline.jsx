// ParcelTimeline.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";

const steps = [
  "Shirgaon",
  "Ambewadi",
  "Shahuwadi",
  "Kale",
  "Padal",
  "Kolhapur CBG Plant",
];

const currentStep = 3; // index 0-based

const ParcelTimeline = () => {
  // Calculate left offset and width for the progress line
  const stepCount = steps.length;
  const percentPerStep = 100 / (stepCount - 1);
  const leftPercent = 0; // Start at first step
  const widthPercent = currentStep * percentPerStep;

  return (
    <div className="flex items-center justify-center w-full bg-gray-50 lg:h-[56px]">
      <div className="flex items-center w-full max-w-5xl relative">
        {/* Background progress line */}
        <div className="absolute top-[28%] h-0.5 bg-gray-200 rounded-full z-0 transform -translate-y-1/2" />
        {/* Foreground progress line */}
        <div
          className="absolute top-[28%] z-10 h-0.5 rounded-full transform -translate-y-1/2 transition-all duration-500"
          style={{
            left: `calc(${leftPercent}% + 62px)`,
            width: `calc(${widthPercent}% - 150px)`,
            background: "linear-gradient(90deg, #4F7A21 60%, #7BC043 100%)",
            boxShadow: "0 2px 8px 0 rgba(79,122,33,0.15)",
          }}
        />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="flex-1 z-20 flex flex-col items-center">
              {/* Circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 shadow-md transition-all duration-300
                  ${isCompleted
                    ? "border-[#4F7A21] bg-[#4F7A21] text-white"
                    : isActive
                      ? "border-[#7BC043] bg-white text-[#4F7A21] scale-110"
                      : "border-gray-300 bg-white text-gray-300"
                  }
                  group-hover:scale-105
                `}
                style={{
                  boxShadow: isActive ? "0 4px 16px 0 rgba(123,192,67,0.15)" : undefined,
                  position: "relative",
                }}
              >
                {isCompleted ? (
                  <FaCheck className="text-[16px]" />
                ) : isActive ? (
                  <>
                    <div className="w-[24px] h-[24px] rounded-full bg-[#7bc043]" />
                    <div className="absolute w-2 h-2 rounded-full border-2 border-[#7BC043] bg-white" />
                  </>
                ) : (
                  <div className="w-[8px] h-[8px] rounded-full bg-gray-300" />
                )}
              </div>
              {/* Label */}
              <span
                className={`mt-3 text-[14px] text-base text-center font-medium transition-colors duration-300
                  truncate max-w-[90px]
                  ${isCompleted
                    ? "text-[#4F7A21]"
                    : isActive
                      ? "text-[#7BC043]"
                      : "text-gray-400"
                  }`}
                title={step} // Optional: shows full text on hover
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParcelTimeline;
