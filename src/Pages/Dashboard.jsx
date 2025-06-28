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
    <div className="p-4 bg-[#D9FFCE] text-[#0e1e15] min-h-screen">
      {/* <Header />   */}
      <Filters />
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* MapCard - 40% on large screens, full on mobile */}
        <div className="w-full lg:w-[40%]">
          <div className="min-h-[300px] lg:min-h-[350px] h-full">
            <MapCard />
          </div>
        </div>
        {/* StatCards - 60% on large screens, full on mobile */}
        <div className="w-full lg:w-[60%]">
          <div className="h-auto lg:h-[350px]">
            <StatCards />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
        <ForecastChart />
        <AlertsSection />
      </div>
      <DateRibbon />
      <Footer />
    </div>
  );
}