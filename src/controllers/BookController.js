const BookModel = require("../models/Book");
const { v4: uuidv4 } = require("uuid");
const { getById } = require("../models/BookUser");

module.exports = {
    async create(request, response) {
        try {
            const newBook = request.body;

            const book_id = uuidv4();
            newBook.book_id = book_id;


            const result = await BookModel.create(newBook);

            return response.status(200).json({ book_id: result });


        } catch (error) {
            console.warn("Book creation failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to create Book" });

        }
    },
    async getById(request, response) {
        try {
            const { book_id } = request.params;

            const result = await BookModel.getById(book_id);

            return response.status(200).json({ book_id: result });


        } catch (error) {
            console.warn("Book get failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to get Book" });

        }
    },


    async update(request, response) {
        try {
            const { book_id } = request.params;
            const newBook = request.body;

            await BookModel.updateById(book_id, newBook);

            return response.status(200).json({ notification: "Book update sucessfully" });

        } catch (error) {
            console.warn("Book update failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to create Book" });

        }

    },

    async delete(request, response) {

        try {
            const { book_id } = request.params;

            await BookModel.deleteById(book_id);

            return response.status(200).json({ notification: "Book deleted sucessfully" });

        } catch (error) {
            console.warn("Book delete failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to create Book" });

        }

    },
};