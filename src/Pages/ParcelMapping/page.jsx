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
    <div className="flex flex-col m-2">
      <div className="">
        <ParcelMappingHeader />
      </div>
      <div className="flex items-center justify-between gap-x-5">
        <BioMassCard />
        <BioMassCard />
        <BioMassCard />
        <BioMassCard />
      </div>
      <div className="">
        <ParcelMappingFilters />
      </div>
      <div className="">
                 <MapData center={[16.705, 74.2433]} locations={locations} />
      </div>
    </div>
  );
};

export default ParcelMapping;
