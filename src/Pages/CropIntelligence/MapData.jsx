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
import LegendOverlay from "../../components/ui/LegendCheckbox";
import LocationTooltip from "../../components/ui/LocationTooltip";

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
    case "active":
      return "transparent";
    default:
      return "gray";
  }
};

// 🧭 Legend Component
const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomleft" });
    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend-box");
      div.innerHTML = `
        <div class="legend-row"><input type="checkbox" class="checkbox" checked />
          <div class="circle red border border-white"></div><span>Low Readiness</span>
        </div>
        <div class="legend-row"><input type="checkbox" class="checkbox" />
          <div class="circle orange"></div><span>Moderate Readiness</span>
        </div>
        <div class="legend-row"><input type="checkbox" class="checkbox" />
          <div class="circle green"></div><span>High Readiness</span>
        </div>
        <div class="legend-row"><input type="checkbox" class="checkbox" />
          <div class="circle black"></div><span>No Data / Inactive</span>
        </div>
        <div class="legend-row"><input type="checkbox" class="checkbox" />
          <span>Rain Risk Overlay</span>
        </div>
        <div class="legend-row"><input type="checkbox" class="checkbox" />
          <div class="circle outlined-green"></div><span>Active Village</span>
        </div>
        <div class="legend-row"><input type="checkbox" class="checkbox" />
          <img src="${Location}" /><span>Collection Center</span>
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

const MapData = ({
  center = [16.705, 74.2433],
  locations = [],
  onClick,
  onMarkerClick,
}) => {
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
    <div>
      <MapContainer
        center={center}
        zoom={12}
        className="rounded-4xl mx-[20px]"
        style={{ height: "88vh", width: "fitContent" }}
        whenReady={(map) => {
          map.target.getContainer().addEventListener("click", onClick);
        }}
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

        <Circle
          center={center}
          radius={15000}
          pathOptions={{
            color: "#FAC515",
            fillColor: "white",
            fillOpacity: 0.1,
          }}
        />

        {filteredLocations.map((loc, index) => {
          const isPlantCenter = loc.type === "plant";

          if (isPlantCenter) {
            return (
              <Circle
                key={index}
                center={[loc.lat, loc.lng]}
                radius={15000}
                pathOptions={{
                  color: "yellow",
                  fillColor: "rgba(255, 255, 0, 0.2)",
                  fillOpacity: 0.4,
                }}
              >
                <Marker
                  position={[loc.lat, loc.lng]}
                  icon={L.icon({
                    iconUrl: Plant,
                    iconSize: [32, 32],
                    iconAnchor: [16, 16],
                  })}
                />
              </Circle>
            );
          }

          return (
            <Marker
              key={index}
              position={[loc.lat, loc.lng]}
              eventHandlers={{
                click: () => onMarkerClick && onMarkerClick(loc),
              }}
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
                    )}; width: 16px; height: 16px; ${loc.type === "active"
                        ? "border: 2px solid #00C853;"
                        : "border: 2px solid white;"
                      } border-radius: 50%;"></div>`,
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
          );
        })}

        <Legend />
      </MapContainer>
    </div>
  );
};

export default MapData;
