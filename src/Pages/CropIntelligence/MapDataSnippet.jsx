import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {useEffect, useState} from "react";
import {
    Circle,
    MapContainer,
    Marker,
    TileLayer,
    Tooltip,
    useMap,
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

// 🧭 Legend Component


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
                className="rounded-4xl mx-[0px]"
                style={{height: "215px", width: "215px"}}
                whenReady={(map) => {
                    map.target.getContainer().addEventListener("click", onClick);
                }}
            >
                {/*<LegendOverlay*/}
                {/*    selectedReadiness={selectedReadiness}*/}
                {/*    setSelectedReadiness={setSelectedReadiness}*/}
                {/*/>*/}
                <TileLayer
                    // attribution="Tiles &copy; Esri — Source: Esri, Maxar"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <TileLayer
                    // attribution="Labels &copy; Esri"
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                />

                {filteredLocations.map((loc, index) => {
                    const isPlantCenter = loc.type === "plant";

                    // if (isPlantCenter) {
                    //     return (
                    //         <Circle
                    //             key={index}
                    //             center={[loc.lat, loc.lng]}
                    //             radius={15000}
                    //             pathOptions={{
                    //                 color: "yellow",
                    //                 fillColor: "rgba(255, 255, 0, 0.2)",
                    //                 fillOpacity: 0.4,
                    //             }}
                    //         >
                    //             <Marker
                    //                 position={[loc.lat, loc.lng]}
                    //                 icon={L.icon({
                    //                     iconUrl: Plant,
                    //                     iconSize: [32, 32],
                    //                     iconAnchor: [16, 16],
                    //                 })}
                    //             />
                    //         </Circle>
                    //     );
                    // }

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
                            {/*<Tooltip>{loc.name}</Tooltip>*/}
                            <Tooltip
                                direction="top"
                                offset={[0, -10]}
                                opacity={1}
                                permanent={false}
                                className="custom-tooltip"
                            >
                                <LocationTooltip location={loc}/>
                            </Tooltip>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default MapData;
