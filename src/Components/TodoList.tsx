import React, { useState } from 'react'
import TodoItem from '../Model/todoItem';
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todoText: string) => {
        const newTodo = new TodoItem(todoText);

        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);

        // setTodos((prevTodos)=>{
        //     return prevTodos.concat(newTodo);
        // });

    }
    const completeTodo = (id: any) =>{
        let updateTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        setTodos(updateTodos);
    }

    const removeTodo = (id: string) => {
        // const removeArr = [...todos].filter(todo=> todo.id !== id);
        // setTodos(removeArr);

        const removedTodos = todos.filter(todo=>todo.id !== id);
        setTodos(removedTodos);
    }

    const updateTodo = (id: string, newText:string)=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.text = newText;
            }
            return todo;
        })
        setTodos(updatedTodos);
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
