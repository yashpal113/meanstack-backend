const express=require("express"); const app=express(); app.listen(3000);
const cors=require("cors");app.use(cors()); const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false})); app.use(express.json());

app.get("/", (req,res)=>{     res.send("Hello Acro"); });
