import MapData from '../CropIntelligence/MapData'
import AssignDriverButtonComp from './AssignDriverButtonComp'
import DriverSelectorWithDetails from './DriverSelectorWithDetails'
import ParcelEstimateCard from './ParcelEstimateCard'
import TripPriorityPanel from './TripPriorityPanel'
import TripSummaryBox from './TripSummaryBox'
import VehicleSelectorWithDetails from './VehicleSelectorWithDetails'
import '../../App.css'

const AssignDriver = () => {
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
    <div className="flex flex-col">
      <div className="w-full flex justify-between pt-[16px]">
        <div className="w-full mb-[16px]">
          <MapData center={[16.705, 74.2433]} locations={locations} height={"86vh"}/>
        </div>
        <div className="no-scrollbar w-[100%] pr-[10px] mb-5  h-[calc(100vh-11vh)] overflow-y-auto">
          <TripSummaryBox />
          <ParcelEstimateCard />
          <DriverSelectorWithDetails />
          <VehicleSelectorWithDetails />
          <AssignDriverButtonComp />
        </div>
      </div>
    </div>
  )
}

export default AssignDriver