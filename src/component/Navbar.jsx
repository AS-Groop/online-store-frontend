import React, {useContext} from 'react';
import {Container, Nav, Navbar, Button, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE,  SHOP_ROUTE} from "../../utilis/const.js";
import {Context} from "../main.jsx";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Купи девайс</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant={"outline-light"} onClick={()=>navigate(ADMIN_ROUTE)}>Админ панель</Button>
            {/*<Button className="ms-2" variant={"outline-light"} onClick={()=>navigate(REGISTRATION_ROUTE)}>Авторизация</Button>*/}
            <Button className="ms-2" variant={"outline-light"} onClick={() => logOut()}>Выйти</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button className="ms-2" variant={"outline-light"} onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;