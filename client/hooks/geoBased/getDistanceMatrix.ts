// import mapboxgl from "mapbox-gl";



// mapboxgl.accessToken = process.env.MAP_BOX_API_KEY;

// type Coordinates = {
//   lng: number;
//   lat: number;
// };

// export default async function getDistance(
//   origin: Coordinates,
//   destination: Coordinates
// ): Promise<string> {
//   const directionsClient = mapboxgl.Directions({
//     accessToken: mapboxgl.accessToken,
//   });

//   const response = await directionsClient.getDirections({
//     profile: "driving",
//     waypoints: [
//       { coordinates: [origin.lng, origin.lat] },
//       { coordinates: [destination.lng, destination.lat] },
//     ],
//   });

//   const route = response.routes[0];
//   return `The distance between the locations is ${route.distance} meters. The estimated travel time is ${route.duration} seconds.`;
// }
