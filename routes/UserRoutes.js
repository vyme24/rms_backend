const express= require("express");
const UserController=require("../controller/UserController")


const router= express.Router()
router.get("/get",UserController.getUser)



module.exports= UserRoutes=router;