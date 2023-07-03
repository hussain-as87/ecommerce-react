import React, {useRef} from 'react'
import {Row, Col, Form, FloatingLabel, Button, Modal} from 'react-bootstrap';
import {Backspace, Check2Circle, Pencil} from "react-bootstrap-icons";
import {EditCoupon} from "../../../Controllers/CouponController";

const AdminEditCoupon = ({id}) => {
    const dateRef = useRef();
    const {
        handlerOnChangeInput,
        data,
        showModal,
        setShowModal,
        errors,
        UpdateHandler
    } = EditCoupon(id)
    return (
        <>
            <Button variant="outline-warning" size="sm" className="me-2"
                    onClick={() => setShowModal(true)}>
                <Pencil/>
            </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit coupon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={UpdateHandler}>
                        <Row className="justify-content-start ">
                            <div className="admin-content-text pb-4">Edit coupon</div>
                            <Col sm={8}>
                                <Form.Group>
                                    <FloatingLabel controlId="name" label="Name">
                                        <Form.Control
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            onChange={handlerOnChangeInput}
                                            type="text"
                                            className={errors.some(error => error.param === "name") && 'is-invalid'}
                                        />
                                        {errors.some(error => error.param === "name") &&
                                            <Form.Text className="text-danger">
                                                {errors.find(error => error.param === "name").msg}
                                            </Form.Text>
                                        }
                                    </FloatingLabel>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <FloatingLabel controlId="expire" label="Expire date">
                                        <Form.Control
                                            id="expire"
                                            ref={dateRef}
                                            type="text"
                                            name="expire"
                                            className={errors.some(error => error.param === "expire") && 'is-invalid'}
                                            onChange={handlerOnChangeInput}
                                            value={data.expire}
                                            onFocus={() => dateRef.current.type = "date"}
                                            onBlur={() => dateRef.current.type = "text"}
                                        />
                                        {errors.some(error => error.param === "expire") &&
                                            <Form.Text className="text-danger">
                                                {errors.find(error => error.param === "expire").msg}
                                            </Form.Text>
                                        }
                                    </FloatingLabel>
                                </Form.Group>
                                <br/>
                                <Form.Group>
                                    <FloatingLabel controlId="discount" label="Discount percent">
                                        <Form.Control
                                            id="discount"
                                            name="discount"
                                            value={data.discount}
                                            onChange={handlerOnChangeInput}
                                            type="number"
                                            className={errors.some(error => error.param === "discount") && 'is-invalid'}
                                        />
                                        {errors.some(error => error.param === "discount") &&
                                            <Form.Text className="text-danger">
                                                {errors.find(error => error.param === "discount").msg}
                                            </Form.Text>
                                        }
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShowModal(false)}>
                        <Backspace/>
                    </Button>
                    <Button variant="outline-primary" type="submit" onClick={UpdateHandler}>
                        <Check2Circle/>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminEditCoupon