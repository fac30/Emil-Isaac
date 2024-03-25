// //================================================================//
// let map;
// let service;
// let infowindow;

// const Button = document.getElementById("buttonFind");
// Button.addEventListener("click", findMuseumMapHandler);
// const MapContainer = document.getElementById("map-container");

// function findMuseumMapHandler() {
//   const postCodeField = document.getElementById("post-code");
//   const enteredPostCodeValue = postCodeField.value.trim(); // Trim whitespace

//   if (enteredPostCodeValue) {
//     MapContainer.style.display = "block";
//     initMap(enteredPostCodeValue);
//   } else {
//     MapContainer.style.display = "none";
//   }
// }

// function initMap(address) {
//   const geocoder = new google.maps.Geocoder();
//   const mapElement = document.getElementById("map");
//   const parentEl = document.getElementById("list");

//   geocoder.geocode({ address: address }, (results, status) => {
//     if (status === google.maps.GeocoderStatus.OK) {
//       const location = results[0].geometry.location;
//       console.log(location.lat);
//       const mapOptions = {
//         center: location,
//         zoom: 13, // Zoom level may need adjustment depending on desired initial view
//       };
//       map = new google.maps.Map(mapElement, mapOptions);
//       infowindow = new google.maps.InfoWindow();

//       // Create a marker for the entered post code
//       const marker = new google.maps.Marker({
//         map: map,
//         position: location,
//         title: address,
//         icon: {
//           url: "../images/youAreHereIcon.png",
//           scaledSize: new google.maps.Size(60, 60),
//         },
//       });

//       // Add event listener for marker click
//       google.maps.event.addListener(marker, "click", () => {
//         infowindow.setContent(address);
//         infowindow.open(map, marker);
//       });

//       // Center the map on the marker
//       map.setCenter(location);

//       // Search for museums within a 20-mile radius
//       const request = {
//         location: location,
//         radius: 66387.4, // 20 miles in meters
//         fields: ["name", "geometry", "types"],
//         type: "museum",
//         query: "museum",
//       };

//       service = new google.maps.places.PlacesService(map);

//       service.nearbySearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           const museumResults = results.filter(
//             (place) =>
//               place.types[0] === "museum" ||
//               place.types[0] === "Museum")

//             //place.types[0] === "Museum"

//           for (let i = 0; i < museumResults.length; i++) {
//             createMarker(museumResults[i]); // Create marker for each museum

//             console.log(museumResults[i]);
//             console.log(museumResults[i].name);

//             const pElement = document.createElement("p");
//             pElement.textContent = `${museumResults[i].name}, "Number user ratings": ${museumResults[i].user_ratings_total}, "Rating": ${museumResults[i].rating}`;
//             parentEl.appendChild(pElement);
//           }
//         }else {
//       alert("Geocode was not successful for the following reason: " + status);
//     }
//   });
// }

// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location,
//     title: place.name, // Set marker title to the name of the museum
//     icon: {
//       url: "../images/museumIcon.png", // Specify the URL of your custom icon
//       scaledSize: new google.maps.Size(40, 40), // Adjust the size of the icon as needed
//     },
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map, marker);
//   });

//   return marker; // Return the created marker
// }

//======================================================================================//
let map;
let service;
let infowindow;

const Button = document.getElementById("buttonFind");
Button.addEventListener("click", findMuseumMapHandler);
const MapContainer = document.getElementById("map-container");

function findMuseumMapHandler() {
  const postCodeField = document.getElementById("post-code");
  const enteredPostCodeValue = postCodeField.value.trim(); // Trim whitespace

  if (enteredPostCodeValue) {
    MapContainer.style.display = "block";
    initMap(enteredPostCodeValue);
  } else {
    MapContainer.style.display = "none";
  }
}

function initMap(address) {
  const geocoder = new google.maps.Geocoder();
  const mapElement = document.getElementById("map");
  const parentEl = document.getElementById("list");

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK) {
      const location = results[0].geometry.location;
      console.log(location.lat);
      const mapOptions = {
        center: location,
        zoom: 13, // Zoom level may need adjustment depending on desired initial view
      };
      map = new google.maps.Map(mapElement, mapOptions);
      infowindow = new google.maps.InfoWindow();

      // Create a marker for the entered post code
      const marker = new google.maps.Marker({
        map: map,
        position: location,
        title: address,
        icon: {
          url: "../images/youAreHereIcon.png",
          scaledSize: new google.maps.Size(60, 60),
        },
      });

      // Add event listener for marker click
      google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(address);
        infowindow.open(map, marker);
      });

      // Center the map on the marker
      map.setCenter(location);

      // Search for museums within a 20-mile radius
      const request = {
        location: location,
        radius: 3500.4, // 20 miles in meters
        fields: ["name", "geometry", "types", ""],
        type: "museum",
        query: "museum",
      };

      service = new google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const museumResults = results.filter(
            (place) =>
              place.types.map((x) => x === "museum") ||
              place.types.map((x) => x === "Museum")
            //place.types[0] === "Museum"
          );
          for (let i = 0; i < museumResults.length; i++) {
            createMarker(museumResults[i]); // Create marker for each museum

            console.log(museumResults[i]);
            console.log(museumResults[i].name);
            // console.log(results[0].geometry.location);

            // console.log(museumResults[i].geometry.location.lng);

            const pElement = document.createElement("p");
            pElement.textContent = `${museumResults[i].name}, "Number user ratings": ${museumResults[i].user_ratings_total}, "Rating": ${museumResults[i].rating}`;
            parentEl.appendChild(pElement);
          }

          const sortedMuseumsRes = museumResults.sort(
            (a, b) => b.plus_code.compound_code - a.plus_code.compound_code
          );

          console.log(sortedMuseumsRes);
        }
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    title: place.name, // Set marker title to the name of the museum
    icon: {
      url: "../images/museumIcon.png", // Specify the URL of your custom icon
      scaledSize: new google.maps.Size(40, 40), // Adjust the size of the icon as needed
    },
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map, marker);
  });

  return marker; // Return the created marker
}
