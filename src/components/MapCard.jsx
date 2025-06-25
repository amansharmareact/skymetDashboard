import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";

const MapCard= ()=> {
  return (
    <Card className="lg:col-span-1 h-[300px] bg-[#e6f7f4]">
      <CardContent className="h-full flex justify-center items-center">
        <img src="/map-placeholder.png" alt="Map" className="w-full h-full object-cover rounded-lg" />
      </CardContent>
    </Card>
  );
}
export default MapCard
