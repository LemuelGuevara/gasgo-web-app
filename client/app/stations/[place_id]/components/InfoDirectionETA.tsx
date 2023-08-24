import { useState, useEffect } from "react";

type Coordinates = {
  lng: number;
  lat: number;
};

type Props = {
  destLng: number;
  destLat: number;
};

export const InfoDirectionETA: React.FC<Props> = ({ destLng, destLat }) => {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    async function getMessage() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const origin: Coordinates = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            const destination: Coordinates = { lng: destLng, lat: destLat };
            const message = await getDistance(origin, destination);
            setMessage(message);
          },
          () => {
            setMessage("Could not retrieve current location");
          }
        );
      } else {
        setMessage("Geolocation is not supported by this browser");
      }
    }

    getMessage();
  }, []);

  return (
    <div>
      <h1>Distance and Time between Locations</h1>
      <p>{message}</p>
    </div>
  );
};
