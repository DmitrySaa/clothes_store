import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ClothesList from "../components/ClothesList";

const Shop = (props) => {
  return (
    <Container className="d-grid">
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <ClothesList/>
        </Col>
      </Row>
    </Container>
  )
};

export default Shop;
