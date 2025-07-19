import React from "react";

const steps = [
  { label: "Shirgaon", status: "completed" },
  { label: "Ambewadi", status: "completed" },
  { label: "Shahuwadi", status: "current" },
  { label: "Kale", status: "upcoming" },
  { label: "Padal", status: "upcoming" },
  { label: "Kolhapur CBG Plant", status: "upcoming" },
];

const ParcelTimeline = () => {
  return (
    <div className="flex items-center w-full px-6 py-4 bg-gradient-to-br from-white to-[#F4FAF3] rounded-md">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const status = step.status;

        const isCompleted = status === "completed";
        const isCurrent = status === "current";
        const isUpcoming = status === "upcoming";

        return (
          <div key={index} className="flex items-center flex-1 min-w-0">
            {/* Step Indicator */}
            <div className="flex flex-col items-center w-full min-w-[70px]">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 
                  ${
                    isCompleted
                      ? "bg-[#4F7A21] border-[#4F7A21] text-white"
                      : isCurrent
                      ? "border-[#4F7A21] text-[#4F7A21]"
                      : "border-[#D5D7DA] text-[#D5D7DA]"
                  } text-sm`}
              >
                {isCompleted ? "✓" : "●"}
              </div>
              <div
                className={`mt-2 text-[13px] text-center leading-4
                  ${
                    isCompleted || isCurrent
                      ? "text-[#4F7A21] font-medium"
                      : "text-[#414651] font-normal"
                  }`}
              >
                {step.label}
              </div>
            </div>

            {/* Connector */}
            {!isLast && (
              <div
                className={`h-[2px] flex-1 mx-1 
                  ${
                    isCompleted || isCurrent
                      ? "bg-[#4F7A21]"
                      : "bg-[#D5D7DA]"
                  }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ParcelTimeline;
