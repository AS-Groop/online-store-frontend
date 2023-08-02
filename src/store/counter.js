import {makeAutoObservable} from "mobx";

export default class Counter{
  constructor() {
    this.counter = 0
    makeAutoObservable(this)
  }

  get count() {
    return this.counter
  }

  increment(){
    this.counter++
  }

  decrement(){
    this.counter--
  }
}