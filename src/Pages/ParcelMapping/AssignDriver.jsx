import MapData from '../CropIntelligence/MapData'
import AssignDriverButtonComp from './AssignDriverButtonComp'
import DriverSelectorWithDetails from './DriverSelectorWithDetails'
import ParcelEstimateCard from './ParcelEstimateCard'
import TripPriorityPanel from './TripPriorityPanel'
import TripSummaryBox from './TripSummaryBox'
import VehicleSelectorWithDetails from './VehicleSelectorWithDetails'

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
      <div className="w-full flex justify-between mt-10">
        <div className="w-full">
          <MapData center={[16.705, 74.2433]} locations={locations} />
        </div>
        <div className="w-[60%] px-5 space-y-5 mb-5">
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