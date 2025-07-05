// components/LocationTooltip.jsx
import React from "react";
const LocationTooltip = ({ location }) => {
  const {
    name,
    crops,
    fieldsReady,
    totalFields,
    harvestWindow,
    rainRisk,
    readinessColor,
  } = location;

  return (
    <div className="tooltip-content">
      <div className="font-semibold text-white flex items-center mb-1">
        <div
          className="w-[16px] h-[16px] rounded-full mr-2 border-2 border-white"
          style={{ background: readinessColor }}
        />
        <span className="text-md font-medium">{name}</span>
      </div>
      <div className="text-[#717680] text-sm">
        <div>
          Crop Type(s):{" "}
          <span className="text-white font-medium">{crops.join(", ")}</span>
        </div>
        <div>
          Fields Ready:{" "}
          <span className="text-white font-medium">{fieldsReady}</span> of{" "}
          {totalFields} fields harvest-ready
        </div>
        <div>
          Harvest Window: ETA{" "}
          <span className="text-white font-medium">{harvestWindow}</span>
        </div>
        <div>
          Rain Risk: <span className="text-white">{rainRisk}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationTooltip;
