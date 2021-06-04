import React from 'react';
import './App.css';
// import { counterStore } from './Store/counterStore';
import CountView from './Components/CountViewOne';
import CountViewTwo from './Components/CounterViewTwo';
import { StoreConsumer, StoreProvider } from './Store/StoreContext';

class App extends React.Component{

  render() {
    return (
      <>
      <StoreProvider>
        <CountView/>
        <CountViewTwo/>
        {/* <StoreConsumer>
          {
            value=>{return(<h1>{value.count}</h1>)}
          }
        </StoreConsumer> */}
      </StoreProvider>
      </>
    );
  }
}


export default App;
