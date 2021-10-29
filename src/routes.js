const express = require('express');
const routes = express.Router();

const BookController = require("./controllers/BookController");
const BookValidator = require("./validators/BookValidator");

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const BookUserController = require("./controllers/BookUserController");
const BookUserValidator = require("./validators/BookUserValidator");




//User
routes.post("/users", UserValidator.create, UserController.create);
routes.get("/users/:user_id", UserValidator.getById, UserController.getById);
routes.put("/users/:user_id", UserValidator.update, UserController.update);
routes.delete("/users/:user_id", UserValidator.delete, UserController.delete);

//Books
routes.post("/books", BookValidator.create, BookController.create);
routes.get("/books/:book_id", BookValidator.getById, BookController.getById);
routes.put("/books/:book_id", BookValidator.update, BookController.update);
routes.delete("/books/:book_id", BookValidator.delete, BookController.delete);

//bookUser
routes.post("/bookUser",BookUserController.create);
routes.get("/bookUser/:user_id", BookUserController.getByUser);
routes.put("/bookUser/:book_id",BookUserController.update);
routes.delete("/bookUser/:book_id",BookController.delete);





module.exports = routes;