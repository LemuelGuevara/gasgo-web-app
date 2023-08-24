"use client"

import { useAddress } from "@/hooks/useAddress";
import { getCurrentLocation } from "@/hooks/geoBased/getCurrentLocation";

import { useEffect, useState } from "react";

interface AddressProps {
  lat: number;
  lng: number;
}

interface StationDistanceProps {
  origin: string;
  destination: string;
}

const GetAddress: React.FC<AddressProps> = (props) => {
  const address = useAddress(props.lat, props.lng);

  return <>{address}</>;
};

// const GetDistance: React.FC<StationDistanceProps> = (props) => {
//   const [distance, setDistance] = useState<string | null>(null);

//   useEffect(() => {
//     getDistance(props.origin, props.destination).then((distance) => {
//       setDistance(distance);
//     });
//   }, [origin, props.destination]);

//   if (!distance) {
//     return <div>Loading...</div>;
//   }

//   return <>{distance}</>;
// };

function GetCurrentLocation() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    getCurrentLocation().then((location) => {
      setLocation(location);
    });
  }, []);

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {`${location.latitude}, ${location.longitude}`}
    </div>
  );
}

function getRandomInt(min: number, max: number): number {
  let randomNum = Math.random() * (max - min) + min;
  return parseFloat(randomNum.toFixed(2));
}

export { GetAddress, GetCurrentLocation, getRandomInt };
