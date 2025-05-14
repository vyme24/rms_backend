const http = require("http")
const express= require("express")
const cors=require("cors")
const bodyParser = require("body-parser")

require("dotenv").config();
require("./config/db")

const app= express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))


const AuthRoutes=require("./routes/AuthRoutes")
const UserRoutes=require("./routes/UserRoutes")
const StudentRoutes=require("./routes/StudentRoutes") 

app.use("/auth",AuthRoutes)

app.use("/user",UserRoutes)

app.use("/student",StudentRoutes)


const server = http.createServer(app,{})


app.get("/",(req,res)=>{
    res.send("server is working")
})

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Listening on http://${process.env.HOST}:${process.env.PORT}`);
});


