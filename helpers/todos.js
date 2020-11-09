const db = require('../models')

// route logics
exports.getTodos = async(req, res) => {
   try{
       const todos = await db.Todo.find(); 
       res.json(todos)
   }catch(error){
       res.send(error)
   }
}

exports.createTodo = async(req, res) => {
    try{
        const todo = await db.Todo.create(req.body);
        res.status(201).json(todo);
    }catch(error){
        console.log(error)
    }
}

exports.getTodo = async(req, res)=>{
    const {todoId} = req.params;
    try{
        const foundTodo = await db.Todo.findById(todoId);
        res.json(foundTodo);
    }catch(error){
        res.status(404).send('Todo Not Found, double check the id :)');
    }
}

exports.updateTodo = async(req, res) => {
    try{
        const todo = await db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true});
        res.json(todo);
    }catch(error){
        res.send(error)
    }
}

exports.deleteTodo = async(req, res) => {
    try{
        await db.Todo.findByIdAndDelete(req.params.todoId);
        res.json({message:'deleted successfully'})
    }catch(error){
        res.send(error)
    }
}