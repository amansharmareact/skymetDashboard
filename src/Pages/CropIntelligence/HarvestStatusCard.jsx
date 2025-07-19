import CropReadinessCard from "./CropReadinessCard";
import LastSync from "./LastSync";
import LogisticsSection from "./LogisticsSection";
import MapImage from "./MapImage";
import PastCollection from "./PastCollection";
import VisitLog from "./VisitLog";
import WeatherForecast from "./WeatherForecast";

const HarvestStatusCard = () => {
    return (
        <div className="bg-white rounded-xl border-gray-200 text-sm mb-5 text-gray-800 z-10">
            {/* Header */}
            <LastSync/>

            {/* Map Image */}
            <div className="w-full">
                <MapImage/>
            </div>
            {/* Crop Harvest Summary */}
            <div>
                <CropReadinessCard/>
            </div>

            {/* Weather Forecast */}
            <div>
                <WeatherForecast/>
            </div>

            {/* Logistics */}
            <LogisticsSection/>

            {/* Past Collection Attempts */}
            <PastCollection/>

            {/* Visit Log */}
            <VisitLog/>
        </div>
    );
};

export default HarvestStatusCard;
