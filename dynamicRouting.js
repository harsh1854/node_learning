const express = require('express')
const app=express();

app.get('/',function(req,res){
    res.send('hello')
})

// now for the dynamic Router

app.get('/profile/harsh',(req,res)=>{
    res.send('hello harsh');//normal route now make it dynamic
})

app.get('/profile/:username',(req,res)=>{//by usning : this we can make dynamic & : after this anything we type is called params
    res.send(`hello from ${req.params.username}`)//and here when we use : this our responce goes to the server so thats why we use req.params.username inside `here message we want to display and then use ${here command like req.params.username}`
})

app.listen(3000,()=>{
    console.log('server is running')
})