

   // Basic Syntax 
const express = require ("express") ; 
const app = express();  
const port = 3048
app.use(express.json())

const cors = require ("cors")

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    credentials: true
})); 

const {createtodo , updatetodo} = require ("./types")
const {todos, todo} = require ("./db")


// Getting all the Todos 
app.get("/todos" ,  async function (req,res){

    const alltodos = await todos.find({}); 
    res.json({
        alltodos
    }); 
  
})

// Creating a Todo 
app.post("/todo" , async function(req,res){

   const maketodo = req.body; 
   const stricttodo = createtodo.safeParse(maketodo); 
// If the Zod Validation is Incorect 
   if(!stricttodo.success){
    res.status(411).json({
        msg: "Inputs are Wrong"
    })
    return ; 
   }
// POst the input to data Base 
 await todos.create({

    title : maketodo.title, 
    description : maketodo.description,
    completed : false
 })

 res.json ({
    msg : "Todo Created"
 })
})



app.put("/completed" , async function(req,res){

    const update = req.body
    const stricttodo = updatetodo.safeParse(update); 

    if(!stricttodo.success){

        res.status(411).json({
            msg: "Inputs are Wrong"
        })
return ; 
    }

    // Edit the todo 
    await todo.update ({
        _id : req.body} ,
        {
  completed : true 
    }) 

    res.json({
        msg: "Todo Updated"
    })
})




app.listen(port,  ()=> {
    console.log("Server Started")
}); 