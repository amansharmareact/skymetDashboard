import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/ui/Sidebar";
import SkymetDashboard from "./Pages/Dashboard";
import MapData from "./Pages/MapData";
import Topbar from "./components/ui/Topbar";

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
              <Route path="/dashboard" element={<SkymetDashboard />} />
              <Route
                path="/crop-intelligence"
                element={
                  <MapData
                    center={[16.705, 74.2433]}
                    locations={[
                      { lat: 16.7, lng: 74.24, name: "Kolhapur", type: "high" },
                      {
                        lat: 16.65,
                        lng: 74.3,
                        name: "Village A",
                        type: "moderate",
                      },
                      { lat: 16.68, lng: 74.2, name: "Village B", type: "low" },
                    ]}
                  />
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
