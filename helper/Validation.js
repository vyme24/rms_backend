
const firstError = (req) => {
    
   

    if(!req.body || Object.keys(req.body).length === 0){
        throw new Error("Invalid Request")
    }
    return true
}




const register = (req) => {
      
    try {
    
    firstError(req)

    if(!req.body.email || !req.body.name || !req.body.password ){
      throw new Error("required fields missing")
    }

    return {status : true , message :"valid"}

    }
    catch (err) {
     return {status : false , message : err.message || "Invalid Request"}
    }

}

const login = (req) => {
      
    try {
    
        firstError(req)
    
        if(!req.body.email || req.body.password ){
          throw new Error("required fields missing")
        }
    
        return {status : true , message :"valid"}
    
        }
        catch (err) {
         return {status : false , message : err.message || "Invalid Request"}
        }

}


const StudentCreate = (req) => {
      
    try {
    
        firstError(req)
        if(!req.body.email || !req.body.firstName || !req.body.lastName){
          throw new Error("required fields missing")
        }
    
        return {status : true , message :"valid"}
    
        }
        catch (err) {
         return {status : false , message : err.message || "Invalid Request"}
        }

}


module.exports = Validation = { register, login, StudentCreate}




