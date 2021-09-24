import React,{ChangeEvent, FC,useState} from 'react';
import{ITask} from './Interface';
import './App.css';
import ToDoList from './Component/ToDoList';

const App:FC=()=> {

 const [task,setTask]=useState<string>(""); 
 const [days,setDays]=useState<number>(0); 
 const [todo,setTodo]=useState<ITask[]>([]); 

const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
  if(event.target.name==="task"){
    setTask(event.target.value)
    console.log(task);
  }else{ 
    setDays(Number(event.target.value))
    console.log(days);}
}

const addTask=():void=>{
  const newTask={taskName:task,deadline:days}
  setTodo([...todo,newTask]);
  setTask("");
  setDays(0);
  console.log(todo);
  

}

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className="header">
      <input type="text" placeholder="Task" name="task" value={task} onChange={handleChange}></input>
      <input type="text" placeholder="Deadline(Days)"name="days" value={days} onChange={handleChange}></input>
      <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
{todo.map((task:ITask,key:number)=>{
return <ToDoList key={key} task={task}/>})}
      </div>
      
    </div>
  );
}

export default App;
