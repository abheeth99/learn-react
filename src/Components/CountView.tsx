import React, { useState } from 'react';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { makeAutoObservable, makeObservable, reaction } from "mobx"
import { observer } from "mobx-react"
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import { counterStore, CounterStoreImpl } from '../Store/counterStore';

interface CounterViewProps {
    counterStore: CounterStoreImpl
  }

class CountView extends React.Component<CounterViewProps>{
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    {counterStore.count}
                </div>
                <button onClick={() => counterStore.increase()}>Increase</button>
                <button onClick={() => counterStore.decrease()}>Decrease</button>
            </div>
        )
    }
}

export default observer(CountView);
