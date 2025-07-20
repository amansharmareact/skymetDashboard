import React from "react";
import MapData from "./MapData";
import HarvestStatusCard from "./HarvestStatusCard";
import DateRibbon from "../../components/DateRibbon";
import Filters from "../../components/Filters";
import '../../App.css'
import LastSync from "./LastSync";

const CropIntelligenceData = () => {
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
        <div className="scrollbar-hide w-full px-[10px]">
            <div className="flex">
              
                {/* <div className="mt-6 mr-4">
                <LastSync />
                </div> */}
            </div>
            <div className="w-full flex h-full sm:flex flex-wrap">
                <div className="w-full h-full mt-[16px] flex flex-col lg:w-[57%]">
                      <Filters visibleFilters={{
                    crop: true,
                    season: true,
                    village: true,
                    region: false,
                    selectPlant: false
                }} />
                    <MapData center={[16.705, 74.2433]} locations={locations} />
                    <DateRibbon />
                </div>
                <div className="no-scrollbar w-full h-[calc(100vh-14vh)] mt-[32px] overflow-y-auto lg:w-[43%]">
                    <HarvestStatusCard />
                </div>
            </div>
        </div>
    );
};

export default CropIntelligenceData;
