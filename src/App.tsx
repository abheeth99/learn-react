import React from 'react';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { makeAutoObservable, makeObservable } from "mobx"
import { observer } from "mobx-react"
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';

// type MyState = {
//   count: number;

// }; 
// class App extends React.Component{
  
//   increment = (no: number) => {
//     this.setState((state : MyState) => ({
//       count: state.count + no,
//     }));
//   };

//   decrement = (no: number) => {
//     this.setState((state : MyState) => ({
//       count: state.count - no,
//     }));
//   };

//   state: MyState = {
//     count: 0,
//   };
//   render() {
//     return (
//       <div> 
//         <div>
//           {this.state.count}
//         </div>
//         <button onClick={() => this.increment(1)}>Increase</button>
//         <button onClick={() => this.decrement(1)}>Decrease</button>
//       </div>
//     );
//   }
// }

class Counter {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  increase() {
      this.count += 1
  }

  decrease() {
      this.count -= 1
  }
}

const newCounter = new Counter()

const CounterView = observer(({ counter } : any) => (
  <div> 
    <div>
      {counter.count}
    </div>
    <button onClick={() => counter.increase()}>Increase</button>
    <button onClick={() => counter.decrease()}>Decrease</button>
  </div>
))

class App extends React.Component{

  render() {
    return (
      <div> 
        <CounterView counter={newCounter}></CounterView>
      </div>
    );
  }
}

export default App;
