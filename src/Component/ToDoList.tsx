import React from 'react'
import{ITask} from '../Interface';

interface Props{
    task:ITask
}

const ToDoList=({task}:Props)=> {
    return (
        <div>
            {task.taskName} {task.deadline}
        </div>
    )
}

export default ToDoList;
