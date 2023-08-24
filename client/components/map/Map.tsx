"use client";

import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { StationDetails } from "@/interface/stationInfo";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 14.60461,
  lng: 121.123746,
};

type StationProps = {
  stationInstance: Station;
};

export function Map(props: StationProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBG-Fx5QIDkP6ZACuEjJenoOepROkWijSo",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const coords = { lat: {}, lng: {} };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {}
      {props.stationInstance.stations?.map((stationCoord) => (
        <Marker
          key={stationCoord.place_id}
          position={stationCoord.location}
          icon={"/GasGo-Web-Solo-Marker.png"}
        //   onClick={() => }
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
