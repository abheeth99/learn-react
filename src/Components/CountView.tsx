import React from 'react';
import { observer } from "mobx-react"
import { CounterStoreImpl } from '../Store/counterStore';

interface CounterViewProps {
    counterStore: CounterStoreImpl
}
class CountView extends React.Component<CounterViewProps>{
    constructor(props: CounterViewProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.counterStore.count}
                </div>
                <button onClick={() => this.props.counterStore.increase()}>Increase</button>
                <button onClick={() => this.props.counterStore.decrease()}>Decrease</button>
            </div>
        )
    }
}

export default observer(CountView);
