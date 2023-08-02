import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../main.jsx";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
  const {devise} = useContext(Context)
  return (
    <ListGroup>
      {devise.types.map((i)=>{
        return <ListGroup.Item
          key={i.id}
          active={i.id === devise.selectedType.id}
          style={{cursor: "pointer"}}
          onClick={()=>devise.setSelectedType(i)}
        >
          {i.name}
        </ListGroup.Item>
      })}
    </ListGroup>
  );
});

export default TypeBar;