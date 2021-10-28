const UserModel = require("../models/User");
const {v4: uuidv4 }= require("../database/connection");
const { getById } = require("../models/Book");

module.exports = {
    async create(request,response){
       try {
           const newUser = request.body;

           const user_id = uuidv4();
           newUser.user_id=user_id;

           const result = await UserModel.create(newUser);

           return response.status(200).json({user_id:result});


       } catch(error){
           console.warn("User creation failed:",error)
        return response.status(500).json({notification:"Internal server error while trying to create Note"});

       }
    },

    


    async update(request,response){
        try{
            const { user_id } = request.params;
            const newUser = request.body;

            await BookModel.updateById(user_id, newUser);
 
            return response.status(200).json({ notification: "User update sucessfully"});

        }catch(error){
            console.warn("User update failed:",error)
            return response.status(500).json({notification:"Internal server error while trying to create Note"});
    
        }

    },

    async delete(request,response){

        try{
            const { user_id } = request.params;

            await BookModel.deleteById(user_id);
 
            return response.status(200).json({ notification: "User deleted sucessfully"});

        }catch(error){
            console.warn("User delete failed:",error)
            return response.status(500).json({notification:"Internal server error while trying to create Note"});
    
        }

    },
};