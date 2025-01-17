## E-Commerce-API

The E-Commerce API provides a simple yet powerful backend solution for managing product inventory. Built with Node.js, Express.js, and MongoDB, it supports key operations like creating, updating, listing, and deleting products. The API is designed for scalability and ease of integration, with a clean, modular structure for future expansion. This project serves as a solid foundation for building more complex e-commerce systems.

1. Demo: https://drive.google.com/file/d/1e29FwQJemFnSfZupkSPV2L7AtaWgeuX3/view?usp=sharing
2. Hosted link: https://ecommerce-api-3-8uvj.onrender.com/products

# ABOUT

This is an E-commerce API made using Node.Js & MongoDB.

STEPS TO USE THE API:

1. run the "npm init" command on the terminal in this project directory
2. start the server using node app.js
3. Open postman
4. Make a GET request on localhost:3000/products
5. The products should be visible

STEPS TO CREATE A NEW PRODUCT:

1. start the server using node app.js
2. Open postman
3. put localhost:3000/products/create as the URL.
4. Select the Body tab below the URL textarea and then select x-www-form-URL-encoded
5. Add name & quantity as the keys and set the desired values for the keys.
6. Make a POST request.
7. If you receive the message saying a new product added successfully then you have done everything correctly.
8. The product is created. Check it out by making a GET request at localhost:3000/products

STEPS TO DELETE A PRODUCT:

1. copy the object ID of the product you want to delete.
2. add the id after localhost:3000/products/
3. Make a DELETE request.
4. You will receive a message saying deleted successfully.

STEPS TO UPDATE THE QUANTITY OF A PRODUCT:

1. Copy the object ID of the product whose quantity you want to update
2. Put the id after localhost:3000/products/
3. After putting the id add /update_quantity/?number={x} in the URL where x is the number by which you want to increase or decrease the quantity.
4. the URL should be looking like localhost:3000/products/{id}/update_quantity/?number={x}
5. Make a POST request and you should get a message containing the updated product

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

# API Endpoints

1. Create a Product

- URL: /products/create
- Method: POST
- Request Body:
  {
  "name": "laptop",
  "quantity": 10
  }
- Response:
  {
  "data": {
  "product": {
  "name": "laptop",
  "quantity": 10
  }
  }
  }

2. List Products

- URL: /products
- Method: GET
- Response:
  {
  "data": {
  "products": [
  {
  "id": "1",
  "name": "laptop",
  "quantity": 10
  },
  {
  "id": "2",
  "name": "camera",
  "quantity": 5
  }
  ]
  }
  }

3. Delete a Product

- URL: /products/:id
- Method: DELETE
- Response:
  {
  "data": {
  "message": "product deleted"
  }
  }

4. Update Product Quantity

- URL: /products/:id/update_quantity/?number=10
- Method: POST
- Response:
  {
  "data": {
  "product": {
  "id": "1",
  "name": "laptop",
  "quantity": 20
  },
  "message": "updated successfully"
  }
  }

  # Folder Structure

  e-commerce-api/
  ├── models/
  │ └── product.js # Mongoose schema for Product
  ├── controllers/
  │ └── productsController.js # Contains all controller logic
  ├── routes/
  │ └── products.js # Routes for product-related APIs
  ├── app.js # Entry point for the server
  ├── package.json # Project metadata and dependencies
  └── README.md # Documentation

## License

This project is licensed under the MIT License.

## Author

SATYAM KUMAR
