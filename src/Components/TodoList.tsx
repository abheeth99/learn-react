import React, { useState } from 'react'
import TodoItem from '../Model/todoItem';
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todoText: string) => {
        const newTodo = new TodoItem(todoText);

        const newTodoSpread = [newTodo, ...todos];
        setTodos(newTodoSpread);

        // setTodos((prevTodos)=>{
        //     return prevTodos.concat(newTodo);
        // });

    }
    const completeTodo = (id: any) =>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const removeTodo = (id: string) => {
        const removeArr = [...todos].filter(todo=> todo.id !== id);
        setTodos(removeArr);
    }

    const updateTodo = (id: string, newText:string)=>{
        todos.map(todo=>(todo.id === id)? todo.text = newText: todo);
        setTodos(todos);


    }

    return (
        <div>
            <h1>Plan for today!</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo = {removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList
