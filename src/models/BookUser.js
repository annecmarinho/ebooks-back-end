const connection = require("../database/connection");

module.exports = {
  async create(bookUser) {

    const result = await connection("book_user")
      .insert(bookUser);
    return result;
  },

  async getById(user_id){
    const result = await connection("book_user")
      .where({ user_id})
      .select("*");
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