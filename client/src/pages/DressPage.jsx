import React, { useEffect, useState } from "react"
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from '../assets/star.png'
import { useParams } from "react-router-dom";
import { fetchOneClothe } from "../http/clothesAPI";

const DressPage = (props) => {
  //const clothe = { id: 1, name: 'Футболка белая', price: 5990, raiting: 5, img: 'https://static.sobaka.ru/images/image/00/96/45/77/_normal.jpg?v=1523608182' }
  // const description = [
  //   {id:1, title: 'Состав, %', description: 'Хлопок - 100%'},
  //   {id:2, title: 'Длина (см)', description: '63'},
  //   {id:3, title: 'Сезон', description: 'лето'},
  //   {id:4, title: 'Цвет', description: 'розовый'},
  //   {id:5, title: 'Страна производитель', description: 'Индия'},
  //   {id:6, title: 'Артикул', description: 'DTSP1'},
  // ]
  const [clothe, setClothe] = useState({info: []})
  const {id} = useParams()
  useEffect(() => {
    fetchOneClothe(id).then(data => setClothe(data))
  }, [])

  return (
    <Container className="mt-3">
      <div className="d-flex">
        <Col md={5}>
          <Image width={400} height={400} src={'http://localhost:7000/' + clothe.img} />
        </Col>
        <Col md={5.5}>
          <h2>О товаре: </h2>
          <table width={600}>
            {clothe.info.map((info, index) =>
              <tr key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent'}}>
                <th style={{ textAlign: "left", fontSize: 24 }} className="text-secondary">{info.title}</th>
                <th className="text-secondary">-</th>
                <th style={{ textAlign: "right", textDecorationStyle: "unset" }}>{info.description}</th>
            </tr>
            )}
          </table>
        </Col>
      </div>
      <Col md={3} className="mt-2">
        <div className="d-flex align-items-center justify-content-between">
          <h2>{clothe.name}</h2>
          <div className="d-flex align-items-center justify-content-center" style={{ fontSize: 20 }}>
            <div style={{marginRight: 5}}>
              {clothe.raiting}
            </div>
            {/* <Image src={star} /> */}
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex align-items-center">
          <h3 style={{marginRight: 20}}>{clothe.price} руб.</h3>
          <Button variant={"outline-dark"} style={{marginRight: 10}}>Добавить в корзину</Button>
          <div style={{ textAlign: "right" }}>
            <Button variant={"outline-dark"}>&#128157;</Button>
          </div>
        </div>

      </Col>

    </Container>
  )
};

export default DressPage;
