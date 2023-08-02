import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {Context} from "../main.jsx";
import DeviseItem from "./DeviseItem.jsx";

const DevisesList = observer(() => {
  const {devise} = useContext(Context)
  return (
    <Row className="d-flex mt-4">
      {devise.devises.map(devise=><DeviseItem key={devise.id} devise={devise}/>)}
    </Row>
  );
});

export default DevisesList;