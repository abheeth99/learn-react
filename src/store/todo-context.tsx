import React, { useState } from 'react';
import TodoItem from '../Model/todoItem';

type TodosConextObj = {
    todos: any; // Todo: remove any and put : TodoItem[]
    addTodo: (todoText: string) => void;
    completeTodo: (id: any) => void;
    removeTodo: (id: string) => void;
    updateTodo: (newText: string, id: string) => void;
}

export const TodosContext = React.createContext<TodosConextObj>({
    todos: [],
    addTodo: (todoText: string) => { },
    completeTodo: (id: any) => { },
    removeTodo: (id: string) => { },
    updateTodo: (newText: string, id: string) => { },
});

const TodosContextProvider: React.FC = (props) => {

    //Crud Operations
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodoHandler = (todoText: string) => {
        debugger;
        const newTodo = new TodoItem(todoText);

        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
        // setTodos((prevTodos)=>{
        //     return prevTodos.concat(newTodo);
        // });
    }
    const completeTodoHandler = (id: any) => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        setTodos(updateTodos);
    }

    const removeTodoHandler = (id: string) => {
        // const removeArr = [...todos].filter(todo=> todo.id !== id);
        // setTodos(removeArr);

        const removedTodos = todos.filter(todo => todo.id !== id);
        setTodos(removedTodos);
    }

    const updateTodoHandler = (newText: string, id: string) => {
        debugger;
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.text = newText;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const contextValue: TodosConextObj = {
        todos: todos,
        addTodo: addTodoHandler,
        completeTodo: completeTodoHandler,
        removeTodo: removeTodoHandler,
        updateTodo: updateTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;