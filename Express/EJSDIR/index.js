const express=require("express");
const app=express();
const path = require("path")

const port=8080;

app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/rolldice",(req,res)=>{
    let value=Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{value})
})




app.get("/ig/:username",(req,res)=>{
    let {username}=req.params

    const instadata=require("./data.json");

    const data=instadata[username];
    
    console.log(data)
    res.render("instagram.ejs",{data})
})



app.listen(port,()=>{
    console.log(`listining on port ${port}`)
});         