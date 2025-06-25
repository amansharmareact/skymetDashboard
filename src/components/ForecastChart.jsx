import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 2, forecast: 600, actual: 400 },
  { month: 4, forecast: 700, actual: 550 },
  { month: 6, forecast: 750, actual: 650 },
  { month: 8, forecast: 820, actual: 700 },
  { month: 10, forecast: 900, actual: 800 },
];

const ForecastChart = () =>{
  return (
    <Card className="bg-white">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Forecast vs Actual Yield</h3>
          <a href="#" className="text-sm text-blue-600">Open in Analytics</a>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#1e0f50" strokeWidth={2} />
            <Line type="monotone" dataKey="forecast" stroke="#07c4a6" strokeWidth={2} strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
export default ForecastChart