import MapData from "../CropIntelligence/MapData";
import ParcelEstimateCard from "./ParcelEstimateCard";
import ParcelMappingTable from "./ParcelMappingTable";
import TripDetails from "./TripDetails";
import TripSummaryBox from "./TripSummaryBox";

const ParcelMappingThree = () => {
  return (
    <div className="flex flex-col">
      <div className=""></div>
      <div className="w-full flex justify-between mt-10">
        <div className="w-full">
          <MapData />
        </div>
        <div className="w-[60%] px-5 space-y-5">
          <TripDetails />
          <TripSummaryBox />
          <ParcelMappingTable />
          <ParcelEstimateCard />
        </div>
      </div>
    </div>
  );
};

export default ParcelMappingThree;
