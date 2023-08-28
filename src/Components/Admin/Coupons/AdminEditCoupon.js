import React, {useRef} from 'react'
import { Form, Button, Modal, Container} from 'react-bootstrap';
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
            <Button variant="outline-warning" size="sm" className="py-2"
                    onClick={() => setShowModal(true)}>
                <Pencil/>
            </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit coupon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form onSubmit={UpdateHandler}>
                            <Form.Group>
                                <label htmlFor="name">Name</label>
                                <Form.Control
                                    id="name"
                                    type="text"
                                    placeholder="the name of the brand"
                                    name="name"
                                    className={errors.some(error => error.param === "name") && 'is-invalid'}
                                    onChange={handlerOnChangeInput}
                                    value={data.name}/>
                                {errors.some(error => error.param === "name") &&
                                    <Form.Text className="text-danger">
                                        {errors.find(error => error.param === "name").msg}
                                    </Form.Text>
                                }
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <label htmlFor="expire">Expire</label>
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
                            </Form.Group>
                            <br/>
                            <Form.Group>
                                <label htmlFor="discount">Discount</label>
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
                            </Form.Group>
                            <br/>
                        </Form>
                    </Container>

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