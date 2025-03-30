
const mongoose = require("mongoose");

//  password: emBKAwZKOGxygQ2P
 mongoose.connect("mongodb+srv://harshsince2003:emBKAwZKOGxygQ2P@todocohort.ib0g8ok.mongodb.net/?retryWrites=true&w=majority&appName=todoCohort")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}