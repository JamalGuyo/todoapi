const mongoose = require('mongoose');

// create db
mongoose.connect('mongodb://localhost:27017/todo-api',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log(`connection to db successful`))
.catch(er => console.log(er))

mongoose.set('debug', true);

// models 
module.exports.Todo = require('./todo');