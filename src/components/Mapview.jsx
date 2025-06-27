import { MapContainer, TileLayer, Marker, Circle, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom center icon (replace with your actual icon path)
const centerIcon = new L.Icon({
  iconUrl: '/center-icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Sample data if not passed as props
const defaultPoints = [
  { lat: 16.8, lng: 74.2, color: 'orange' },
  { lat: 16.7, lng: 74.1, color: 'blue' },
  { lat: 16.65, lng: 74.3, color: 'red' },
];

const MapView = ({ points = defaultPoints }) => (
  <MapContainer
    center={[16.705, 74.2433]}
    zoom={10}
    scrollWheelZoom={false}
    className="w-[450px] h-[310px] rounded-lg"
  >
    {/* Dark gray basemap */}
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
      attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
    />

    {/* Yellow circle radius (25km) */}
    <Circle
      center={[16.705, 74.2433]}
      radius={25000}
      pathOptions={{ color: 'yellow', fillColor: '#f5e663', fillOpacity: 0.2 }}
    />

    {/* Center icon */}
    <Marker position={[16.705, 74.2433]} icon={centerIcon}>
      <Popup>Kolhapur Plant</Popup>
    </Marker>

    {/* Dynamic circle markers */}
    {points.map((p, i) => (
      <CircleMarker
        key={i}
        center={[p.lat, p.lng]}
        radius={6}
        pathOptions={{ color: p.color }}
      />
    ))}
  </MapContainer>
);

export default MapView;
