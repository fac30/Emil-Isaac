import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/search", async (req, res) => {
  const postCode = req.body.postCode;

  // Construct the request URL for the Google Maps API
  const requestUrl =
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?` +
    `location=${postCode}&` +
    `radius=32000&` + // 20 miles in meters
    `type=lodging&` + // Type of place to search for (e.g., lodging for hotels)
    `key=${GOOGLE_MAPS_API}`; // Replace 'YOUR_API_KEY' with your actual Google Maps API key

  try {
    // Send a request to the Google Maps API
    const response = await fetch(requestUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

export default router;
