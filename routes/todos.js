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
// export todo routes
module.exports = router;