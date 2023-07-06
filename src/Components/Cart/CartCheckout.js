import React from 'react';
import {Row, Col, Button, Form, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ApplyCouponOnCart, ClearCartItems, GetCartItems} from "../../Controllers/CartController";
import {BagCheck, CartX} from "react-bootstrap-icons";

const CartCheckout = () => {
    const {clearHandler} = ClearCartItems();
    const {handlerOnChangeInput, errors, data, applyHandler, discountValue} = ApplyCouponOnCart()
    const isInvalidCoupon = errors.some(error => error.param === "coupon");
    const {carts} = GetCartItems()
    return (
        <Row className="my-1 d-flex justify-content-center pt-3">
            <Col xs={12} className="d-flex flex-column">
                <Form onSubmit={applyHandler}>
                    <div className="d-flex">
                        <Form.Control name="coupon" value={data.coupon} onChange={handlerOnChangeInput}
                                      className={`d-inline py-2 ${isInvalidCoupon ? "is-invalid" : ""}`}
                                      type="text" placeholder="Coupon Code"/>
                        <Button type="submit" className="d-inline py-2" variant="primary">Execute</Button>
                    </div>
                </Form>
                <Card className="mt-2 mb-4">
                    <Card.Body>
                        <Card.Text className="text-center">Total Price: <b
                            className="text-primary">{carts?.data?.totalCartPrice}
                            $</b></Card.Text>
                        <Card.Text className="text-center">Discount Value: <b
                            className="text-primary">{discountValue}
                            %</b></Card.Text>
                        <hr/>
                        <Card.Text className="text-center">Total After Discount: <br/><b
                            className="text-primary">{carts?.data?.totalPriceAfterDiscount || carts?.data?.totalCartPrice}
                            $</b></Card.Text>
                    </Card.Body>
                </Card>

                <Link to="/order/payment" className="product-cart-add d-inline" style={{textDecoration: "none"}}>
                    <Button className="product-cart-add w-100 px-2"><BagCheck size={22}/> Checkout </Button>
                </Link>
                <Button variant="danger" onClick={clearHandler} className="mt-2"> <CartX size={22}/>Clear Cart</Button>
            </Col>
        </Row>
    );
}

export default CartCheckout;
