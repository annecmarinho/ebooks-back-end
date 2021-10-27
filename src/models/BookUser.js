const connection = require("../database/connection");

module.exports = {
  async create(book_user) {

    const result = await connection("book_user")
      .insert(book_user
  );
    return result;
  },

  async getById(user_id,book_id){
    const result = await connection("book_user")
      .where({ user_id, book_id})
      .select("*");
    return result;
  },

  async updateById(book_id, userBook){
    const result = await connection("user")
      .where({book_id})
      .update(book_user
  );
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