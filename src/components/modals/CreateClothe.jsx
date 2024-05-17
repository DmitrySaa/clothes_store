import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";


const CreateClothe = ({ show, handleClose }) => {
    const { clothes } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить вещь
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {clothes.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {clothes.brands.map(brand =>
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control 
                    placeholder="Введите название"
                    className="mt-2"
                />
                <Form.Control 
                    placeholder="Введите стоимость"
                    type="number"
                    className="mt-2"
                />
                <Form.Control 
                    type="file"
                    className="mt-2"
                />
                <hr/>
                <Button
                    variant="outline-dark"
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i => 
                    <Row className="mt-2" key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                placeholder="Введите название свойства"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                placeholder="Введите описание свойства"
                            />
                        </Col>
                        <Col md={4}>
                            <Button 
                                variant="outline-danger"
                                onClick={() => removeInfo(i.number)}
                            >
                                Удалить
                            </Button>
                        </Col>
                    </Row>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Закрыть</Button>
                <Button variant="outline-success" onClick={handleClose}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default CreateClothe;
