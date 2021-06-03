import React, { useState } from 'react';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { makeAutoObservable, makeObservable, reaction } from "mobx"
import { observer } from "mobx-react"
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import { counterStore, CounterStoreImpl } from './Store/counterStore';
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
