const express=require("express");
const app=express()

const port=8080;



app.get("/",(req,res)=>{
    res.send("this is hhome")
})

app.listen(port,()=>{
    console.log(`listining on port ${port}`)
});