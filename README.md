# Museum Near Me

This repository contains the code for the "Museum Near Me" web application, built using Node.js, Express, and integrated with external APIs. The application allows users to locate museums and galleries near their current location, view them on a map, and obtain route information to reach them.

## Project Overview

The goal of this project is to develop a comprehensive web application that serves a static web page and dynamically updates it with data fetched from external APIs. The application utilizes Node.js and Express for server-side development and client-side JavaScript for dynamic content rendering.

### Core Features

- **Server-Side Setup**: Initialize a Node.js project using Express and serve a static web page.
- **Static Web Page**: Create an index.html file with placeholders for dynamic content.
- **JSON Endpoints**: Implement routes in Express to fetch data from external APIs and return it in JSON format.
- **Dynamic Content**: Use client-side JavaScript to make requests to server-side endpoints and update the web page with fetched data.
- **Client-Server Interaction**: Ensure smooth interaction between the client and server for data fetching and processing.

### APIs Integration

#### 1. Google Maps API

- **Displaying Maps**: The Google Maps API is used to display an interactive map on the web page, allowing users to visualize their current location and nearby museums.
- **Place Search**: We leverage the Place Search feature to search for museums and galleries near a given location.
- **Directions Service**: With the Directions Service, driving and public transport routes from the user's location to the selected museum can be calculated.

#### 2. TfL API (Transport for London)

- **Public Transport Routes**: The TfL API is used to retrieve public transport routes from the user's location to the selected museum.
- **Real-Time Information**: If available, real-time information about public transport services can be incorporated to provide accurate journey planning.

#### 3. OpenAI API

- **Museum Information**: When a user selects a museum, the OpenAI API can be used to generate additional information about the selected museum based on natural language queries. This information can then be displayed to the user, enhancing their understanding and experience.

#### 4. Postcodes API

- **Location Lookup**: The Postcodes API is used to convert user-entered postcodes into geographical coordinates (latitude and longitude), which are then used to calculate routes or search for nearby museums.

### Stretch Goals

- **Error Handling and Testing**: Implement error handling in both server-side and client-side code and write tests for robustness.
- **UI Enhancement**: Improve user interface aesthetics and interactivity using CSS and interactive elements.
- **Additional Client-Side Interactivity**: Introduce features such as user inputs for data filtering or customization.
- **Documentation and Security**: Document the application's functionality and ensure secure storage of sensitive information.

### Contributors

- Emil Velichkov (https://github.com/EmilRosenov)
- Isaac Fabelurin (https://github.com/PrinceAyo1)
