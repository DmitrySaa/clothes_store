import React, { useContext, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ClothesList from "../components/ClothesList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchClothes, fetchTypes } from "../http/clothesAPI";
import Pages from "../components/Pages";

const Shop = observer((props) => {
  const {clothes} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => clothes.setTypes(data))
    fetchBrands().then(data => clothes.setBrands(data))
    fetchClothes(null, null, 1, 8).then(data => {
      clothes.setClothes(data.rows)
      clothes.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchClothes(clothes.selectedType.id, clothes.selectedBrand.id, clothes.page, 4).then(data => {
      clothes.setClothes(data.rows)
      clothes.setTotalCount(data.count)
    })
  }, [clothes.page, clothes.selectedType, clothes.selectedBrand])

  return (
    <Container className="d-grid">
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <ClothesList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  )
});

export default Shop;
