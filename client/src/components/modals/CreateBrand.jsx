import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../http/clothesAPI";

const CreateBrand = ({ show, handleClose }) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({ name: value }).then(data => {
            setValue('')
        })
    }
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
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Введите название бренда..."
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
