import React from 'react';
import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Plant = window.location.origin + "/images/Factory.svg";

const MapCard = ({ apiData }) => {
  if (!apiData) return null;

  const point = JSON.parse(apiData.geom);
  const buffer = JSON.parse(apiData.geom_buffer150);
  const extent = apiData.extent;

  const extentCoords = extent
    .replace("BOX(", "")
    .replace(")", "")
    .split(",");
  const [xmin, ymin] = extentCoords[0].split(" ").map(Number);
  const [xmax, ymax] = extentCoords[1].split(" ").map(Number);

  const bounds = [
    [ymin, xmin],
    [ymax, xmax],
  ];

  const plantIcon = L.icon({
    iconUrl: Plant,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  return (
    <div className="lg:col-span-1 w-full h-full">
      <div className="w-full h-full overflow-hidden rounded-[32px]">
        <MapContainer bounds={bounds} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* Point Marker */}
          {point?.coordinates && (
            <Marker
              position={[point.coordinates[1], point.coordinates[0]]}
              icon={plantIcon}
            />
          )}

          {/* Buffer Polygon */}
          {buffer?.coordinates && (
            <GeoJSON data={buffer} style={{ color: "green", weight: 2 }} />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapCard;
