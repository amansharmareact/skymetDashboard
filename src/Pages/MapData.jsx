import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Topbar from "../components/ui/Topbar";
import Filters from "../components/Filters";
import LocationTooltip from "../components/ui/LocationTooltip";

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

// Color mapping
const getColor = (type) => {
  switch (type) {
    case "low":
      return "red";
    case "moderate":
      return "orange";
    case "high":
      return "green";
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
  return (
     <div className=" overflow-y-scroll">
      <Filters />
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: "82vh", width: "100%" }}
      >
        <Legend />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 15 km Radius Circle */}
        <Circle
          center={center}
          radius={15000}
          pathOptions={{ color: "yellow" }}
        />

        {/* Markers */}
        {locations.map((loc, index) => (
          <Marker
            key={index}
            position={[loc.lat, loc.lng]}
            icon={L.divIcon({
              className: "custom-marker",
              html: `<div style="background-color: ${getColor(
                loc.type
              )}; width: 12px; height: 12px; border-radius: 50%;"></div>`,
              iconSize: [12, 12],
            })}
          >
            <Tooltip>{loc.name}</Tooltip>
            <Tooltip
              direction="top"
              offset={[0, -10]}
              opacity={1}
              permanent={false}
              className="custom-tooltip"
            >
              <LocationTooltip location={sampleLocation} />
            </Tooltip>
          </Marker>
        ))}

        {/* Legend */}
      </MapContainer>
    </div>
  );
};

export default MapData;
