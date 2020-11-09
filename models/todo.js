const mongoose = require('mongoose');

// this is the todoschema
const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'Name cannot be blank'
    },
    completed:{
        type: Boolean,
        default: false
    },
    created_date:{
        type:Date,
        default: Date.now
    }
}) 
// export module
module.exports = mongoose.model('Todo', todoSchema);