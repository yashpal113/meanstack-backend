const express=require("express");
const app=express();
const port=process.env.port || 3000 ;
app.listen(port, ()=>{ console.log("port : "+ port)});

const cors=require("cors");
app.use(cors());
app.use(express.json());
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.json({"message":{"data": req.query}});
})
app.post("/", (req,res)=>{
    res.json({"message":{"data": req.body}});
})
app.get("/users",(req,res)=>{
obj=[{"id":"1","name":"one"},{"id":"2","name":"two"}];
    res.json(obj);
});


