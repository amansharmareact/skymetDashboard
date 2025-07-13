import React from "react";
import ParcelMappingHeader from "./ParcelMappingHeader";
import BioMassCard from "./BioMassCard";
import ParcelMappingFilters from "./ParcelMappingFilters";
import MapData from "../CropIntelligence/MapData";
const ParcelMapping = () => {
  return (
    <div className="flex flex-col m-2">
      <div className="">
        <ParcelMappingHeader />
      </div>
      <div className="flex items-center justify-between">
        <BioMassCard />
        <BioMassCard />
        <BioMassCard />
        <BioMassCard />
      </div>
      <div className="">
        <ParcelMappingFilters />
      </div>
      <div className="">
        <MapData />
      </div>
    </div>
  );
};

export default ParcelMapping;
