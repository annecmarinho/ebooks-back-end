const connection = require("../database/connection");

module.exports = {
  async create(bookUser) {
    const result = await connection("book_user")
      .insert(bookUser);
    return result;
  },

  async getByUser(user_id){

    const result = await connection("book_user")
      .innerJoin("book", "book_user.book_id", "book.book_id")
      .where({"book_user.user_id": user_id})
      .select(["book_user.*", "book.título", "book.autor"])
    return result;
  },

  
  async deleteById(book_id){
    const result = await connection("book_user")
      .where({user_id})
      .where({book_id})
      .delete();
    return result;
  }
}