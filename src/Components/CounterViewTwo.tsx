import React from 'react';
import { observer } from "mobx-react"
import StoreContext, { StoreConsumer } from '../Store/StoreContext';


// 3rd way to consume the context
class CountViewTwo extends React.Component{
    render() {
        return (
        <StoreConsumer>
            {value => {
                return (
                    <div>
                        CountViewTwo <hr/>
                        <div>
                            {value.count}
                        </div>
                        <button onClick={() => value.increase()}>Increase</button>
                        <button onClick={() => value.decrease()}>Decrease</button>
                    </div>
                )
            }}
        </StoreConsumer>
        )
    }
}

export default observer(CountViewTwo);