import React from "react";
import {useState} from "react";
import ParcelMappingFilters from "./ParcelMappingFilters";
import MapData from "../CropIntelligence/MapData";
import WeatherForecast from "../CropIntelligence/WeatherForecast";
import LastSync from "../CropIntelligence/LastSync";
import ParcelEstimateCard from "./ParcelEstimateCard";
import RoutingSteps from "./RoutingSteps";
import ParcelTable from "./ParcelTable";
import Steps from "../../components/Steps"
import { useNavigate } from "react-router-dom";

const ParcelMappingTwo = () => {
    const [dateRange, setDateRange] = useState(null);
    const navigate = useNavigate();
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
    const handleRedirect = () => {
        navigate("/parcel-point-selection"); // 👈 Replace with your desired path
    };

    return (
    <div className="flex flex-col">
      <div className="">
        <ParcelMappingFilters  onDateRangeChange={(range) => setDateRange(range)} />
      </div>
      <div className="w-full flex justify-between">
        <div className="w-full">
          <div className = "pl-6 m-4">
              <Steps />
          </div>
                    <MapData center={[16.705, 74.2433]} locations={locations} onClick={handleRedirect} />
        </div>
        {/*<div className="w-[60%] px-5">*/}
        {/*    <LastSync/>*/}
        {/*    <ParcelTable/>*/}
        {/*  <WeatherForecast/>*/}
        {/*  <ParcelEstimateCard/>*/}
        {/*  <RoutingSteps/>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ParcelMappingTwo;
