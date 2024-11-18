
const mongoose = require("mongoose"); 
// Importing the mongoose library to interact with MongoDB.

mongoose.connect(
  "mongodb+srv://krsatyam0506:oGsAopRNGWJApe1e@cluster0.u8q8m.mongodb.net/"
);
// Establishing a connection to the MongoDB database using mongoose.
// Replace the connection string with your MongoDB URI.
// The URI contains the credentials and the database cluster information.

const db = mongoose.connection; 
// Storing the connection instance to handle connection-related events.

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
// Adding an event listener to handle connection errors.
// The 'error' event is emitted if there's an issue connecting to the database.
// The `console.error` logs a custom message and the error details.

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});
// Adding an event listener for the 'open' event, which indicates a successful connection.
// This callback runs only once and confirms the database connection.

module.exports = db;
// Exporting the database connection object so it can be used in other parts of the application.
