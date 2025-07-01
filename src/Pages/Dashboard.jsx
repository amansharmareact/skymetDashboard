import React from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import MapCard from '../components/MapCard';
import StatCards from '../components/StatCards';
import ForecastChart from '../components/ForecastChart';
import AlertsSection from '../components/AlertsSection';
import DateRibbon from '../components/DateRibbon';
import Footer from '../components/Footer';


export default function SkymetDashboard() {
  return (
    <div
      className="px-2 text-[#0e1e15]"
      style={{
        background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(157, 255, 206, 0.4))',
      }}
    >
      {/* <Header />   */}
      <Filters />
      <div className="flex flex-col lg:flex-row gap-1 w-full">
        {/* MapCard - 40% on large screens, full on mobile */}
        <div className="w-full lg:w-[40%]">
          <div className="h-full">
            <MapCard />
          </div>
        </div>
        {/* StatCards - 60% on large screens, full on mobile */}
        <div className="w-full lg:w-[60%]">
          <div className="h-auto">
            <StatCards />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-1 mt-1">
        {/* ForecastChart - 45% */}
        <div className="w-full lg:basis-[45%] flex flex-col">
          <ForecastChart />
        </div>

        {/* AlertsSection - 55% */}
        <div className="w-full lg:basis-[55%] flex flex-col">
          <AlertsSection />
        </div>
      </div>
      <DateRibbon />
      {/* <Footer /> */}
    </div>
  );
}