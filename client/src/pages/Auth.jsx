import React, { useContext, useState } from "react"
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";


const Auth = observer((props) => {
  const navigate = useNavigate()
  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    }
    catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 250 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <div className="d-flex m-3 justify-content-between">
            {isLogin ?
              <div className="d-flex">
                Нет аккаунта? <Link className="ms-3" to={REGISTRATION_ROUTE}>Зарегистрируйся</Link>
              </div>
              :
              <div className="d-flex">
                Есть аккаунт? <Link className="ms-3" to={LOGIN_ROUTE}>Войдите</Link>
              </div>
            }
            <div>
              {isLogin ? <Button variant="primary" onClick={click}>Войти</Button> : <Button variant="primary" onClick={click}>Зарегистрироваться</Button>}
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  )
});

export default Auth;
