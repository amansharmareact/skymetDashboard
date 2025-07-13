import CropReadinessCard from "./CropReadinessCard";
import LastSync from "./LastSync";
import LogisticsSection from "./LogisticsSection";
import MapImage from "./MapImage";
import PastCollection from "./PastCollection";
import VisitLog from "./VisitLog";
import WeatherForecast from "./WeatherForecast";

const HarvestStatusCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 space-y-4 text-sm text-gray-800">
      {/* Header */}
     <LastSync/>

      {/* Map Image */}
      <MapImage />

      {/* Crop Harvest Summary */}
      <CropReadinessCard />

      {/* Weather Forecast */}
      <WeatherForecast />

      {/* Logistics */}
      <LogisticsSection />

      {/* Past Collection Attempts */}
      <PastCollection />

      {/* Visit Log */}
      <VisitLog />
    </div>
  );
};

export default HarvestStatusCard;
