const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:RoilIqEO8se6bMdy@cluster0.l5gjp41.mongodb.net/todos')
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}