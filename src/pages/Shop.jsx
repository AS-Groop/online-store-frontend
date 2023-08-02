import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../component/TypeBar.jsx";
import BrandBar from "../component/BrandBar.jsx";
import DevisesList from "../component/DevisesList.jsx";
import {observer} from "mobx-react-lite";
import {Context} from "../main.jsx";
import {fetchBrands, fetchDevises, fetchTypes} from "../http/deviseApi.js";
import Pages from "../component/Pages.jsx";

const Shop = observer(() => {
  const {devise} = useContext(Context)
  useEffect(()=>{
    fetchTypes().then(data=>devise.setTypes(data))
    fetchBrands().then(data=>devise.setBrands(data))
    fetchDevises(null,null, devise.page,2).then(data=> {
      devise.setDevise(data.rows)
      devise.setTotalCount(data.count)
    })
  }, [])
  useEffect(()=>{
    fetchDevises(devise.selectedType.id,devise.selectedBrand.id, devise.page,devise.limit).then(data=> {
      devise.setDevise(data.rows)
      devise.setTotalCount(data.count)
    })
  }, [devise.page, devise.selectedType, devise.selectedBrand])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DevisesList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;