import dotenv from ".env";

function call() {
  fetch(
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNmWq-nUoPO3mKXi4dru5UNlWk2Q7Gmh0&libraries=places"
  );
}

call();
