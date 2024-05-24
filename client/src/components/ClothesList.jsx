import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import ClothesItem from "./ClothesItem";
import { Context } from "..";
import { Row } from "react-bootstrap";

const ClothesList = observer(() => {
  const { clothes } = useContext(Context)
  return (
    <Row>
      {clothes.clothes.map(clothe => 
        <ClothesItem key={clothe.id} clothe={clothe}/>
      )}
    </Row>
  )
});

export default ClothesList;
