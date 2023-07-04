import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartCheckout = () => {
    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex flex-column">
                <div className="d-flex  ">
                    <input
                        className="copon-input d-inline text-center "
                        placeholder="coupon code"
                    />
                    <Button className="copon-btn d-inline" variant="dark">execute</Button>
                </div>
                <div className="product-price d-inline w-100 my-3 border">
                    total price: 3000 $
                    total price after discount: 3000 $
                </div>
                <Link
                    to="/order/payment"
                    style={{ textDecoration: "none" }}
                    className="product-cart-add d-inline">
                    <button className="product-cart-add w-100 px-2">checkout</button>
                </Link>
            </Col>
        </Row>
    )
}

export default CartCheckout
