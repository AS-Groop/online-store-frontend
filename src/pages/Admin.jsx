import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../component/modals/CreateBrand.jsx";
import CreateType from "../component/modals/CreateType.jsx";
import CreateDevise from "../component/modals/CreateDevise.jsx";
import {observer} from "mobx-react-lite";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviseVisible, setDeviseVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button className="mt-4 p-2" variant={"outline-dark"} onClick={()=>{setDeviseVisible(true)}}>Добавить устройство</Button>
      <Button className="mt-4 p-2" variant={"outline-dark"} onClick={()=>{setBrandVisible(true)}}>Добавить бренд</Button>
      <Button className="mt-4 p-2" variant={"outline-dark"} onClick={()=>{setTypeVisible(true)}}>Добавить тип</Button>
      <CreateDevise show={deviseVisible} onHide={()=>{setDeviseVisible(false)}}/>
      <CreateBrand show={brandVisible} onHide={()=>{setBrandVisible(false)}}/>
      <CreateType show={typeVisible} onHide={()=>{setTypeVisible(false)}}/>
    </Container>
  );
};

export default Admin;