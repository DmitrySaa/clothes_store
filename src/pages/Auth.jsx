import React from "react"
import { Card, Container, Form } from "react-bootstrap";


const Auth = (props) => {
  return (
    <Container 
    className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight-250}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-fles flex-column">
            <Form.Control
              className="mt-3"
              placeholder="Введите email..."
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите пароль..."
            />
        </Form>
      </Card>
    </Container>
  )
};

export default Auth;
