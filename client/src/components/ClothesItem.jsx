import React from "react"
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom';
import {DRESS_ROUTE} from "../utils/consts"

const ClothesItem = ({clothe}) => {
  const navigate = useNavigate();
  return (
      <Col md={3} className="mt-3" onClick={() => navigate(DRESS_ROUTE + '/' + clothe.id)}>
        <Card style={{width: 200, cursor: 'pointer'}} border={"light"}>
            <Image width={200} height={200} src={'http://localhost:7000/' + clothe.img}/>
            <div className="d-flex justify-content-between align-items-center mt-1">
                <div className="d-flex align-items-center">
                    <div><strong>{clothe.price} руб.</strong></div>
                </div>
            </div>
            <div>
              {clothe.name}
            </div>
        </Card>
      </Col>
  )
};

export default ClothesItem;
