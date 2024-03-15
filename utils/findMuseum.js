import express from "express";
import app from "../index.js";

const Button = document.getElementById("buttonFind");
Button.addEventListener("click", showMapContainerHandler);
const MapContainer = document.getElementById("map-container");

export function showMapContainerHandler() {
  MapContainer.style.display = block;

  const POSTCODE = MapContainer.value;
  console.log(POSTCODE);
}

export default function findingMuseum() {}

// document
//   .getElementById("search-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission

//     var postCode = document.getElementById("post-code").value;

//     // Send a POST request to your Express server
//     fetch("/search", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ postCode: postCode }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle response data and display it in the map-container div
//         var mapContainer = document.getElementById("map-container");
//         mapContainer.innerHTML = ""; // Clear previous content

//         // Iterate over the results and display them
//         data.results.forEach(function (place) {
//           var placeName = place.name;
//           var placeAddress = place.vicinity;

//           var placeElement = document.createElement("div");
//           placeElement.textContent = placeName + " - " + placeAddress;

//           mapContainer.appendChild(placeElement);
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   });
