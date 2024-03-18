//import findingMuseum from "../utils/findMuseum";

const Button = document.getElementById("buttonFind");
Button.addEventListener("click", findMuseumMapHandler);
const MapContainer = document.getElementById("map-container");
console.log(console.log("Entered value:", enteredPostCodeValue));

function findMuseumMapHandler() {
  //e.preventDefault(); // Prevent default form submission

  const postCodeField = document.getElementById("post-code");
  const enteredPostCodeValue = postCodeField.value;
  console.log("Entered value:", enteredPostCodeValue);

  if ((MapContainer.style.display = "none" && enteredPostCodeValue != "")) {
    MapContainer.style.display = "block";
    enteredPostCodeValue = "";
  } else if (
    (MapContainer.style.display = "block" && enteredPostCodeValue != "")
  ) {
    MapContainer.style.display = "none";
    enteredPostCodeValue = "";
  }

  //Send a POST request to the Express server
  fetch("https://www.google.com/maps/search/Museums/RM66DJ", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postCode: enteredPostCodeValue }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle response data and display it in the map-container div
      var mapContainer = document.getElementById("map-container");
      //mapContainer.style.display = "block";
      mapContainer.innerHTML = ""; // Clear previous content

      // Iterate over the results and display them
      data.results.forEach(function (place) {
        var placeName = place.name;
        var placeAddress = place.vicinity;

        var placeElement = document.createElement("div");
        placeElement.textContent = placeName + " - " + placeAddress;

        mapContainer.appendChild(placeElement);
      });

      // Make the map container visible
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function initMap() {
  var options = {
    center: { lat: 51.5081, lng: 0.0759 },
    zoom: 8,
  };

  map = new google.maps.Map(document.getElementById("map"), options);
}
