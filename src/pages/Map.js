import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const position = [35.78524958573004,-5.808076859576626];

const markerIcon = new L.Icon({
  iconUrl: require("./logom.png"),
  iconSize: [35, 35]
});

const Map = (props) => {
  const redirectToGoogleMaps = (latitude, longitude) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, "_blank");
  };

  if (props.pharmacies.length === 0) {
    return <p>Faites Zoom moins pour visualiser vos pharmacies sur MAP 
      Cliquez sur markers pour visualiser les itinéraires 
    </p>;
  } else {
    return (
      <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://api.maptiler.com/maps/streets-v2/tiles.json?key=rR3KOWeDNseGtrpvxPd3">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}@2x.png?key=rR3KOWeDNseGtrpvxPd3"
        />
        {props.pharmacies.map((element, index) => (
          <Marker
            key={index}
            icon={markerIcon}
            position={[element.latitude, element.longitude]}
            eventHandlers={{
              click: () => redirectToGoogleMaps(element.latitude, element.longitude)
            }}
          >
            <Popup>
              {element.adresse}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
};

export default Map;