const connection = require("../database/connection");

module.exports = {
  async create(userBook) {
    const result = await connection("book_user")
      .insert(userBook);
    return result;
  },

  async getByUserId(user_id){
    const result = await connection("book_user")
      .where({user_id})
      .select("*");
    return result;
  },
  
  async deleteById(user_id, book_id){
    const result = await connection("book_user")
      .where({user_id})
      .where({book_id})
        .delete();
    return result;
  }
}