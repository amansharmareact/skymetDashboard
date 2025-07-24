import React, { useEffect, useRef, useState } from "react";
import RouteCard from "./RouteCardTooltip";
import RouteCardPortal from "./RouterCardPortal";

const TransportStatusCard = () => {
  const fillRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (fillRef.current) {
      fillRef.current.style.width = "0%"; // Set progress %
    }
  }, []);

  const moreRef = useRef(null);

  return (
    <div className="w-fit-content h-full rounded-xl border relative border-[#E9EAEB] bg-[#FAFAFA] mx-[6px] p-[14px] mt-[6px] text-[#111827] ">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[20px] font-bold leading-none text-black">
            TRP-3409
          </h2>
          <p className="text-[14px] text-[#181D27] mt-[3px]">MH12-AB-2563</p>
        </div>
        <span className="flex items-center justify-center text-[13px] font-semibold px-2 py-[2px] rounded-full bg-[#FEF6EE] text-orange-600 border border-[#F7B27A]">
          <div className="w-[5px] h-[5px] bg-[#E04F16] rounded-full mr-2"></div>{" "}
          En Route
        </span>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 text-[13px] mb-4">
        {[
          { label: "Driver Name", value: "Sunil Pawar" },
          { label: "Total Distance", value: "36.2 km" },
          { label: "ETA", value: "14:25 Hrs" },
          { label: "Fuel Estimate", value: "6.2 L Diesel" },
          { label: "Stops", value: "5 Parcels" },
          { label: "Load Forecast", value: "Est: 9.2 Tons" },
          { label: "Actual(if live)", value: "9.2 Tons" },
          {
            label: "Alerts (if any)",
            value: (
              <span className="text-[#F79009] font-bold">1 Skipped Parcel</span>
            ),
          },
        ].map((item, i) => (
          <div key={i} className="flex flex-col text-sm">
            <span className="text-xs text-[#717680] font-normal">
              {item.label}
            </span>
            <span className="text-[16px] font-bold text-[#414651]">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Route */}
      <div className="border-t pt-3">
        <div className="flex items-center gap-[6px] text-[13px] font-semibold text-gray-600 mb-2">
          {/* Start Location */}
          <div className="w-[22px] h-[22px] rounded-full border-[1px] border-[#ACDC79] flex items-center justify-center p-1 text-sm">
            <img src="/images/Location.svg" alt="Location" />
          </div>

          {/* Shirgaon */}
          <div className="h-6 min-w-[75px] py-[3px] px-[8px] border border-[#F9DBAF] text-[#414651] bg-[#FEFAF5] rounded-full flex items-center gap-1">
            <img
              src="/images/RedLocation.svg"
              className="w-full"
              alt="Location"
            />
            Shirgaon
          </div>

          {/* Arrow */}
          <svg
            className="w-5 h-4 stroke-gray-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 6l6 6-6 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* +3 More */}
          <div className="justify-between py-[3px] px-[8px] border border-[#FDE272] bg-[#FEFBE8] text-[#717680] rounded-full flex items-center text-xs font-semibold overflow-visible">
            <div className="relative group inline-block cursor-pointer">
              {/* Trigger */}
              <div
                ref={moreRef}
                className="inline-block cursor-pointer z-10"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="text-[#F38744] font-semibold">+3</span>
                <span className="text-[#717680] font-medium ml-1">More</span>
              </div>

              {/* Tooltip (hidden by default, shown on hover) */}
              {isHovered && (
                <RouteCardPortal anchorRef={moreRef}>
                  <div
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <RouteCard />
                  </div>
                </RouteCardPortal>
              )}
            </div>
          </div>

          {/* Arrow */}
          <svg
            className="w-5 h-4 stroke-gray-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 6l6 6-6 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Truck */}
          <div className="w-[28px] h-[28px] rounded-full">
            <img src="/images/Factory.svg" className="w-full" alt="Location" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full flex items-center gap-2">
          {/* Progress Bar */}
          <div className="h-[7px] bg-gray-200 rounded-full overflow-hidden flex-1">
            <div
              ref={fillRef}
              className="h-full bg-[#4F7A21]"
              style={{ width: "70%" }}
            />
          </div>

          {/* Percentage Text */}
          <p className="text-xs font-semibold text-gray-500 whitespace-nowrap">
            70%
          </p>
        </div>


      </div>
    </div>
  );
};

export default TransportStatusCard;
