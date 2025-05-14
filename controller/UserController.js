const jwt= require("jsonwebtoken");
const Users = require("../models/Users");

const getUser =  async (req,res) => {

    try {

        const token = req.headers.authorization;
        const decoded = jwt.verify(token,"apikey")
        const user = await Users.findById(decoded._id).select("-password")

        return res.status(200).json({status: true, message : "Get User Detail", data : user})
        
    } catch (error) {
        return res.status(500).json({status: false, message : error})
    }



}


module.exports = UserController = { getUser}