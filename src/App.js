import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/ui/Sidebar";
import Topbar from "./components/ui/Topbar";
import CropIntelligence from "./Pages/CropIntelligence/CropIntelligence";
import SkymetDashboard from "./Pages/Dashboard/Dashboard";
import LogisticsAndTransport from "./Pages/Logistics&Transport/page";
import ParcelMapping from "./Pages/ParcelMapping/page";
import ParcelMappingTwo from "./Pages/ParcelMapping/ParcelMappingTwo"
import ParcelMappingThree from "./Pages/ParcelMapping/ParcelMappingThree";
import AssignDriver from "./Pages/ParcelMapping/AssignDriver";
import ParcelPointSelection from "./Pages/ParcelMapping/ParcelPointSelection";
import ParcelEstimateCard from "./Pages/ParcelMapping/ParcelEstimateCard";
import TripSummaryBox from "./Pages/ParcelMapping/TripSummaryBox";
import TripPriorityPanel from "./Pages/ParcelMapping/TripPriorityPanel";
import VehicleSelectorWithDetails from "./Pages/ParcelMapping/VehicleSelectorWithDetails";
import DriverSelectorWithDetails from "./Pages/ParcelMapping/DriverSelectorWithDetails";
import ConfirmTripModal from "./Pages/ParcelMapping/ConfirmTripModal";
import BioMassCard from "./Pages/ParcelMapping/BioMassCard";
function App() {
 

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        {/* Topbar at the top */}
        <Topbar />

        {/* Main layout: Sidebar + Page */}
        <div className="flex flex-1 overflow-hidden mt-[55px]">
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Content on the right */}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/dashboard" index element={<SkymetDashboard />} />
              <Route
                path="/crop-intelligence"
                element={
                  <CropIntelligence />
                }
              />
               <Route
                path="/logistics"
                element={
                  <LogisticsAndTransport/>
                }
              />
               <Route
                path="/parcel-mapping"
                element={
                  <ParcelMapping/>
                }
              />
               <Route
                path="/parcel-mapping-two"
                element={
                  <ParcelMappingTwo/>
                }
              />
                <Route
                path="/parcel-point-selection"
                element={
                    <ParcelPointSelection />
                }
                />
                <Route
                path="/parcel-mapping-three"
                element={
                  <ParcelMappingThree/>
                }
              />
                <Route
                path="/parcel-estimate"
                element={
                    <BioMassCard />
                }
                />
                <Route
                path="/assign-driver"
                element={
                  <AssignDriver/>
                }
              />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
