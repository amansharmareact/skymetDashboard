import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function MapView() {
  return (
<<<<<<< HEAD
    <>
      <MapContainer
        center={[16.705, 74.2433]} // Kolhapur coordinates
        zoom={10}
        scrollWheelZoom={false}
        className="h-[300px] w-[410px]  rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[16.705, 74.2433]}>
          <Popup>
            Kolhapur Plant
          </Popup>
        </Marker>
      </MapContainer>

    </>
  )
=======
    <MapContainer
      center={[16.705, 74.2433]} // Kolhapur coordinates
      zoom={10}
      scrollWheelZoom={false}
      className="w-[450px] h-[310px] rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[16.705, 74.2433]}>
        <Popup>
          Kolhapur Plant
        </Popup>
      </Marker>
    </MapContainer>
  );
>>>>>>> c7f6d68 (updated)
}

export default MapView;
