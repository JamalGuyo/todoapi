const express = require('express'),
router = express(),
db = require('../models'),
helper = require('../helpers/todos');

// routes
// index and post routes
router.route('/')
.get(helper.getTodos)
.post(helper.createTodo)
// show, edit and delete routes
router.route('/:todoId')
.get(helper.getTodo)
.put(helper.updateTodo)
.delete(helper.deleteTodo)
// export todo routes
module.exports = router;