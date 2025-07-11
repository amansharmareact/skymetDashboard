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
    <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-br from-white to-gray-50 rounded">
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1;
        const status = step.status;

        const lineColor =
          status === "completed" || status === "current"
            ? "bg-green-700"
            : "bg-gray-200";

        return (
          <div key={idx} className="flex items-center flex-1 min-w-0">
            {/* Step Indicator */}
            <div className="flex flex-col items-center text-center w-full">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                  status === "completed"
                    ? "bg-green-700 border-green-700 text-white"
                    : status === "current"
                    ? "border-green-700 text-green-700"
                    : "border-gray-300 text-gray-300"
                }`}
              >
                {status === "completed" ? "✓" : "●"}
              </div>
              <div
                className={`mt-2 text-xs ${
                  status === "completed"
                    ? "text-green-800 font-medium"
                    : status === "current"
                    ? "text-green-800 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {step.label}
              </div>
            </div>

            {/* Connector Line */}
            {!isLast && (
              <div className={`h-1 flex-1 mx-1 ${lineColor}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ParcelTimeline;
