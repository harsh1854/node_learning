const express= require('express');

const app = express();

const PORT = 8080;

app.get('/test',(req,res)=>{
    res.status(200).send('hello')
})

app.listen(PORT,()=>{
    console.log("server is running")
})