import React from 'react';
import { CounterStore } from './counterStore';

const StoreContext = React.createContext(new CounterStore());
export const StoreConsumer = StoreContext.Consumer;

export class StoreProvider extends React.Component{
    
    render() {
        return (
           <StoreContext.Provider value={new CounterStore()}>
               {this.props.children}
            </StoreContext.Provider>
        )
    }
}

export default StoreContext;