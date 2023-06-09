import React,{useState} from 'react'

const Todo = (props) => {
  const [newTodo,setNewTodo] = useState("")

  const handleNewTodo = (e) =>{
    if(newTodo.length > 0){
      props.addTodo({"task":newTodo, done:false});
      setNewTodo("");
    }
  }
  return (
    <div>
        <h1>Todo List</h1>
        <input type="text" onChange={(e)=>setNewTodo(e.target.value)} value={newTodo}/>
        <br />
        <button onClick={handleNewTodo}>Add Task</button>
    </div>
  )
}

export default Todo