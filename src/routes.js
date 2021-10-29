const express = require('express');
const routes = express.Router();

const BookController = require("./controllers/BookController");
const UserController = require("./controllers/UserController");
const BookUserController = require("./controllers/BookUserController");




//User
routes.post("/users", UserController.create);
routes.get("/users/:user_id", UserController.getById);
routes.put("/users/:user_id",UserController.update);
routes.delete("/users/:user_id",UserController.delete);

//Books
routes.post("/books",BookController.create);
routes.get("/books/:book_id", BookController.getById);
routes.put("/books/:book_id",BookController.update);
routes.delete("/books/:book_id",BookController.delete);

//bookUser
routes.post("/bookUser",BookUserController.create);
routes.get("/bookUser/:user_id", BookUserController.getByUser);
routes.put("/bookUser/:book_id",BookUserController.update);
routes.delete("/bookUser/:book_id",BookController.delete);





module.exports = routes;