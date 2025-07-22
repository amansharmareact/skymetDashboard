import React from "react";
import MapData from "./MapData";
import HarvestStatusCard from "./HarvestStatusCard";
import DateRibbon from "../../components/DateRibbon";
import Filters from "../../components/Filters";
import { useNavigate } from "react-router-dom";
import '../../App.css'; // Import your CSS file for styling

const CropIntelligence = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/crop-intelligence-data"); // 👈 Replace with your desired path
    };

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
        <div className="backgroundColor overflow-hidden">

            <div className="w-full px-[20px]">
                <Filters visibleFilters={{
                    apply: false,
                    lastSync: false,
                    filter: false,
                }}/>
            </div>

            <div className="mt-[16px]">
                <MapData height={"73vh"} center={[16.705, 74.2433]} locations={locations} onClick={handleRedirect} />
            </div>
            <div className="flex justify-items-start">
                <div className="mt-[10px] px-[20px] overflow-x-auto">
                    <DateRibbon />
                </div>
            </div>
        </div>
    )
}

export default CropIntelligence;