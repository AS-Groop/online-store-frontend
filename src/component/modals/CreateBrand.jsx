import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/deviseApi.js";

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const create = async ()=>{
    try{
      await createBrand({name: value})
      setValue("")
      onHide()
    } catch (e){
      console.log(e)
    }
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
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            placeholder={"Введите название бренда"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Закрыт</Button>
        <Button variant={"outline-success"} onClick={create}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;