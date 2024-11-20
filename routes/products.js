const express = require("express");
// Importing the Express library to create a router for handling HTTP requests.

const router = express.Router();
// Creating an Express Router instance to define API routes for the product-related operations.

// Initializing the products controller
const productsController = require("../controllers/products_controller");
// Importing the products controller, which contains the logic for handling product-related requests.

// Route to get all the products
router.get("/", productsController.products);
// Handles GET requests to the "/" endpoint.
// This route invokes the `products` method in the products controller to fetch and return all products.

// Route to create a new product
router.post("/create", productsController.create);
// Handles POST requests to the "/create" endpoint.
// This route invokes the `create` method in the products controller to add a new product to the database.

// Route to delete a product using its ID
router.delete("/:productID", productsController.delete);
// Handles DELETE requests to the "/:productID" endpoint.
// The route accepts a product ID as a parameter and invokes the `delete` method in the products controller
// to remove the specified product from the database.

// Route to update the quantity of a product
router.put("/:productID/update_quantity/", productsController.updateQuantity);
// Handles POST requests to the "/:productID/update_quantity/" endpoint.
// The route accepts a product ID as a parameter and a query parameter `number` to increment or decrement
// the product's quantity. It invokes the `updateQuantity` method in the products controller to handle the operation.

// Exporting the router
module.exports = router;
// Exporting the router so it can be imported and used in the main application file (e.g., `app.js`).
