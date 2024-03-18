import React from "react"
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";


const Auth = (props) => {
  const location = useLocation()
  console.log(location)
  const isLogin = location.pathname === LOGIN_ROUTE

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
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
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
              {isLogin ? <Button variant="primary">Войти</Button> : <Button variant="primary">Зарегистрироваться</Button>}
            </div>
          </div>
        </Form>
      </Card>
    </Container>
  )
};

export default Auth;
