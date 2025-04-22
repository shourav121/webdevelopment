const express=require("express");
const app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`app is listining on port${port}`);
});


app.get("/",(req,res)=>{
    res.send("you connected with root part")
});

app.get("/apple",(req,res)=>{
    res.send("you connected with apple")
});

app.get("/orange",(req,res)=>{
    res.send("you connected with orang")
});

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let htmlCode=`<h1>welcome to the user @${username}${id}.</h1>`
    res.send(htmlCode);
});

app.get("/search",(req,res)=>{
    let{q}=req.query;
    let html=`<h1>search query is: ${q}</h1>`
    if(!q){
        res.send("<h1>nothing searched</h1>")
    };
    res.send(html);
})

// app.get("*" ,(req, res)=> {
//     res.send("you");
// });

app.post("/" ,(req, res)=> {
    res.send("you post");
});


// app.use((req,res)=>{
//     console.log("request recived");
//     let code=("<h1>hello</h1><ul><li>apple</li><li>mango</li></ul>")
//     res.send(code)
// });