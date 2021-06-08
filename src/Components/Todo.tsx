import React, { useContext, useState } from 'react'
import { TodosContext } from '../store/todo-context';
import TodoForm from './TodoForm'

const Todo: React.FC=(props) =>{

    const todosContext = useContext(TodosContext);

    const [edit, setEdit] = useState({id: ''});

    const submitUpdate = (value: any)=>{
        todosContext.updateTodo(value, edit.id)
        setEdit({id: ''})
    }

    if(edit.id){
        return <TodoForm onSubmit={submitUpdate}/>
    }

    return todosContext.todos.map((todo : any, index: number)=>(
        <div key={index}>
            {todo.isCompleted ? '✅' : '🔴'}
            <div key={todo.id}>
                {todo.text}
            </div>
            <button onClick={()=>{todosContext.completeTodo(todo.id)}}>
                Complete!
            </button>
            <button onClick={()=>{todosContext.removeTodo(todo.id)}}>
                Remove!
            </button>
            <button onClick={()=>{setEdit({id: todo.id})}}>
                Edit!
            </button>
            <hr/>
        </div>
    ));
}

export default Todo
