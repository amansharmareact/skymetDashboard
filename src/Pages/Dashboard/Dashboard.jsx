import AlertsSection from "../../components/AlertsSection";
import DateRibbon from "../../components/DateRibbon";
import Filters from "../../components/Filters";
import ForecastChart from "../../components/ForecastChart";
import MapCard from "../../components/MapCard";
import StatCards from "../../components/StatCards";
import { FiFilter } from 'react-icons/fi';
import '../../App.css'

export default function SkymetDashboard() {
  return (
    <div className="backgroundColor flex-1 overflow-y-scroll over-x-hidden">
      <div className="w-full px-[10px] flex flex-grow flex-shrink flex-nowrap items-center gap-2 bg-transparent">
        <Filters
          visibleFilters={{ refresh: false }}
          className="flex-1 min-w-[180px] max-w-[90vw]"
        />
      </div>


      <div className="px-2 text-[#0e1e15]">
        {/* <Header />   */}
        <div className="flex flex-col p-4 lg:flex-row gap-1 w-full">
          {/* MapCard - 40% on large screens, full on mobile */}
          <div className="w-full lg:w-[40%]">
            <div className="h-full">
              <MapCard apiData={{
                geom: '{"type":"Point","coordinates":[72.8777,19.076]}',
                geom_buffer150: '{"type":"Polygon","coordinates":[[[72.87,19.07],[72.88,19.07],[72.88,19.08],[72.87,19.08],[72.87,19.07]]]}',
                extent: "BOX(72.87 19.07,72.88 19.08)"
              }} />
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
          <div className="w-full h-auto lg:basis-[45%] flex flex-col">
            <ForecastChart />
          </div>

          {/* AlertsSection - 55% */}
          <div className="w-full h-auto lg:basis-[55%] flex flex-col">
            <AlertsSection />
          </div>
        </div>
        <DateRibbon />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
