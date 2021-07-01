import {
  makeObservable,
  observable,
  computed,
  action,
  // autorun,
} from 'mobx'

export default class AppState {
  count = 0

  name = 'Cici'

  constructor() {
    makeObservable(this, {
      count: observable,
      name: observable,
      msg: computed,
      add: action,
      changeName: action,
    });
    // autorun(() => console.log(this.msg)); //eslint-disable-line
  }

  get msg() {
    return `${this.name} say count is ${this.count}`
  }

  changeName(name) {
    this.name = name
  }

  add() {
    this.count += 1
  }
}
