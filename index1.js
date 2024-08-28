const express = require('express')
const app = express()
// const ls = require('./ls')


// coustum middleware
//this is speific logger middleware
// app.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname,new Date(), req.get('User-Agent'))
//     next()
// })

 


//auth
const auth =((req,res,next)=>{
    console.log(req.query)
    if(req.query.password==123){
    
    
        next()
    

    }else{
            res.sendStatus(401)
    }
})

//their is a way to use auth on whole

app.use(auth);//this is how auth use in whole

app.get('/',(req,res)=>{
    res.send('happ')
})

app.listen(3030,()=>{
    console.log('server is started')
})


// console.log(ls.a)
// console.log(ls.add(4,5))

//chl na bhai tujhse naa ho payegaa