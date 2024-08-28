// how to use or make ejs 
//what is ejs so basically it is just a powerfull html use for dynamic this that html cannot do


//step 1
//install ejs by npm i ejs

//step  2 
//config by using app.set("view engin","ejs")

// step 3
//make folder name "views"

// step 4
//make ejs file init

//step 5 use renfer int he place of send

const express = require('express');
const app =express();

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index",{age:12});
})

app.get("/contact",(req,res)=>{
    res.render("contact",{name:"harsh"});
})

app.listen(3000,()=>{
    console.log("server is runing")
})
