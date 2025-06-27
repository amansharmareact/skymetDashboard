import React from 'react';
import Card from "./ui/Card";
import CardContent from "./ui/CardContent";
import MapView from './Mapview';

const MapCard = () => {
  return (
    <Card className="lg:col-span-1 h-[300px] w-[500px]">
      <CardContent className="h-[300px] md:h-[360px] lg:h-[400px] aspect-[4/3] sm:aspect-[5/3] md:aspect-[4/2] lg:aspect-[4/2] overflow-hidden">
        {/* <Mapview /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79400665694!2d74.1564661212228!3d16.70845223348975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1751025747721!5m2!1sen!2sin"
          width="300"
          height="350"
          style={{ border: 0, borderRadius: "20px", backgroundColor: "#F8F9FC" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </CardContent>
    </Card>
  );
}
export default MapCard
