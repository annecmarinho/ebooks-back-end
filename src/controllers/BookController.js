const BookModel = require("../models/Book");
const {v4: uuidv4 }= require("../database/connection");

module.exports = {
    async create(request,response){
       try {
           const newBook = request.body;

           const book_id = uuidv4();
           book.book_id=book_id;
       

           const result = await BookModel.create(newBook);

           return response.status(200).json({book_id:result});


       } catch(error){
           console.warn("Book creation failed:",error)
        return response.status(500).json({notification:"Internal server error while trying to create Note"});

       }
    },
   

    async update(request,response){
        try{
            const { book_id } = request.params;
            const newBook = request.body;

            await BookModel.updateById(book_id, newBook);
 
            return response.status(200).json({ notification: "Book update sucessfully"});

        }catch(error){
            console.warn("Book update failed:",error)
            return response.status(500).json({notification:"Internal server error while trying to create Note"});
    
        }

    },

    async delete(request,response){

        try{
            const { book_id } = request.params;

            await BookModel.deleteById(book_id);
 
            return response.status(200).json({ notification: "Book deleted sucessfully"});

        }catch(error){
            console.warn("Book delete failed:",error)
            return response.status(500).json({notification:"Internal server error while trying to create Note"});
    
        }

    },
};