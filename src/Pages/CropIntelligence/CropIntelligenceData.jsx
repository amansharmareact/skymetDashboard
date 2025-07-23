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
            type: "high",
        },
        {
            lat: 16.65,
            lng: 74.3,
            name: "Village A",
            type: "high",
        },
        {
            lat: 16.68,
            lng: 74.2,
            name: "Village B",
            type: "low",
        },
        {
            lat: 16.66,
            lng: 74.25,
            name: "Village C",
            type: "moderate",
        },
        {
            lat: 16.69,
            lng: 74.26,
            name: "Village D",
            type: "rain-risk",
        },
        {
            lat: 16.675,
            lng: 74.255,
            name: "Village E",
            type: "active",
        },
        {
            lat: 16.685,
            lng: 74.235,
            name: "Collection Center 1",
            type: "collection-center",
        },
        {
            lat: 16.705,
            lng: 74.2433,
            name: "Ganeshwadi Plant Center",
            type: "plant",
        },
    ];
    return (
        <div className="scrollbar-hide w-full h-[96vh] overflow-auto">

            <div className="backgroundColor w-full grid grid-cols-2 lg:grid-cols-5 h-full">
                {/* Left/Main Section */}
                <div className="col-span-1 lg:col-span-3 mt-[16px] flex flex-col">
                    <Filters className="pl-[20px]" visibleFilters={{
                        crop: true,
                        season: true,
                        village: true,
                        region: false,
                        selectPlant: false,
                        lastSync: false,
                        apply: false,
                        refresh: false,
                        filter: false,
                    }} />
                    <MapData center={[16.705, 74.2433]} locations={locations} height={"72vh"} />
                    <DateRibbon className="w-[95%] mx-auto" />
                </div>
                {/* Right Panel */}
                <div className="col-span-2 bg-white px-[20px] overflow-hidden">
                    <div className="bg-white mt-[21px]">
                        <LastSync />
                    </div>
                    <div className="no-scrollbar mt-[36px] h-[calc(100vh-20vh)] overflow-y-auto">
                        <HarvestStatusCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CropIntelligenceData;
