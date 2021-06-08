import React, { useContext, useState } from 'react'
import TodoItem from '../Model/todoItem';
import TodoForm from './TodoForm'
import Todo from './Todo'
import { TodosContext } from '../store/todo-context';

function TodoList() {
    
    const todosContext = useContext(TodosContext);

    return (
        <div>
            <h1>Plan for today!</h1>
            <TodoForm onSubmit={todosContext.addTodo}/>
            <Todo />
        </div>
    )
}

export default TodoList
