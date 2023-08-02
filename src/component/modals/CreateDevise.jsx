import React, {useContext, useState, useEffect} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../main.jsx";
import {createDevise, fetchBrands, fetchTypes} from "../../http/deviseApi.js";

const CreateDevise = ({show, onHide}) => {
  const {devise} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [brand, setBrand] = useState(null)
  const [type, setType] = useState(null)
  const [info, setInfo] = useState([])
  useEffect(()=>{
    fetchTypes().then(data=>devise.setTypes(data))
    fetchBrands().then(data=>devise.setBrands(data))
  }, [])
  const selectFiles = (e)=>{
    setFile(e.target.files[0])
  }

  const addDevise = ()=>{
    const data = new FormData()
    data.append('name', name)
    data.append('price', `${price}`)
    data.append('brand', `${brand}`)
    data.append('type', `${type}`)
    data.append('info', JSON.stringify(info))
    data.append('img', file)

    createDevise(data).then(data=>{
      onHide()
    })

  }

  const changeInfo = (key, value, id)=>{
    setInfo(info.map(i=>i.id===id ? {...i, [key]:value} : i))
  }

  const addInfo = ()=>{
    setInfo([...info, {title: '', description: '', id: Date.now()}])
  }

  const removeInfo = (id)=>{
    setInfo([...info.filter(i=>i.id!==id)])
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-type">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="my-2">
            <Dropdown.Toggle>{type ? type.name : "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {devise.types.map(type =>
                <Dropdown.Item onClick={()=>{setType(type)}} key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="my-2">
            <Dropdown.Toggle>{brand ? brand.name : "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {devise.brands.map(brand =>
                <Dropdown.Item onClick={()=>{setBrand(type)}} key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder={"Введите название устройства"}
          />
          <Form.Control
            className="mt-3"
            value={price}
            onChange={(e)=>{setPrice(Number(e.target.value))}}
            placeholder={"Введите стоимость устройства"}
            type="number"
          />
          <Form.Control
            className="mt-3"
            type="file"
            onChange={selectFiles}
          />
          <hr/>
          <Button
            onClick={()=>addInfo()}
            variant={"outline-dark"}
          >
            Добавить новое свойство
          </Button>
          { info.map(i=>
            <Row className={"mt-3"} key={i.id}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e)=>{changeInfo('title', e.target.value, i.id)}}
                  placeholder={"Введите название свойства"}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e)=>{changeInfo('description', e.target.value, i.id)}}
                  placeholder={"Введите описание свойства"}
                />
              </Col>
              <Col md={4}>
                <Button variant={"outline-danger"} onClick={()=>removeInfo(i.id)}>Удалить</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Закрыт</Button>
        <Button variant={"outline-success"} onClick={addDevise}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevise;