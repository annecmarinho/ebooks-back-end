const express = require('express');
const routes = express.Router();

const BookController = require("./controllers/BookController");
const UserController = require("./controllers/UserController");
const BookUserController = require("./controllers/BookUserController");





routes.post("/users", UserController.create);

routes.put("/users/:user_id",UserController.update);



routes.delete("/users/:user_id",UserController.delete);

routes.post("/books",BookController.create);

routes.put("/books/:book_id",BookController.update);



routes.delete("/books/:book_id",BookController.delete);

routes.post("/bookUser",BookUserController.create);

routes.put("/bookUser/:book_id",BookUserController.update);



routes.delete("/bookUser/:book_id",BookController.delete);





module.exports = routes;