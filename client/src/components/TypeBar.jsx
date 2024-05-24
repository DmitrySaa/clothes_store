import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Context } from "..";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer((props) => {
  const { clothes } = useContext(Context)
  return (
    <ListGroup>
      {clothes.types.map(type =>
        <ListGroup.Item
          active={type.id === clothes.selectedType.id}
          onClick={() => clothes.setSelectedType(type)}
          key={type.id}
          style={{cursor: 'pointer'}}
        >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
});

export default TypeBar;
