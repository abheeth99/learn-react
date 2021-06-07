import React, { useState } from 'react'
import TodoForm from './TodoForm'

const Todo: React.FC<{ todos : any, completeTodo: (id:string)=>void, removeTodo: (id: string)=>void, updateTodo: (id: any, value: any)=>void}>=(props) =>{

    const [edit, setEdit] = useState({id: null, value: ''});

    const submitUpdate = (value: any)=>{
        props.updateTodo(edit.id, value)
        setEdit({id: null, value: ''})
    }

    if(edit.id){
        return <TodoForm onSubmit={submitUpdate}/>
    }

    return props.todos.map((todo : any, index: number)=>(
        <div key={index}>
            {todo.isCompleted ? 'Completed' : 'Incomplete'}
            <div key={todo.id}>
                {todo.text}
            </div>
            <button onClick={()=>{props.completeTodo(todo.id)}}>
                Complete!
            </button>
            <button onClick={()=>{props.removeTodo(todo.id)}}>
                Remove!
            </button>
            <button onClick={()=>{setEdit({id: todo.id, value:todo.text})}}>
                Edit!
            </button>
        </div>
    ))
}

export default Todo
