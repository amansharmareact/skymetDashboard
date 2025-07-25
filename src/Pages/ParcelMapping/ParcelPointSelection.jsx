import { React, useState } from "react";
import ParcelMappingFilters from "./ParcelMappingFilters";
import MapData from "../CropIntelligence/MapData";
import WeatherForecast from "../CropIntelligence/WeatherForecast";
import LastSync from "../CropIntelligence/LastSync";
import ParcelEstimateCard from "./ParcelEstimateCard";
import RoutingSteps from "./RoutingSteps";
import ParcelTable from "./ParcelTable";
import Steps from "../../components/Steps";
import Parcel from "./Parcel";
import '../../App.css'

const ParcelPointSelection = () => {
    const [dateRange, setDateRange] = useState(null);
    const [showPointSelection, setShowPointSelection] = useState(true);
    const [selectedParcels, setSelectedParcels] = useState([]);

    const handleMarkerClick = (location) => {
        const newParcel = {
            id: location.id || `P-${Math.floor(Math.random() * 1000)}`,
            readiness: location.readiness || "80%",
            estimatedTons: location.load || "2.0 T",
        };

        setSelectedParcels((prev) => {
            const alreadyExists = prev.some((p) => p.id === newParcel.id);
            return alreadyExists ? prev : [...prev, newParcel];
        });
    };

    const locations = [
        {
            lat: 16.705,
            lng: 74.2433,
            name: "Kolhapur",
            type: "high",
            crops: "Sugarcane",
            fieldsReady: 12,
            totalFields: 15,
            harvestWindow: "2-4 days",
            rainRisk: "Low",
            readinessColor: "#4F7A21",
        },
        {
            lat: 16.65,
            lng: 74.3,
            name: "Village A",
            type: "moderate",
            crops: "Maize",
            fieldsReady: 8,
            totalFields: 10,
            harvestWindow: "1-3 days",
            rainRisk: "Medium",
            readinessColor: "#FF9D3D",
        },
        {
            lat: 16.68,
            lng: 74.2,
            name: "Village B",
            type: "low",
            crops: "Wheat",
            fieldsReady: 5,
            totalFields: 12,
            harvestWindow: "5-7 days",
            rainRisk: "High",
            readinessColor: "#DA1E28",
        },
        {
            lat: 16.66,
            lng: 74.25,
            name: "Village C",
            type: "inactive",
            crops: "Soybean",
            readinessColor: "#B0B0B0",
        },
        {
            lat: 16.69,
            lng: 74.26,
            name: "Village D",
            type: "rain-risk",
            crops: "Cotton",
            fieldsReady: 6,
            totalFields: 10,
            harvestWindow: "4 days",
            rainRisk: "High",
            readinessColor: "#F44336",
        },
        {
            lat: 16.675,
            lng: 74.255,
            name: "Village E",
            type: "active",
            crops: "Chickpea",
            fieldsReady: 10,
            totalFields: 10,
            harvestWindow: "Today",
            rainRisk: "None",
            readinessColor: "#4CAF50",
        },
        {
            lat: 16.685,
            lng: 74.235,
            name: "Collection Center 1",
            type: "collection-center",
            readinessColor: "#607D8B",
        },
        {
            lat: 16.705,
            lng: 74.2433,
            name: "Ganeshwadi Plant Center",
            type: "plant",
            readinessColor: "#607D8B",
        },
    ];

    return (
        <div className="flex w-full h-[calc(100vh-64px)] grid grid-cols-2">
            <div className="flex flex-col w-[100%] gap-[5px] backgroundColor">
                {/* Map Section */}
                {!showPointSelection && (
                    <div className="mt-[16px] ml-[10px] w-full ">
                        <ParcelMappingFilters
                            className="grid grid-cols-4 gap-[8px] w-full ml-[20px] mt-[16px]"
                            onDateRangeChange={(range) => setDateRange(range)}
                            visibleFilters={{
                                location: true,
                                cropType: true,
                                dateRange: false,
                                radius: false,
                                readiness: true,
                                riskZones: false,
                                searchParcel: false,
                                reload: true,
                                lastSync: true,
                            }}
                        />
                    </div>
                )}

                {!showPointSelection && <div className="mx-[36px] mt-[16px]">
                    <Steps content={"These fields meet the readiness threshold and are suitable for assigning to the current trip."} />
                </div>}
                <div className="mb-[16px]">
                    <MapData
                        center={[16.705, 74.2433]}
                        locations={locations}
                        onMarkerClick={handleMarkerClick}
                        height={"86vh"}
                    />
                </div>
            </div>

            {/* Right Panel */}
            <div className="w-[100%] no-scrollbar overflow-y-auto bg-white mt-[16px]">
                {!showPointSelection && <LastSync />}
                {showPointSelection ? (
                    <div className="flex flex-col p-[12px]">
                        <ParcelTable selectedParcels={selectedParcels} />
                        <WeatherForecast />
                        <ParcelEstimateCard />
                        <RoutingSteps setShowPointSelection={setShowPointSelection} />
                    </div>
                ) : (
                    <Parcel />
                )}
            </div>
        </div >
    );
};

export default ParcelPointSelection;
