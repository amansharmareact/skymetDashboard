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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <MapCard />
        <StatCards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <ForecastChart />
        <AlertsSection />
      </div>
      <DateRibbon />
      <Footer />
    </div>
  );
}