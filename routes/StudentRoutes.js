const express= require("express");
const StudentController=require("../controller/StudentController")


const router= express.Router()
router.get("/getAll",StudentController.getAll)
router.get("/get/:id",StudentController.getById)
router.post("/create",StudentController.create)
router.put("/update/:id",StudentController.updateById)
router.delete("/delete/:id",StudentController.deleteById)


module.exports= StudentRoutes=router;