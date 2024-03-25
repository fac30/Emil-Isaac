import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json()); // Parse JSON requests

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// function initMap() {
//   var options = {
//     center: { lat: 51.5081, lng: 0.0759 },
//     zoom: 8,
//   };

//   map = new google.maps.Map(document.getElementById("map"), options);
// }
