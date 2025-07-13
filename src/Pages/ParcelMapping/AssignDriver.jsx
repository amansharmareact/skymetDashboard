import MapData from '../CropIntelligence/MapData'
import DriverSelectorWithDetails from './DriverSelectorWithDetails'
import ParcelEstimateCard from './ParcelEstimateCard'
import TripPriorityPanel from './TripPriorityPanel'
import TripSummaryBox from './TripSummaryBox'
import VehicleSelectorWithDetails from './VehicleSelectorWithDetails'

const AssignDriver = () => {
  return (
    <div className="flex flex-col">
      <div className=""></div>
      <div className="w-full flex justify-between mt-10">
        <div className="w-full">
          <MapData />
        </div>
        <div className="w-[60%] px-5 space-y-5 mb-5">
          <TripSummaryBox />
          <ParcelEstimateCard />
          <DriverSelectorWithDetails/>
          <VehicleSelectorWithDetails/>
          <TripPriorityPanel/>
        </div>
      </div>
    </div>
  )
}

export default AssignDriver