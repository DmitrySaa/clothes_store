import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { createClothe, fetchBrands, fetchTypes } from "../../http/clothesAPI";
import { observer } from "mobx-react-lite";


const CreateClothe = observer(({ show, handleClose }) => {
    const { clothes } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => clothes.setTypes(data))
        fetchBrands().then(data => clothes.setBrands(data))
      }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addClothe = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', clothes.selectedBrand.id)
        formData.append('typeId', clothes.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createClothe(formData).then(data => handleClose())
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
                    <Dropdown.Toggle>{clothes.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {clothes.types.map(type =>
                            <Dropdown.Item 
                                onClick={() => clothes.setSelectedType(type)}
                                key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle>{clothes.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {clothes.brands.map(brand =>
                            <Dropdown.Item
                                onClick={() => clothes.setSelectedBrand(brand)} 
                                key={brand.id}
                            >
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Введите название"
                    className="mt-2"
                />
                <Form.Control
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    placeholder="Введите стоимость"
                    type="number"
                    className="mt-2"
                />
                <Form.Control
                    type="file"
                    className="mt-2"
                    onChange={selectFile}
                />
                <hr />
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
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder="Введите название свойства"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant="outline-success" onClick={addClothe}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
});

export default CreateClothe;
