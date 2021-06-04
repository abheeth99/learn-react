import { action, observable } from 'mobx';
import { makeAutoObservable, makeObservable, reaction } from "mobx"

export class CounterStore {
    constructor() {
      makeObservable(this)
    }
    
    @observable count: number = 0;
  
    @action
    increase = ()=>{
      this.count += 1;
    };

    @action
    decrease = ()=>{
      this.count -= 1
    };
  }

// export const counterStore = new CounterStore();