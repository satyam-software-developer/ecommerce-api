const mongoose = require("mongoose");
// Importing the Mongoose library to interact with the MongoDB database.

// Creating the product schema
const productSchema = new mongoose.Schema(
  {
    name: String,
    // The "name" field represents the name of the product. It is of type String.

    quantity: Number,
    // The "quantity" field represents the quantity of the product available in stock. It is of type Number.
  },
  {
    versionKey: false,
    // Disabling the "__v" field (version key) that Mongoose automatically adds to documents.
  }
);

// Creating a new model called "Product"
const Product = mongoose.model("Product", productSchema);
// The "Product" model is created using the schema defined above.
// This model will be used to interact with the "products" collection in the database.

// Exporting the Product model
module.exports = Product;
// The "Product" model is exported so that it can be imported and used in other parts of the application.
