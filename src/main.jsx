import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {UserStore} from "./store/userStore.js";
import {DeviseStore} from "./store/deviseStore.js";
import Counter from "./store/counter.js";

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    user: new UserStore(),
    devise: new DeviseStore(),
    counter: new Counter()
  }}>
    <App/>
  </Context.Provider>
);
