import './App.css';
import Todo from './Components/TodoForm';
import TodoDisplay from './Components/TodoDisplay';
import React,{useState} from 'react';

function App() {
  const [todoList,setTodoList] = useState([])

  const handleAdd = (taskObj) =>{
    setTodoList([...todoList,taskObj]);
  }

  const updateTask =(index) =>{
    const filtered = todoList.filter((task,i)=>{
        if(i===index){
            task.done = !task.done;
        }
        return task;
    })
    setTodoList(filtered)
}

  const deleteTask = (index) =>{
    const filtered = todoList.filter((task,i)=>i!=index)
    setTodoList(filtered)
  }

  return (
    <div className="App">
      <div>
      <Todo addTodo={handleAdd}/>
      <hr/>
      <TodoDisplay allTasks={todoList} handleUpdate={updateTask} handleDelete={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
