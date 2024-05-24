import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Card } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
const { clothes } = useContext(Context)
  return (
    <div className="BrandsCol">
        {clothes.brands.map(brand => 
      <Card
        style={{cursor: 'pointer'}}
        key={brand.id}
        className="p-3 m-1"
        onClick={() => clothes.setSelectedBrand(brand)}
        border = {brand.id === clothes.selectedBrand.id ? 'danger' : 'light'}
      >
        {brand.name}
      </Card>
    )}
    </div>
    // <Row className="d-flex">
    //   {clothes.brands.map(brand => 
    //   <Card
    //     key={brand.id}
    //     className="p-3"
    //   >
    //     {brand.name}
    //   </Card>
    // )}
    // </Row>
  )
});

export default BrandBar;
