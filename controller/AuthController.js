
const Validation = require("../helper/Validation")
const userModel = require("../models/Users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SendMail = require("../services/Mail")
const login = async (req, res) => {
    try {
       
      const validate = Validation.login(req);

      console.log(validate)
    
        const { email, password } = req.body;

        const UserExist = await userModel.findOne({ email })
        if (!UserExist) {
            throw new Error("User not Exist")
        }
        

         
        const checkpasword =  bcrypt.compare(password, UserExist.password)
        if (!checkpasword) {
            throw new Error("incorrect password")
        }
        const token = jwt.sign(UserExist.toObject(), "apikey")
        await SendMail(UserExist.email,"Login Successfully","Your account accessed")

        return res.status(200).json({ status: true, message: "User login successfully", data: { token } });

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
       
    }



}
const register = async (req, res) => {
    try {
    
        const validate = Validation.register(req);

         if(validate.status==false){
            throw new Error(validate.message)
         }


        const { name, email, password } = req.body;
      
        const UserExist = await userModel.findOne({ email })
        if (UserExist) {
            throw new Error("Use already Exist")
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const username = "rms_" + Math.floor(Math.random(100, 9999) * 6)
        const user = new userModel({
            username,
            name,
            email,
            password: hashPassword
        })

        user.save()
        if (!user) {
            throw new Error("User not created")                 
        }



        return res.status(200).json({ status: true, message: "user register successfully", data: req.body });




    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }


}
const forgot = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)


}
const resetpassword = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)


}
const verifyOTP = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)


}
module.exports = AuthController = {
    login,
    register,
    forgot,
    resetpassword,
    verifyOTP
}