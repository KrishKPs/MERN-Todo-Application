import { useState } from 'react'

import './App.css'
import { Createtodo } from './Components/Createtodo'
import { Todos } from './Components/Todos'



function App() {
  const [todos,settodos] = useState([])

  return (
    <>
    <div id='main'> 
     <h1>To-Do List Maker</h1>
     <Createtodo/>
     {console.log("here")}
     <Todos todos={todos}></Todos>
     </div>

    </>
  )
}

export default App
