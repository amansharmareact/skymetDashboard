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
    <div style={{
      background: `rgba(255, 255, 255, 0.7)`,
    }} className="rounded-xl shadow w-full max-w-full overflow-hidden border border-[#E9EAED]">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-lg font-semibold">Forecast vs Actual Yield</h2>
          <button className="text-green-600 font-semibold text-sm hover:underline whitespace-nowrap">
            Open in Analytics ↗
          </button>
        </div>
        <div className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                label={{ value: "Month", position: "insideBottom", offset: -10 }}
              />
              <YAxis
                label={{ value: "Biomass (tons)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#00B050"
                strokeWidth={1}
                dot={false}
                name="Actual"
                legendType="circle"
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#535862"
                strokeWidth={1}
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
