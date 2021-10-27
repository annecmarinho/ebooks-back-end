const connection = require("../database/connection");
const {v4: uuidv4 }= require("../database/connection");


module.exports = {
  async create(book) {
    const book_id = uuidv4();
    book.book_id=book_id;

    
    const result = await connection("book")
      .insert(book);
    return result;
  },

  async getById(book_id){
    const result = await connection("book")
      .where({book_id})
      .select("*");
    return result;
  },
 
  async updateById(book_id, book){
    const result = await connection("book")
      .where({book_id})
      .update(book);
    return result;
  },
  
  async deleteById(book_id, book){
    const result = await connection("livro")
      .where({book_id})
      .delete();
    return result;
  }
}