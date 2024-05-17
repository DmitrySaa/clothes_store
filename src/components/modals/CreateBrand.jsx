import React from "react"
import { Button, Form, Modal } from "react-bootstrap";

const CreateBrand = ({show, handleClose}) => {
  return (
    <Modal
        show={show}
        onHide={handleClose}
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить бренд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    placeholder="Введите название бренда..."
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
            <Button variant="outline-success" onClick={handleClose}>Добавить</Button>
        </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
