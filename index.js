const express = require('express')
const app= express()
const port = 3000

app.get("getUser",(req,res)=>{
    res.send('hello')
})

app.listen(port)