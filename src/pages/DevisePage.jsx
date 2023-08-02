import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Image, Button, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneDevise} from "../http/deviseApi.js";

const DevisePage = () => {
  const [devise, setDevise] = useState({info:[]})
  const {id} = useParams()

  useEffect(()=>{
    fetchOneDevise(id).then(data=>setDevise(data))
  }, [])

  const img = "data:image/jpeg;base64,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"
  return (
    <Container className={" "}>
      <Row className="mt-3">
        <Col md={4}>
          <Image width={300} height={300} src={"http://localhost:5000/"+devise.img}/>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{devise.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${img}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64
              }}
            >
              {devise.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}
          >
            <h3>От: {devise.price} руб.</h3>
            <Button variant={"outline-dark"}> Добавить в корзинку</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
          {
            devise.info.map((item,index)=>
              <Row key={item.id} style={{background: index % 2 ===0?"lightgray":"transparent", padding: 10}}>
                {item.title}: {item.description}
              </Row>
          )}
      </Row>
    </Container>
  );
};

export default DevisePage;