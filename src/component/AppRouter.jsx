import React, {useContext} from 'react';
import {authRouters, publicRouters} from "../routers.js";
import {Route, Routes, Navigate} from "react-router-dom";
import {Context} from "../main.jsx";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
  const {user} = useContext(Context)
  return (
    <Routes>
      {user.isAuth && authRouters.map(({path, Component}) => {
        return <Route key={path} path={path}  element={<Component/>} exact/>
      })}
      {publicRouters.map(({path, Component}) => {
        return <Route key={path} path={path} element={<Component />} exact/>
      })}
      <Route path="*" element={<Navigate to="/" replace />}
      />
    </Routes>
  );
});

export default AppRouter;