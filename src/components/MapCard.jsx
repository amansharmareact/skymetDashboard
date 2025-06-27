import React from 'react';
import Card from "./ui/Card";
import CardContent from "./ui/CardContent";
import MapView from './Mapview';

const MapCard = () => {
  return (
    <Card className="lg:col-span-1 h-[300px] w-[500px] ">
      <CardContent className="h-[300px] md:h-[360px] lg:h-[400px] aspect-[4/3] sm:aspect-[5/3] md:aspect-[4/2] lg:aspect-[4/2] overflow-hidden items-center justify-center">
        {/* <Mapview /> */}
        <MapView
          points={[
            { lat: 16.6, lng: 74.1, color: 'red' },
            { lat: 16.9, lng: 74.3, color: 'blue' },
          ]}
        />
      </CardContent>
    </Card>
  );
}
export default MapCard
