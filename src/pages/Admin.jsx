import React, { useState } from "react"
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateClothe from "../components/modals/CreateClothe";

const Admin = () => {
  const [showType, setShowType] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showClothe, setShowClothe] = useState(false);

  return (
    <Container className="d-flex flex-column mt-3">
      <Button variant="outline-dark" className="mt-2" onClick={() => setShowType(true)}>
        Добавить тип
      </Button>
      {showType && <CreateType show={showType} handleClose={() => setShowType(false)} />}

      <Button variant="outline-dark" className="mt-2" onClick={() => setShowBrand(true)}>
        Добавить бренд
      </Button>
      {showBrand && <CreateBrand show={showBrand} handleClose={() => setShowBrand(false)} />}

      <Button variant="outline-dark" className="mt-2" onClick={() => setShowClothe(true)}>
        Добавить вещь
      </Button>
      {showClothe && <CreateClothe show={showClothe} handleClose={() => setShowClothe(false)} />}
    </Container>
  );
};

export default Admin;
