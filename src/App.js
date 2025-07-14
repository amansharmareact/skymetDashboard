import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/ui/Sidebar";
import Topbar from "./components/ui/Topbar";
import CropIntelligence from "./Pages/CropIntelligence/CropIntelligence";
import SkymetDashboard from "./Pages/Dashboard/Dashboard";
import LogisticsAndTransport from "./Pages/Logistics&Transport/page";
import ParcelMapping from "./Pages/ParcelMapping/page";
import ParcelMappingTwo from "./Pages/ParcelMapping/PracelMappingTwo"
import ParcelMappingThree from "./Pages/ParcelMapping/ParcelMappingThree";
import AssignDriver from "./Pages/ParcelMapping/AssignDriver";
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
                  <LogisticsAndTransport />
                }
              />
              <Route
                path="/parcel-mapping"
                element={
                  <ParcelMapping />
                }
              />
              <Route
                path="/parcel-mapping-two"
                element={
                  <ParcelMappingTwo />
                }
              />
              <Route
                path="/parcel-mapping-three"
                element={
                  <ParcelMappingThree />
                }
              />
              <Route
                path="/assign-driver"
                element={
                  <AssignDriver />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
