const connection = require("../database/connection");



module.exports = {
  async create(user) {
     const result = await connection("user").insert(user);
      result;
  },

  async getById(user_id){
    const result = await connection("user")
      .where({user_id})
      .select("*")
      .first();
    return result;
  },
 
  async updateById(user_id, user){
    const result = await connection("user")
      .where({user_id})
      .update(user);
    return result;
  },
  
  async deleteById(user_id, user){
    const result = await connection("user")
      .where({user_id})
      .delete();
    return result;
  }
}