import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utilis/const.js";
import {useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi.js";
import {Context} from "../main.jsx";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user} = useContext(Context)

  const click = async ()=>{
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password);
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <Container
      className={"d-flex align-items-center justify-content-center"}
      style={{height: (window.innerHeight - 54)+'px' }}
    >
      <Card className={"p-5"} style={{width: '630px'}}>
        <h2 className={"m-auto"}>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш password..."
            value={password}
            type={"password"}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Row className="d-flex flex-row align-items-center justify-content-between mt-3 ps-3 pe-3">
            { isLogin ?
              <div className="p-0 d-inline-block w-auto">
              Нет аккаунта? <NavLink style={{display: "contents", color: "blue"}}
                                     href={REGISTRATION_ROUTE}>Зарегистрируйтеся!</NavLink>
            </div>
              :
            <div className="p-0 d-inline-block w-auto">
              Есть аккаунт? <NavLink style={{display: "contents", color: "blue"}} href={LOGIN_ROUTE}>Войти!</NavLink>
            </div>
            }
            <Button
              onClick={()=>click()}
              className="align-self-end d-inline-block w-auto"
              variant={"outline-success"}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;