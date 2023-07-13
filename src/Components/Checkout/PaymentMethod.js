import {Form, Container, Button, ListGroup, FloatingLabel, Card} from 'react-bootstrap';
import {CreateOrder} from "../../Controllers/OrderController";
import React from "react";
import {CashStack, Check2Circle} from "react-bootstrap-icons";

const PaymentMethod = () => {
    const {
        handleSubmit,
        data,
        handlerOnChangeInput,
        handleChangeValue,
        isCash
    } = CreateOrder(localStorage.getItem("cartId"))
    return (
        <Container>
            <div className="admin-content-text pt-5 pb-2">Choose your payment</div>
            <Card>
                <Card.Body>
                    <h2
                        className="text-center text-success"><CashStack
                        size={35}/> {localStorage.getItem('totalPrice')} $
                    </h2>
                    <div className="my-3 px-3 p-3">
                        <ListGroup as="ul" className="py-2 pb-3">
                            <ListGroup.Item
                                as="li"
                                onClick={handleChangeValue}
                                active={isCash !== true}
                            >
                                Payment by credit card
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                onClick={handleChangeValue}
                                active={isCash === true}
                            >
                                Cash on delivery
                            </ListGroup.Item>
                        </ListGroup>
                        {isCash && <Card>
                            <Card.Header className="bg-info">
                                Shipping Address
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="details">
                                        <FloatingLabel controlId="details" label="Address Details">
                                            <Form.Control
                                                id="details"
                                                type="text"
                                                placeholder=""
                                                name="details"
                                                onChange={handlerOnChangeInput}
                                                value={data.shippingAddress.details}
                                                pattern="[A-Za-z]+"
                                                required
                                                style={{textAlign: "center"}}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <br/>
                                    <Form.Group controlId="city">
                                        <FloatingLabel controlId="city" label="City">
                                            <Form.Control
                                                id="city"
                                                type="text"
                                                placeholder=""
                                                name="city"
                                                onChange={handlerOnChangeInput}
                                                value={data.shippingAddress.city}
                                                pattern="[A-Za-z]+"
                                                required
                                                style={{textAlign: "center"}}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <br/>
                                    <Form.Group controlId="postalCode">
                                        <FloatingLabel controlId="postalCode" label="Postal Code">
                                            <Form.Control
                                                id="postalCode"
                                                type="text"
                                                placeholder=""
                                                name="postalCode"
                                                onChange={handlerOnChangeInput}
                                                value={data.shippingAddress.postalCode}
                                                pattern="[0-9]{5}"
                                                required
                                                style={{textAlign: "center"}}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>
                                    <br/>
                                    <Form.Group controlId="phone">
                                        <FloatingLabel controlId="phone" label="Phone Number">
                                            <Form.Control
                                                id="phone"
                                                type="text"
                                                placeholder=""
                                                name="phone"
                                                onChange={handlerOnChangeInput}
                                                value={data.shippingAddress.phone}
                                                pattern="[0-9]{10}"
                                                required
                                                style={{textAlign: "center"}}
                                            />
                                        </FloatingLabel>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                        }
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="outline-primary"
                                    className="mt-3"><Check2Circle size={25}/> Checkout</Button><br/>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PaymentMethod;
