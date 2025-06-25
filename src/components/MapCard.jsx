import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";

const MapCard= ()=> {
  return (
    <Card className="lg:col-span-1 h-[300px] w-[410px] bg-[#D9FFCE]]">
      <CardContent className="w-full  h-[300px] aspect-[4/3] sm:aspect-[5/3] md:aspect-[4/2] lg:aspect-[4/2] overflow-hiddenitems-center">
        <img src="/images/image (3).png" alt="Map" className="w-full h-full object-cover rounded-lg" />
      </CardContent>
    </Card>
  );
}
export default MapCard
