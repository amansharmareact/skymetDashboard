import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/ui/Sidebar";
import SkymetDashboard from "./Pages/Dashboard";
import MapData from "./Pages/MapData";
import Topbar from "./components/ui/Topbar";

function App() {
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
                  <MapData center={[16.705, 74.2433]} locations={locations} />
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
