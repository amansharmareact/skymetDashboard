import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/ui/Sidebar";
import SkymetDashboard from "./Pages/Dashboard/Dashboard";
import MapData from "./Pages/CropIntelligence/MapData";
import Topbar from "./components/ui/Topbar";
import CropIntelligence from "./Pages/CropIntelligence/CropIntelligence";

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
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
