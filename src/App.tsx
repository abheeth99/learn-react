import React from 'react';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react-lite';

type MyState = {
  count: number;

}; 
class App extends React.Component{
  
  increment = (no: number) => {
    this.setState((state : MyState) => ({
      count: state.count + no,
    }));
  };

  decrement = (no: number) => {
    this.setState((state : MyState) => ({
      count: state.count - no,
    }));
  };

  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div> 
        <div>
          {this.state.count}
        </div>
        <button onClick={() => this.increment(1)}>Increase</button>
        <button onClick={() => this.decrement(1)}>Decrease</button>
      </div>
    );
  }
}

export default App;
