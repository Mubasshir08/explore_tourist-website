import React from 'react';

import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

// create custom icon
const customIcon = new Icon({
iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
// iconUrl: require("./icons/placeholder.png"),
iconSize: [30, 30] // size of the icon
});

const Map = () => {

  return (
    <MapContainer center={[21.45388, 91.96765]} zoom={13}>
      <TileLayer
        attribution="Google Maps"
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        // url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
        <Marker position={[21.45388, 91.96765]} icon={customIcon}>
        {/* <Popup>
          {city.name} <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
};

export default Map;
