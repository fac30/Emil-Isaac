# Museum Near Me

This repository contains the code for the "Museums Near Me" web application, built using Node.js, Express, and integrated with external APIs. The application allows users to locate museums near their current location, view them on a map, and gain additional information about them.

## Project Overview

The goal of this project is to develop a comprehensive web application that serves a static web page and dynamically updates it with data fetched from external APIs. The application utilizes Node.js and Express for server-side development and client-side JavaScript for dynamic content rendering.

### Built With

This project is built using:

- HTML
- CSS
- JavaScript

### Running Locally

To run the project on your local machine:

1. Clone the project:

   ```sh
   git clone https://github.com/fac30/Emil-Isaac.git
   ```

2. Install the Node packages:
   ```sh
   npm install
   ```
3. Run the project locally, to start the server:

   ```sh
   node server.js
   ```

   4.The project is using Port 3000 due to port conflicts during development.

   ```sh
   http://localhost:5096/
   ```

   ```

   ```

```

### Deployment

Experience Museums near me instantly through ...

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

#### 2. OpenAI API

- **Museum Information**: When a user selects a museum, the OpenAI API can be used to generate additional information about the selected museum based on natural language queries. This information can then be displayed to the user, enhancing their understanding and experience.

### Stretch Goals

- **Error Handling and Testing**: Implement error handling in both server-side and client-side code and write tests for robustness.
- **UI Enhancement**: Improve user interface aesthetics and interactivity using CSS and interactive elements.
- **Additional Client-Side Interactivity**: Introduce features such as user inputs for data filtering or customization.
- **Documentation and Security**: Document the application's functionality and ensure secure storage of sensitive information.

### Documentation
- **Google maps**: https://developers.google.com/maps/documentation
- **Open AI**: https://platform.openai.com/docs/overview

### Contributors

- Emil Velichkov (https://github.com/EmilRosenov)
- Isaac Fabelurin (https://github.com/PrinceAyo1)
```
