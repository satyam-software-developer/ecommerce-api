// Importing required packages
const express = require("express");
// Express is a minimal and flexible Node.js web application framework for building APIs and web servers.

const bodyParser = require("body-parser");
// Body-parser is middleware used to parse incoming request bodies, making it accessible via `req.body`.

const db = require("./config/mongoose");
// Importing the database configuration to establish a connection to MongoDB.

// Initializing Express
const app = express();
// Creating an instance of the Express application to handle HTTP requests and responses.

// Using body-parser to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to parse the body of incoming requests with URL-encoded payloads.
// `extended: true` allows for parsing nested objects in the request body.

// Using routes
app.use("/products", require("./routes/products"));
// Mounting the `products` routes to the `/products` path.
// Any request starting with `/products` will be handled by the routes defined in `./routes/products`.

// Starting the server
app.listen(3000, function () {
  console.log("API is live on http://localhost:3000/products");
});
// The application listens for incoming HTTP requests on port 3000.
// Logs a message to indicate that the server is running and provides the base URL for the API.
