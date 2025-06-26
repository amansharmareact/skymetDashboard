import React from 'react';
import  Card  from "./ui/Card";
import  CardContent  from "./ui/CardContent";
import Mapview from './Mapview';

const MapCard= ()=> {
  return (
    <Card className="lg:col-span-1 h-[300px] w-[410px]  bg-[#D9FFCE]]">
      <CardContent className=" h-[300px] aspect-[4/3] sm:aspect-[5/3] md:aspect-[4/2] lg:aspect-[4/2] overflow-hiddenitems-center">
       <Mapview />
      </CardContent>
    </Card>
  );
}
export default MapCard
