import React, { useState } from 'react';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { makeAutoObservable, makeObservable, reaction } from "mobx"
import { observer } from "mobx-react"
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import { counterStore, CounterStoreImpl } from './counterStore';

interface CounterViewProps {
  counterStore: CounterStoreImpl
}

export const CounterView: React.FC<CounterViewProps> = observer(({counterStore}) =>{

  return(
    <div> 
    <div>
      {counterStore.count}
    </div>
    <button onClick={() => counterStore.increase()}>Increase</button>
    <button onClick={() => counterStore.decrease()}>Decrease</button>
  </div>
  )
});

class App extends React.Component{

  render() {
    return (
      <CounterView counterStore ={counterStore}>
      </CounterView>
    );
  }
}

export default App;
