const { getBooks } = require("../controllers/BookController");
const connection = require("../database/connection");



module.exports = {
  async create(book) {
    const result = await connection("book")
      .insert(book);
    return result;
  },

  async getById(book_id){
    const result = await connection("book")
      .where({"book.book_id": book_id})
      .select("*")
      .first()
      .leftJoin("book_user", "book.book_id", "book_user.book_id")
      console.log(result);
    return result;
  },
 
  async getAll(){
    const result = await connection("book").select("*");
    return result;
  },

  async updateById(book_id, book){
    const result = await connection("book")
      .where({book_id})
      .update(book);
    return result;
  },
  
  async deleteById(book_id, book){
    const result = await connection("book")
      .where({book_id})
      .delete();
    return result;
  }
}