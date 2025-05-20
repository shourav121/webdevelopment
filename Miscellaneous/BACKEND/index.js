const express=require("express");
const app=express();
const port=8080;


app.get("/register",(req,res)=>{
    
    let{user, password}= req.query;
    
    res.send(`standard get response.welcome  ${user} ${password}!`);
});

app.post("/register",(req,res)=>{
    res.send("standard post response")
    console.log(req.body)
});

app.listen(port,()=>{
    console.log(`listining on port ${port}`)
});