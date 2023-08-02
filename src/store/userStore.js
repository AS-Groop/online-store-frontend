import {makeAutoObservable} from "mobx";

export class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    console.log(bool)
    this._isAuth = bool
  }
  setUser(user) {
    this._isAuth = user
  }

  get isAuth(){
    return this._isAuth
  }
  get user(){
    return this._user
  }
}