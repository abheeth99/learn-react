import React from 'react';
import { observer } from "mobx-react"
import StoreContext from '../Store/StoreContext';

// interface CounterViewProps {
//     counterStore: CounterStoreImpl
// }

class CountViewOne extends React.Component{
    // 2nd way to consume the context
    static contextType = StoreContext;
    render() {
        debugger;
        let {count, increase, decrease} = this.context;
        return (
            <div>
                CountViewTwo <hr/>
                <div>
                    {count}
                </div>
                <button onClick={() => increase()}>Increase</button>
                <button onClick={() => decrease()}>Decrease</button>
            </div>
        )
    }
}

// 1st way to consume the context
// CountViewOne.contextType = StoreContext;

export default observer(CountViewOne);
