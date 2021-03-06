const BookUserModel = require("../models/BookUser");

module.exports = {
    async create(request, response) {
        try {
            const newBookUser = request.body;
            const result = await BookUserModel.create(newBookUser);

            return response.status(200).json({ User_id: result });
        } catch (error) {
            console.warn("BookUser creation failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to create BookUser" });

        }
    },

    async getByUser(request, response) {
        try {
            const { user_id } = request.params;
            const result = await BookUserModel.getByUser(user_id);

            return response.status(200).json(result);
        } catch (error) {
            console.warn("BookUser get failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to get BookUser" });

        }
    },


    async update(request, response) {
        try {
            const { user_id } = request.params;
            const newBookUser = request.body;

            await BookUserModel.updateById(user_id, newBookUser);

            return response.status(200).json({ notification: "User update sucessfully" });

        } catch (error) {
            console.warn("User update failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to update BookUser" });

        }

    },

    async delete(request, response) {

        try {
            const { user_id, book_id } = request.params;

            await BookUserModel.deleteById(book_id, user_id);

            return response.status(200).json({ notification: "BookUser deleted sucessfully" });

        } catch (error) {
            console.warn("BookUser delete failed:", error)
            return response.status(500).json({ notification: "Internal server error while trying to deleteBookUser" });

        }

    },
}