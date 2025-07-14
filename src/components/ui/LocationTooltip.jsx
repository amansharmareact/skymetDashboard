import React from "react";

const SmartTooltip = ({ location = {} }) => {
  const {
    name,
    crops,
    fieldsReady,
    totalFields,
    harvestWindow,
    rainRisk,
    readinessColor,
    readiness,   // Additional prop used in MapTooltip
    estYield,    // If Est. Yield is passed separately
    rainAlert,   // Optional if different from rainRisk
  } = location;

  return (
    <div className="tooltip-content">
      {/* Title with readiness dot and name */}
      {(readinessColor || name) && (
        <div className="font-semibold text-white flex items-center mb-1">
          {readinessColor && (
            <div
              className="w-[16px] h-[16px] rounded-full mr-2 border-2 border-white"
              style={{ background: readinessColor }}
            />
          )}
          {name && <span className="text-md font-medium">{name}</span>}
        </div>
      )}

      <div className="text-[#717680] text-sm">
        {crops && (
          <div>
            Crop Type(s):{" "}
            <span className="text-white font-medium">{crops}</span>
          </div>
        )}

        {fieldsReady !== undefined && totalFields !== undefined && (
          <div>
            Fields Ready:{" "}
            <span className="text-white font-medium">{fieldsReady}</span> of{" "}
            {totalFields} fields harvest-ready
          </div>
        )}

        {readiness && (
          <div>
            Readiness:{" "}
            <span className="text-white font-medium">{readiness}</span>
          </div>
        )}

        {harvestWindow && (
          <div>
            Harvest Window: ETA{" "}
            <span className="text-white font-medium">{harvestWindow}</span>
          </div>
        )}

        {estYield && (
          <div>
            Est. Yield: <span className="text-white">{estYield}</span>
          </div>
        )}

        {rainRisk && (
          <div>
            Rain Risk: <span className="text-white">{rainRisk}</span>
          </div>
        )}

        {rainAlert && !rainRisk && (
          <div>
            Rain Alert: <span className="text-white">{rainAlert}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartTooltip;
