import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Mapview() {
  return (
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
}

export default Mapview