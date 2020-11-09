const express = require('express'),
router = express(),
db = require('../models')

// routes
// index route
router.get('/', async(req, res) => {
   try{
       const todos = await db.Todo.find(); 
       res.json(todos)
   }catch(error){
       res.send(error)
   }
})
// post route
router.post('/', async(req, res) => {
    try{
        const todo = await db.Todo.create(req.body);
        res.status(201).json(todo);
    }catch(error){
        console.log(error)
    }
})
// export todo routes
module.exports = router;