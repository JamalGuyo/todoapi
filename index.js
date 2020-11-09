const express = require('express'),
app = express();

// import routes
const todoRoutes = require('./routes/todos');

// routes
app.get('/', (req, res) => {
    res.send('index route')
})
// 
app.use('/api/todos', todoRoutes);
// 
app.get('*', (req, res) => {
    res.send('404 Page Not Found')
})
// create server
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))