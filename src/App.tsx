import React from 'react';
import './App.css';
import { counterStore } from './Store/counterStore';
import CountView from './Components/CountView';

class App extends React.Component{

  render() {
    return (
      <>
      <CountView counterStore ={counterStore}/>
      </>
    );
  }
}


export default App;
