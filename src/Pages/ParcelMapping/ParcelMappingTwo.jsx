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
          <MapData onClick={handleRedirect}/>
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
