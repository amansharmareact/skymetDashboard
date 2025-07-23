import React from "react";
import ParcelMappingHeader from "./ParcelMappingHeader";
import BioMassCard from "./BioMassCard";
import ParcelMappingFilters from "./ParcelMappingFilters";
import MapData from "../CropIntelligence/MapData";
const ParcelMapping = () => {
  const locations = [
    {
      lat: 16.705,
      lng: 74.2433,
      name: "Kolhapur",
      type: "high", // ✅ High Readiness
    },
    {
      lat: 16.65,
      lng: 74.3,
      name: "Village A",
      type: "high", // ✅ Moderate Readiness
    },
    {
      lat: 16.68,
      lng: 74.2,
      name: "Village B",
      type: "low", // ✅ Low Readiness
    },
    {
      lat: 16.66,
      lng: 74.25,
      name: "Village C",
      type: "moderate", // ✅ No Data / Inactive
    },
    {
      lat: 16.69,
      lng: 74.26,
      name: "Village D",
      type: "rain-risk", // ✅ Rain Risk Overlay
    },
    {
      lat: 16.675,
      lng: 74.255,
      name: "Village E",
      type: "active", // ✅ Active Village
    },
    {
      lat: 16.685,
      lng: 74.235,
      name: "Collection Center 1",
      type: "collection-center", // ✅ Collection Center
    },
    {
      lat: 16.705,
      lng: 74.2433,
      name: "Ganeshwadi Plant Center",
      type: "plant",
    },
  ];
  return (
    <div className="bg-white flex flex-col">
      <div className="px-[20px]">
        <ParcelMappingHeader />
      </div>
      <div className="flex items-center justify-between gap-x-1 px-[20px]" >
        <BioMassCard />
        <BioMassCard />
        <BioMassCard />
        <BioMassCard />
      </div>
      <div className="mt-[16px] ml-[20px]">
        <ParcelMappingFilters className="grid grid-cols-8 gap-[8px] w-full" visibleFilters={{
          lastSync: false,
        }} />
      </div>
      <div className="w-full mb-[16px]">
        <MapData center={[16.705, 74.2433]} locations={locations} height={"60vh"}/>
      </div>
    </div>
  );
};

export default ParcelMapping;
