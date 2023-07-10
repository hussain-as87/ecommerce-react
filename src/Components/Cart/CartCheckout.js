import React, {useEffect} from 'react';
import {Row, Col, Button, Form, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {ApplyCouponOnCart, ClearCartItems, GetCartItems} from "../../Controllers/CartController";
import {BagCheck, CartX} from "react-bootstrap-icons";
import use_notification from "../../Controllers/use_notification";

const CartCheckout = () => {
    const navigate = useNavigate()
    const {clearHandler} = ClearCartItems();
    const {handlerOnChangeInput, errors, data, applyHandler, discountValue} = ApplyCouponOnCart()
    const isInvalidCoupon = errors.some(error => error.param === "coupon");
    const {carts} = GetCartItems()

    useEffect(() => {
        let total = carts?.data?.totalPriceAfterDiscount || carts?.data?.totalCartPrice;
        let cartId = carts?.data?._id;
        localStorage.setItem('totalPrice', total);
        localStorage.setItem('cartId', cartId);
    }, [carts])
    const checkCart = () => {
        if (carts?.data?.cartItems.length >= 1) {
             navigate('/order/paymethod')
        } else {
            use_notification('Cart is empty!', 'warn')
        }
    }
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
                            className="text-primary">{carts?.data?.totalCartPrice ||0}
                            $</b></Card.Text>
                        <Card.Text className="text-center">Discount Value: <b
                            className="text-primary">{discountValue}
                            %</b></Card.Text>
                        <hr/>
                        <Card.Text className="text-center">Total After Discount: <br/><b
                            className="text-primary">{(carts?.data?.totalPriceAfterDiscount || carts?.data?.totalCartPrice)||0}
                            $</b></Card.Text>
                    </Card.Body>
                </Card>

                <Button className="w-100 px-2" onClick={checkCart}>
                    <BagCheck size={22}/> Checkout
                </Button>
                <Button variant="danger" onClick={clearHandler} className="mt-2">
                    <CartX size={22}/> Clear Cart
                </Button>
            </Col>
        </Row>
    );
}

export default CartCheckout;
