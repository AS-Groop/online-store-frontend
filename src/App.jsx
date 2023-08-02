import React, {useContext, useEffect, useState} from "react"
import AppRouter from "./component/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/Navbar.jsx";
import {observer} from "mobx-react-lite";
import {Context} from "./main.jsx";
import {check} from "./http/userApi.js";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    check().then(data=>{
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(()=>{setLoading(false)})
  },[])

  if (loading) {
    return (
      <Spinner animation={"grow"} />
    )
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  )
});

export default App
