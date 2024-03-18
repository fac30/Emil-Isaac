import dotenv from "dotenv";
dotenv.config();

export const Source = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API}&loading=async&callback=initMap`;
