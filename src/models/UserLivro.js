const connection = require("../database/connection");

module.exports = {
  async create(userlivro) {
    const result = await connection("livro_user")
      .insert(userlivro);
    return result;
  },

  async getByUserId(user_id){
    const result = await connection("livro_user")
      .where({user_id})
      .select("*");
    return result;
  },
  
  async deleteById(user_id, livro_id){
    const result = await connection("livro_user")
      .where({user_id})
      .where({livro_id})
        .delete();
    return result;
  }
}