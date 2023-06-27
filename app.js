const express=require("express"); const app=express(); app.listen(3000);
const cors=require("cors");app.use(cors()); const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false})); app.use(express.json());
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var schema=mongoose.Schema({_id:String, password:String, name:String, role:String});
var User=mongoose.model("user",schema);
app.get("/", (req,res)=>{     res.sendFile(__dirname + "/home.html"); });
app.get("/register", (req,res)=>{    res.sendFile(__dirname + "/register.html");});
app.get("/login", (req,res)=>{    res.sendFile(__dirname + "/login.html");});
app.post("/reg",async (req,res)=>{ var r=new User(req.body); var r2=await r.save();
    res.json(r2);});
app.get("/check/:id",async (req,res)=>{   var r=await User.findById(req.params.id);
    if(!r)
   res.send("correct");
   else
   res.send("Id not available ");
    });