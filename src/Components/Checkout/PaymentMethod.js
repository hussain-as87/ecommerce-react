import {Col, Row} from "react-bootstrap";

const PaymentMethod = () => {
    return (
        <div>
            <div className="admin-content-text pt-5">Chose your payment</div>
            <div className="user-address-card my-3 px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-4">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="payment by visa"
                            className="mt-2"
                        />
                        <label className="mx-2" htmlFor="group1">Payment by credit card</label>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col xs="12" className="d-flex">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="cash on delivery"
                            className="mt-2"
                        />
                        <label className="mx-2" htmlFor="group1">Cash on delivery</label>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="product-price d-inline   border">34000 pounds</div>
                    <div className="product-cart-add px-3 pt-2 d-inline me-2">Checkout</div>
                </Col>
            </Row>
        </div>
    )
}

export default PaymentMethod