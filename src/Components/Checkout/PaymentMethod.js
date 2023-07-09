import {Col, Row, Form, Container, Button} from 'react-bootstrap';

const PaymentMethod = () => {
    return (
        <Container>
            <div className="admin-content-text pt-5">Choose your payment</div>
            <div className="d-inline p-2 bg-primary text-white">{localStorage.getItem('totalPrice')} Dollar</div>
            <div className="user-address-card my-3 px-3 p-3">
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

            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <Button variant="outline-primary" className=" px-3 pt-2 d-inline me-2">Checkout</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentMethod;
