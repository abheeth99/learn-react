import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import UseEffectTest from './Components/UseEffectTest';
import TodosContextProvider from './store/todo-context';

function App() {
  return (
      <main>
        <TodosContextProvider>
          <TodoList/>
          {/* <UseEffectTest/> */}
        </TodosContextProvider>
      </main> 
  );
}

export default App;
