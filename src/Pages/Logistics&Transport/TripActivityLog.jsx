import React from "react";

const logs = [
  {
    time: "14:35 – 21 June",
    type: "system",
    message: "Stop #3 – Shahuwadi marked as Completed (1.8 T collected)",
    base: "#717680",
  },
  {
    time: "13:55 – 21 June",
    type: "weather",
    message:
      "Rain alert triggered for Ambewadi region – predicted intensity 68%",
    base: "#B54708",
  },
  {
    time: "12:42 – 21 June",
    type: "manual",
    message: "Driver rerouted via Kale due to blocked primary road",
    base: "#175CD3",
  },
  {
    time: "12:10 – 21 June",
    type: "manual",
    message: "Field Note added by Amol Sargar: “Wet access, recommend delay”",
    base: "#175CD3",
  },
  {
    time: "11:50 – 21 June",
    type: "system",
    message: "Truck dispatched from Kolhapur Plant – TRP-3409 now in transit",
    base: "#717680",
  },
];

const getTimeBadgeColor = (type) => {
  switch (type) {
    case "manual":
      return `bg-blue-100 text-xs rounded-[6px] bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]`;
    case "weather":
      return ` bg-orange-100 text-xs rounded-[6px] bg-[#EFF8FF] text-[#B54708] border border-[#FEDF89]`;
    case "system":
      return ` bg-orange-100 text-xs rounded-[6px] bg-[#FAFAFA] text-[#414651] border border-[#E9EAEB]`;
    default:
      return ` bg-gray-100 text-gray-700`;
  }
};

const getTagStyle = (type) => {
  const base = "px-2 py-0.5 font-medium flex items-center ";
  switch (type) {
    case "manual":
      return `${base} bg-blue-100 text-xs rounded-[6px] bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]`;
    case "weather":
      return `${base} bg-orange-100 text-xs rounded-[6px] bg-[#EFF8FF] text-[#B54708] border border-[#FEDF89]`;
    case "system":
      return `${base} bg-orange-100 text-xs rounded-[6px] bg-[#FAFAFA] text-[#414651] border border-[#E9EAEB]`;
    default:
      return `${base} bg-gray-100 text-gray-700`;
  }
};

const TripActivityLog = () => {
  return (
    <div className="">
      <div className="text-[#717680] font-medium my-1 text-sm ml-2 flex items-center gap-2">
        Trip Activity Logs
        <span>
          <img src="/images/HelpIcon.svg" alt="HelpIcon" />
        </span>
      </div>
      <div className="bg-white border rounded-md p-4 text-sm">
        {/* Log Type Filters */}
        <div className="flex gap-3 mb-4">
          <span className={getTagStyle("system")}>
            <div className="w-[5px] h-[5px] bg-[#717680] rounded-full mr-2"></div>
            <span>System Log</span>
          </span>
          <span className={getTagStyle("manual")}>
            <div className="w-[5px] h-[5px] bg-[#2E90FA] rounded-full mr-2"></div>
            <span>Manual Log</span>
          </span>
          <span className={getTagStyle("weather")}>
            <div className="w-[10px] h-[10px] mr-1">
              <img src="/images/WeatherIcon.svg" alt="WeatherIcon" />
            </div>
            <span>Weather Warning log</span>
          </span>
        </div>

        {/* Timeline Logs */}
        <div className="border-l border-gray-200 pl-4 space-y-4">
          {logs.map((log, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-2">
                {["manual", "weather", "system"].includes(log.type) ? (
                  <span
                    className={`px-2 py-0.5 flex items-center text-sm font-medium rounded ${getTimeBadgeColor(
                      log.type
                    )}`}
                  >
                    <div
                      className="w-[5px] h-[5px] rounded-full mr-2"
                      style={{ backgroundColor: log.base }}
                    ></div>
                    <span> {log.time}</span>
                  </span>
                ) : (
                  <span className="text-gray-500">{log.time}</span>
                )}
                <p className="text-[#414651] font-medium text-sm">
                  {log.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripActivityLog;
