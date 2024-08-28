// Static file are Image,styleSheet,frontend js
// setup

// steps
// create a folder called public 
// create three folders inside it, images,stylesheet,javascripts
//config the express static
//understand the path 


const express = require('express');
const app =express();

app.set("view engine","ejs")
app.use(express.static('./public'))

app.get("/",(req,res)=>{
    res.render("index",{age:12});
})

app.get("/contact",(req,res)=>{
    res.render("contact",{name:"harsh"});
})

app.listen(3000,()=>{
    console.log("server is runing")
})
