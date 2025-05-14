const mongoose= require("mongoose")

mongoose.connect(process.env.MONGODB_URL)


const db = mongoose.connection
db.on("open", ()=>{
    console.log("db connected")
})