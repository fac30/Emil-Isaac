import { API_KEY } from "./config.js";
import { OPEN_AI_KEY } from "./config.js";

let passwordKey = OPEN_AI_KEY;
//console.log(passwordKey);

// let answer = document.getElementById("what-can-we-see-details");

function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places,geometry&loading=async`;
  script.defer = true;
  document.head.appendChild(script);
}
loadGoogleMapsAPI();

let map;
let service;
let infowindow;
let postcodeMarker;

const Button = document.getElementById("buttonFind");
Button.addEventListener("click", findMuseumMapHandler);
const MapContainer = document.getElementById("map-container");

function findMuseumMapHandler() {
  const postCodeField = document.getElementById("post-code");
  const enteredPostCodeValue = postCodeField.value.trim();

  if (enteredPostCodeValue) {
    MapContainer.style.display = "block";
    initMap(enteredPostCodeValue);
  } else {
    MapContainer.style.display = "none";
  }
}

function initMap(address) {
  const mapElement = document.getElementById("map");
  const parentEl = document.getElementById("list");

  geocodeAddress(address, (location) => {
    if (location) {
      createMap(location, mapElement);
      addPostcodeMarker(location); // Add marker for postcode location
      searchNearbyMuseums(location, parentEl);
    } else {
      console.error("Geocode was not successful for the entered address.");
      alert("Geocode was not successful for the entered address.");
    }
  });
}

function geocodeAddress(address, callback) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[0]) {
        const location = results[0].geometry.location;
        callback(location);
      } else {
        callback(null);
      }
    } else {
      callback(null);
    }
  });
}

function createMap(location, mapElement) {
  const mapOptions = {
    center: location,
    zoom: 13,
  };
  map = new google.maps.Map(mapElement, mapOptions);
}

function addPostcodeMarker(location) {
  postcodeMarker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Entered Postcode Location",
    icon: {
      url: "../images/youAreHereIcon.png", // Blue marker icon for postcode
      scaledSize: new google.maps.Size(60, 60),
    },
  });

  // Add event listener for postcode marker click
  postcodeMarker.addListener("click", () => {
    // Perform action when postcode marker is clicked
    alert("You clicked on the postcode location marker.");
  });
}

function searchNearbyMuseums(location, parentEl) {
  const request = {
    location: location,
    radius: 3500.4, // 20 miles in meters
    fields: ["name", "user_ratings_total", "rating"],
    type: "museum",
  };

  service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, (results, status) => {
    console.log(results);
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // Sort the results based on distance from the user's location
      results.sort((a, b) => {
        const distanceA = google.maps.geometry.spherical.computeDistanceBetween(
          location,
          a.geometry.location
        );
        const distanceB = google.maps.geometry.spherical.computeDistanceBetween(
          location,
          b.geometry.location
        );
        return distanceA - distanceB;
      });

      results.forEach((place) => {
        if (place.types.includes("museum")) {
          createMarker(place);
          addMuseumNameElement(place, parentEl);
          addMuseumElement(place, parentEl);
        }
      });
    } else {
      console.error("Places service request failed:", status);
    }
  });
}

function createMarker(place) {
  // Create marker for the museum
  const marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name,
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      scaledSize: new google.maps.Size(60, 60),
    },
  });

  // Add event listener for museum marker click
  marker.addListener("click", () => {
    const infowindow = new google.maps.InfoWindow({
      content: `<div>${place.name}</div>`,
    });
    infowindow.open(map, marker);
  });

  return marker;
}

function addMuseumNameElement(place, parentEl) {
  const museumLocation = place.geometry.location;

  const pElement = document.createElement("li");
  pElement.textContent = `${place.name}`;
  pElement.setAttribute("id", "clicked");
  pElement.addEventListener("click", () => {
    console.log(place);
    const museumDetailsDiv = document.getElementById("museum-details");
    museumDetailsDiv.innerHTML = `
                <h3>${place.name}</h3>
                <img src="${place.icon}" alt="Icon" />
                <ul class="list">
                  <li><strong>Address:</strong> ${place.vicinity}</li>
                  <li><strong>Rating:</strong> ${place.rating}/5</li>
                  <li><strong>Map:</strong> ${
                    place.photos ? place.photos[0].html_attributions : ""
                  }</li>
            `;
    map.panTo(museumLocation);
    const infoWindow = new google.maps.InfoWindow({
      content: `<div>${place.name}</div>`,
    });
    infoWindow.open(map, createMarker(place));
  });

  parentEl.appendChild(pElement);
}

function addMuseumElement(place, parentEl) {
  const museumLocation = place.geometry.location;

  // const listItemElement = document.createElement("li");
  const listItemElement = document.getElementById("clicked");
  console.log(listItemElement.textContent);
  //listItemElement.textContent = `${place.name}`;
  listItemElement.addEventListener("click", () => {
    console.log(place);

    // Fetch data from OpenAI API
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `What can we see in ${listItemElement.textContent}`,
          },
        ],
        temperature: 0.7,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${passwordKey}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const generatedContent = json.choices[0].message.content;
        console.log(generatedContent);
        //console.log(json.choices);

        // Create DOM elements for the generated content
        const headingElement = document.createElement("h3");
        headingElement.textContent = `What can we see in ${listItemElement.textContent}`;

        const paragraphElement = document.createElement("p");
        paragraphElement.textContent = generatedContent;

        // Clear existing content in museum info div
        const museumInfoDiv = document.getElementById(
          "what-can-we-see-details"
        );
        museumInfoDiv.innerHTML = "";

        // Append new elements to museum info div
        museumInfoDiv.appendChild(headingElement);
        museumInfoDiv.appendChild(paragraphElement);
      })
      .catch((err) => console.log(err));

    // map.panTo(museumLocation);
    // const infoWindow = new google.maps.InfoWindow({
    //   content: `<div>${place.name}</div>`,
    // });
    // infoWindow.open(map, createMarker(place));
  });

  parentEl.appendChild(listItemElement);
}
