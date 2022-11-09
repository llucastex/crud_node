
const User = require("../Models/user");

class UserController {
    async create(req, res){
        const { name, email, password } = req.body;
        try{
            const user = await User.create({
                name,
                email,
                password
            });
            user.password = undefined;
            return res.status(200).json(user);
        } catch{
            return res.status(500).send("Resgistration Failed");
        }
    }
    async index(req, res){
        try{
            const listUsers = await User.find()

            return res.status(200).json(listUsers);
        } catch(error){
            return res.status(500).send({
                message: "List operation failed!",
                error: error
            });
        }
    }
    async show(req, res){
        const {id} = req.params;
        try{
            const userId = await User.findById(id);
            // if (!userId){
            //     res.status(404).send("User not found!");
            // }
            return res.status(200).json(userId);
        } catch(error){
            return res.status(500).send({
                message: "User not found!",
            });
        }
    }
    async update(req, res){
        const {id} = req.params;
        try{
            await User.findByIdAndUpdate(id, req.body);
            return res.status(200).json("User updated!");
        }catch{
            return res.status(500).send({
                message: "Unable to update user!",
            })
        }
    }
    async delete(req, res){
        const { id } = req.params;
        try{
            await User.findByIdAndDelete(id, req.body);
            return res.status(200).json("User deleted!");
        }catch{
            return res.status(500).send({
                message: "Unable to update user!",
            })
        }
    }
}

module.exports = new UserController();
// export default new UserController();