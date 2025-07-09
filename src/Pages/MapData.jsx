import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import DateRibbon from "../components/DateRibbon";
import Filters from "../components/Filters";
import LocationTooltip from "../components/ui/LocationTooltip";
import LegendOverlay from "../components/ui/LegendCheckbox";

const sampleLocation = {
  name: "Ganeshwadi",
  crops: ["Maize", "Sugarcane"],
  fieldsReady: 17,
  totalFields: 22,
  harvestWindow: "24–30 June",
  rainRisk: "Moderate rainfall expected in 3 days",
  readinessColor: "#00C853", // green
  lat: 16.705,
  lng: 74.2433,
};
const Location = window.location.origin + "/images/Location.svg";
const Plant = window.location.origin + "/images/Factory.svg";
// Color mapping
const getColor = (type) => {
  switch (type) {
    case "low":
      return "#F04438";
    case "moderate":
      return "#FAC515";
    case "high":
      return "#17B26A";
    case "inactive":
      return "#181D27";
    case "rain-risk":
      return "transparent"; // blue
    case "active":
      return "transparent"; // maybe a green outline?
    case "collection-center":
      return "url(Location)"; // or custom icon
    default:
      return "gray";
  }
};

// 🧭 Legend Component
const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomleft" });
    const Location = "/images/Location.svg";
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend-box");
      div.innerHTML = `
  <div class="legend-row">
    <input type="checkbox" class="checkbox" checked />
    <div class="circle red border border-white"></div>
    <span>Low Readiness</span>
  </div>
  <div class="legend-row">
    <input type="checkbox" class="checkbox" />
    <div class="circle orange"></div>
    <span>Moderate Readiness</span>
  </div>
  <div class="legend-row">
    <input type="checkbox" class="checkbox" />
    <div class="circle green"></div>
    <span>High Readiness</span>
  </div>
  <div class="legend-row">
    <input type="checkbox" class="checkbox" />
    <div class="circle black"></div>
    <span>No Data / Inactive</span>
  </div>
  <div class="legend-row">
    <input type="checkbox" class="checkbox" />
    <span>Rain Risk Overlay</span>
  </div>
  <div class="legend-row">
    <input type="checkbox" class="checkbox" />
    <div class="circle outlined-green"></div>
    <span>Active Village</span>
  </div>
  <div class="legend-row">
    <input type="checkbox" class="checkbox" />
    <img src="${Location}" />
    <span>Collection Center</span>
  </div>
`;

      return div;
    };

    legend.addTo(map);
    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

const MapData = ({ center = [16.705, 74.2433], locations = [] }) => {
  const [selectedReadiness, setSelectedReadiness] = useState([]);
  const filteredLocations =
    selectedReadiness.length === 0
      ? locations
      : locations.filter(
          (loc) =>
            loc.type === "plant" ||
            loc.type === "collection-center" ||
            selectedReadiness.includes(loc.type)
        );
  return (
    <div className=" overflow-y-scroll">
      <Filters />
      <MapContainer
        center={center}
        zoom={12}
        className="rounded-4xl mx-[20px]"
        style={{ height: "74vh", width: "97%" }}
      >
        <LegendOverlay
          selectedReadiness={selectedReadiness}
          setSelectedReadiness={setSelectedReadiness}
        />
        <TileLayer
          attribution="Tiles &copy; Esri — Source: Esri, Maxar"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <TileLayer
          attribution="Labels &copy; Esri"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
        />
        {/* 15 km Radius Circle */}
        <Circle
          center={center}
          radius={15000}
          pathOptions={{
            color: "#FAC515", // Border color
            fillColor: "white", // Light yellow fill (Material yellow-100)
            fillOpacity: 0.1, // Make it slightly transparent
          }}
        />
        {/* Markers */}
        {filteredLocations.map((loc, index) => {
          // This is the main plant/center marker
          const isPlantCenter = loc.type === "plant";

          return (
            <>
              {isPlantCenter && (
                <>
                  {/* 🟡 Radius around plant */}

                  <Circle
                    center={[loc.lat, loc.lng]}
                    radius={15000}
                    pathOptions={{
                      color: "yellow",
                      fillColor: "rgba(255, 255, 0, 0.2)", // light yellow fill
                      fillOpacity: 0.4,
                    }}
                  />

                  {/* 🌱 Plant icon */}
                  <Marker
                    position={[loc.lat, loc.lng]}
                    icon={L.icon({
                      iconUrl: `${Plant}`, // ✅ Put your plant icon in public/images
                      iconSize: [32, 32],
                      iconAnchor: [16, 16],
                    })}
                  />
                </>
              )}
              {/* 🔴🟠🟢 Other small readiness markers */}
              {!isPlantCenter && (
                <Marker
                  key={index}
                  position={[loc.lat, loc.lng]}
                  icon={
                    loc.type === "collection-center"
                      ? L.divIcon({
                          className: "custom-marker",
                          html: `<img src="${Location}" width="32" height="32" />`,
                          iconSize: [32, 32],
                        })
                      : L.divIcon({
                          className: "custom-marker",
                          html: `<div style="background-color: ${getColor(
                            loc.type
                          )}; width: 16px; height: 16px;  ${
                            loc.type === "active"
                              ? "border: 2px solid #00C853;"
                              : "border: 2px solid white;"
                          }
 border-radius: 50%; border: 2px solid white;"></div>`,
                          iconSize: [16, 16],
                        })
                  }
                >
                  <Tooltip>{loc.name}</Tooltip>
                  <Tooltip
                    direction="top"
                    offset={[0, -10]}
                    opacity={1}
                    permanent={false}
                    className="custom-tooltip"
                  >
                    <LocationTooltip location={loc} />
                  </Tooltip>
                </Marker>
              )}
            </>
          );
        })}
        {/* Legend */}
      </MapContainer>
      <DateRibbon />
    </div>
  );
};

export default MapData;
