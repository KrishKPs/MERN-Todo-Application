const mongoose = require("mongoose"); 
const { string } = require("zod");

mongoose.connect ("mongodb+srv://krishpatel632:krish123@cluster0.bnp6rj9.mongodb.net/TODOS?retryWrites=true&w=majority")
.then(()=> console.log("Connected"))
.catch((error)=> console.log("Error",error)) 

const todoschema = mongoose.Schema ({

    title : String, 
    description : String, 
    completed : Boolean
})

const todos = mongoose.model("Todos" , todoschema)

module.exports = {
    todos : todos
}