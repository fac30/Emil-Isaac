//import findingMuseum from "../utils/findMuseum";

const Button = document.getElementById("buttonFind");
Button.addEventListener("click", findMuseumMapHandler);
const MapContainer = document.getElementById("map-container");
const postCodeVal = document.getElementById("post-code").value;

function findMuseumMapHandler() {
  //e.preventDefault(); // Prevent default form submission
  if ((MapContainer.style.display = "none")) {
    MapContainer.style.display = "block";
    postCodeVal = "";
  } else {
    MapContainer.style.display = "none";
  }

  // Send a POST request to the Express server
  //   fetch("/api/search", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ postCode: postCode }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle response data and display it in the map-container div
  //       var mapContainer = document.getElementById("map-container");
  //       //mapContainer.style.display = "block";
  //       mapContainer.innerHTML = ""; // Clear previous content

  //       // Iterate over the results and display them
  //       data.results.forEach(function (place) {
  //         var placeName = place.name;
  //         var placeAddress = place.vicinity;

  //         var placeElement = document.createElement("div");
  //         placeElement.textContent = placeName + " - " + placeAddress;

  //         mapContainer.appendChild(placeElement);
  //       });

  //       // Make the map container visible
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
}
