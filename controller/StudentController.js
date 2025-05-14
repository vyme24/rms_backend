const StudentModel = require("../models/Students")

const Validation = require("../helper/Validation")
// CRUD = Create, Read, Update, Delete

const create = async (req,res) => {



    try {

       const validate = Validation.StudentCreate(req);
         if(validate.status==false){
                throw new Error(validate.message)
            }

        const {email, firstName, lastName, gender,  dateOfBirth, phoneNumber,address, program, courses, guardian  } = req.body;
        const Exist = await StudentModel.findOne({email, phoneNumber})
        if(Exist){
            throw new Error("Student already Exist")
        };
      const student = new StudentModel({
        firstName,
        lastName,
        email,
        gender,
        phoneNumber,
        dateOfBirth,
        program,
        address,
        courses,
        guardian
      })
     student.save()

        if(!student){
            throw new Error("Student not created")
        }
        return res.status(200).json({ status: true, message: "Student created successfully" });
     
      
    } catch (error) {
         return res.status(500).json({ status: false, message: error.message });
    }
   
}


const getAll = async (req,res) => {

    try { 
        const students = await StudentModel.find({})
        if(!students){
            throw new Error("No student found")
        }
        return res.status(200).json({ status: true, message: "Student fetched successfully", data: students }); 


      }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}




const getById = async (req,res) => {

    try { 
        const {id } = req.params;
        const student = await StudentModel.findById(id)
        if(!student){
            throw new Error("No student found")
        }
        return res.status(200).json({ status: true, message: "Student fetched successfully", data: student });

        
      }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}



const updateById = async (req,res) => {

    try { 
      const {id } = req.params;
      const {firstName, lastName, gender,  dateOfBirth, phoneNumber,address, program, courses, guardian  } = req.body;
      
      const student = await StudentModel.findByIdAndUpdate(id, {
        firstName,
        lastName,
        phoneNumber,
        dateOfBirth,
        program,
        gender,
        address,
        courses,
        guardian
      })
        if(!student){
            throw new Error("No student updated")
        }
        return res.status(200).json({ status: true, message: "Student updated successfully" });
    }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}



const deleteById = async (req,res) => {

    try { 
        const {id } = req.params;
        const student = await StudentModel.findByIdAndDelete(id)
        if(!student){
            throw new Error("No student found")
        }
        return res.status(200).json({ status: true, message: "Student deleted successfully" });

        
      }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}


module.exports = {  create , getAll, getById, updateById, deleteById }
