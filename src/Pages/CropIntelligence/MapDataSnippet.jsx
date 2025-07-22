import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
    Circle,
    MapContainer,
    Marker,
    TileLayer,
    Tooltip,
} from "react-leaflet";
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

const MapDataSnippet = ({
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
        <div className="w-full h-full flex items-center justify-center">
            <MapContainer
                center={center}
                zoom={12}
                className="rounded-4xl w-full h-full"
                style={{ width: "215px", height: "215px" }}
                whenReady={(map) => {
                    map.target.getContainer().addEventListener("click", onClick);
                }}
            >
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                />

                {filteredLocations.map((loc, index) => {
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
            </MapContainer>
        </div>
    );
};

export default MapDataSnippet;
