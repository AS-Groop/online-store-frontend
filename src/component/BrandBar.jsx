import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, Row} from "react-bootstrap";
import {Context} from "../main.jsx";

const BrandBar = observer(() => {
  const {devise} = useContext(Context)
  return (
    <Row className="d-flex ">
      {devise.brands.map(brand =>
        <Card
          style={{cursor:"pointer"}}
          border={brand.id === devise.selectedBrand.id ? "danger" : "light"}
          className="d-inline-block w-auto me-2"
          key={brand.id}
          onClick={()=>devise.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      )}
    </Row>
  );
});

export default BrandBar;