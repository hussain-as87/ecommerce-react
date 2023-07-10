import {Col, Row, Form, Container, Button, ListGroup} from 'react-bootstrap';
import {CreateOrder} from "../../Controllers/OrderController";

const PaymentMethod = () => {
    const {handleSubmit} = CreateOrder(localStorage.getItem("cartId"))
    return (
        <Container>
            <div className="admin-content-text pt-5">Choose your payment</div>
            <div className="user-address-card my-3 px-3 p-3">
                <div
                    className="d-inline p-2 bg-info text-white align-items-center">{localStorage.getItem('totalPrice')} Dollar
                </div>
                {/*
                <Form.Group className="my-4 m-2">
                    <Col xs="auto">
                        <Form.Check
                            type="radio"
                            name="paymentMethod"
                            id="creditCard"
                            value="payment by visa"
                            className="mt-2"
                            label="Payment by credit card"
                        />
                    </Col>

                    <Col xs="auto">
                        <Form.Check
                            type="radio"
                            name="paymentMethod"
                            id="cashOnDelivery"
                            value="cash on delivery"
                            className="mt-2"
                            label="Cash on delivery"
                        />
                    </Col>
                </Form.Group>
                */}
                <ListGroup as="ul" className="py-2 p-3">
                    <ListGroup.Item
                        as="li"
                        /*  onClick={handleUpdateOrderStatus}
                          active={checkedOption === 'isPaid'}*/
                    >
                        Payment by credit card
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        /*onClick={handleUpdateOrderStatus}
                        active={checkedOption === 'isDelivered'}*/
                    >
                        Cash on delivery
                    </ListGroup.Item>
                </ListGroup>

            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <Button onClick={handleSubmit} variant="outline-primary" className=" px-3 pt-2 d-inline me-2">Checkout</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentMethod;
