import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "1", actual: 300, forecast: 400 },
  { name: "2", actual: 350, forecast: 420 },
  { name: "3", actual: 400, forecast: 500 },
  { name: "4", actual: 450, forecast: 600 },
  { name: "5", actual: 470, forecast: 620 },
  { name: "6", actual: 520, forecast: 700 },
  { name: "7", actual: 580, forecast: 740 },
  { name: "8", actual: 600, forecast: 780 },
  { name: "9", actual: 650, forecast: 800 },
  { name: "10", actual: 700, forecast: 850 },
  { name: "11", actual: 750, forecast: 870 },
  { name: "12", actual: 800, forecast: 900 },
];

const ForecastChart = () => {
  return (
    <div
      className="shadow w-full border border-[#E9EAED] h-full"
      style={{
        background: `rgba(255, 255, 255, 0.7)`,
        borderRadius: "24px",
      }}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg font-semibold">Forecast vs Actual Yield</h2>
          <button className="text-green-600 font-semibold text-sm hover:underline whitespace-nowrap">
            Open in Analytics ↗
          </button>
        </div>

        {/* Full height chart container */}
        <div className="flex-grow w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                label={{
                  value: "Month",
                  position: "insideBottom",
                  offset: -5,
                  style: { textAnchor: "middle", fontSize: 14 },
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                label={{
                  value: "Biomass (tons)",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                  style: { textAnchor: "middle", fontSize: 14 },
                }}
              />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#00B050"
                strokeWidth={2}
                dot={false}
                name="Actual"
                legendType="circle"
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#535862"
                strokeWidth={2}
                dot={false}
                name="Forecast"
                legendType="circle"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ForecastChart;
