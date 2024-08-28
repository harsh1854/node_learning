//express router
const express = require('express');
const router = express();

// post router to add a person

router.post('/person',async(req,res)=>{
    try{
        const data = req.body//assuming the request body contains the person data
        //create a new person doc using mongoose model
        const newPerson = new Person(data);

        //save he new person to the database
        const response = await newPerson.save();
        console.log('data saves');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        // res.status(500).json(err: "internet nor working")
    }
})