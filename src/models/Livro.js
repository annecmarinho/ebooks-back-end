const connection = require("../database/connection");

module.exports = {
  async create(livro) {
    const result = await connection("livro")
      .insert(livro);
    return result;
  },

  async getById(livro_id){
    const result = await connection("livro")
      .where({livro_id})
      .select("*");
    return result;
  },
 
  async updateById(livro_id, livro){
    const result = await connection("livro")
      .where({livro_id})
      .update(livro);
    return result;
  },
  
  async deleteById(livro_id, livro){
    const result = await connection("livro")
      .where({livro_id})
      .delete();
    return result;
  }
}