const express = require('express')
const app = express()
const bodyParse = require('body-Parse');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dal',function(req,res){
    res.send("yelo maharaj");
})

app.get('/ram',(req,res)=>{
    res.send('jai')
})

app.get('/idli', function(req,res){
    var cuidl = {
        name:'rava',
        size:'big',
        is_good:'bohot'
    }

    res.send(cuidl)
})

app.listen(3000, ()=>{
    console.log('listning to the port 3000')
})