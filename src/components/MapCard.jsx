import React from 'react';
import Card from './ui/Card';
import CardContent from './ui/CardContent';

const MapCard = () => {
  return (
    <div className="lg:col-span-1 w-full max-w-[500px] h-[310px] md:h-[360px] lg:h-[310px]">
      <div className="w-full h-full overflow-hidden rounded-2xl">
        <iframe
          title="Kolhapur Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79400665694!2d74.1564661212228!3d16.70845223348975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1751025747721!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ borderRadius: '16px', backgroundColor: 'gray' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapCard;
