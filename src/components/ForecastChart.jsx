import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const data = [
 { name: '1', actual: 300, forecast: 400 },
  { name: '2', actual: 350, forecast: 420 },
  { name: '3', actual: 400, forecast: 500 },
  { name: '4', actual: 450, forecast: 600 },
  { name: '5', actual: 470, forecast: 620 },
  { name: '6', actual: 520, forecast: 700 },
  { name: '7', actual: 580, forecast: 740 },
  { name: '8', actual: 600, forecast: 780 },
  { name: '9', actual: 650, forecast: 800 },
  { name: '10', actual: 700, forecast: 850 },
  { name: '11', actual: 750, forecast: 870 },
  { name: '12', actual: 800, forecast: 900 },
];

const ForecastChart = () =>{
  return (
    <Card className="bg-[#FFFFFF] rounded-xl shadow w-[590px]  ">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Forecast vs Actual Yield</h2>
        <button className="text-green-600 text-sm hover:underline">Open in Analytics ↗</button>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: 'Month', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: 'Biomass (kg)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#00B050" strokeWidth={2} dot={false} name="Actual" />
          <Line type="monotone" dataKey="forecast" stroke="#008FFB" strokeWidth={2} dot={false} name="Forecast" />
        </LineChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
export default ForecastChart