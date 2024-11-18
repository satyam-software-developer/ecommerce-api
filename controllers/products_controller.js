const Product = require("../models/product");
// Importing the Product model to interact with the products collection in the database.

// Function to show all the products
module.exports.products = async function (req, res) {
  try {
    const products = await Product.find({});
    // Fetching all products from the database.

    return res.status(200).json(products);
    // Sending a 200 OK response with the list of products in JSON format.
  } catch (err) {
    console.error("Error fetching products:", err);
    // Logging the error for debugging purposes.

    return res.status(500).json({
      message: "Error fetching products",
      error: err.message,
    });
    // Sending a 500 Internal Server Error response with an error message.
  }
};

// Function to create a new product
module.exports.create = async function (req, res) {
  try {
    const newProduct = new Product({
      name: req.body.name,
      quantity: req.body.quantity,
    });
    // Creating a new product instance using the data sent in the request body.

    await newProduct.save();
    // Saving the new product to the database.

    return res.status(201).json({
      message: "New product added successfully",
      product: newProduct,
    });
    // Sending a 201 Created response with the newly created product details.
  } catch (err) {
    console.error("Error creating product:", err);
    // Logging the error for debugging purposes.

    return res.status(500).json({
      message: "Error creating product",
      error: err.message,
    });
    // Sending a 500 Internal Server Error response with an error message.
  }
};

// Function to delete a product using its ID
module.exports.delete = async function (req, res) {
  try {
    const productID = req.params.productID;
    // Extracting the product ID from the request parameters.

    const result = await Product.deleteOne({ _id: productID });
    // Deleting the product with the specified ID from the database.

    if (result.deletedCount === 0) {
      // Checking if no product was deleted (i.e., product not found).
      return res.status(404).json({
        message: "Product not found",
      });
      // Sending a 404 Not Found response if the product does not exist.
    }

    return res.status(200).json({
      message: "Product deleted successfully",
    });
    // Sending a 200 OK response with a success message.
  } catch (err) {
    console.error("Error deleting product:", err);
    // Logging the error for debugging purposes.

    return res.status(500).json({
      message: "Error deleting product",
      error: err.message,
    });
    // Sending a 500 Internal Server Error response with an error message.
  }
};

// Function to update a product's quantity
module.exports.updateQuantity = async function (req, res) {
  try {
    const ID = req.params.productID;
    // Extracting the product ID from the request parameters.

    // Find the product using its ID
    const product = await Product.findById(ID);
    if (!product) {
      // Checking if the product does not exist.
      return res.status(404).json({
        message: "Product not found",
      });
      // Sending a 404 Not Found response if the product does not exist.
    }

    // Increment or decrement the quantity based on the query parameter
    const incrementBy = parseInt(req.query.number);
    // Parsing the `number` query parameter to determine how much to increment or decrement the quantity.

    const newQty = product.quantity + incrementBy;
    // Calculating the new quantity.

    // Update the product's quantity
    const updatedProduct = await Product.findByIdAndUpdate(
      ID,
      { quantity: newQty },
      { new: true } // Return the updated document after the update.
    );

    return res.status(200).json({
      product: updatedProduct,
      message: "Product quantity updated successfully",
    });
    // Sending a 200 OK response with the updated product details and a success message.
  } catch (err) {
    console.error("Error updating product quantity:", err);
    // Logging the error for debugging purposes.

    return res.status(500).json({
      message: "Error updating product quantity",
      error: err.message,
    });
    // Sending a 500 Internal Server Error response with an error message.
  }
};
