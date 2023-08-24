// import getStations from "@/utils/getAllStations";
// import * as fs from "fs";

// export default async function converToJSON() {
//   const stationData: Promise<Station> = getStations(50000);
//   const station = await stationData;

//   const data = station.results;
//   let jsonData;

//   for (let i = 0; i < data?.length; i++) {
//     jsonData = {
//       business_status: data[i].business_status,
//       opening_hours: data[i].opening_hours,
//       geometry: {
//         location: {
//           lat: data[i].geometry.location.lat,
//           lng: data[i].geometry.location.lng,
//         },
//         viewport: {
//           northeast: {
//             lat: data[i].geometry.viewport.northeast.lat,
//             lng: data[i].geometry.viewport.northeast.lng,
//           },
//           southwest: {
//             lat: data[i].geometry.viewport.southwest.lat,
//             lng: data[i].geometry.viewport.southwest.lng,
//           },
//         },
//       },
//       icon: data[i].icon,
//       icon_background_color: data[i].icon_background_color,
//       icon_mask_base_uri: data[i].icon_mask_base_uri,
//       name: data[i].name,
//       place_id: data[i].place_id,
//       rating: data[i].rating,
//       reference: data[i].reference,
//       scope: data[i].scope,
//       types: data[i].types,
//       user_ratings_total: data[i].user_ratings_total,
//       vicinity: data[i].vicinity,
//     };
//   }

//   // Convert the transformed data to a JSON string
//   const jsonString = JSON.stringify(data);

//   // Write the JSON string to a file
//   fs.writeFile("stations.json", jsonString, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("Data saved to file");
//     }
//   });
// }
