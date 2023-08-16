import React, {useEffect} from 'react';
import {Row, Col, Button, Form, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {ApplyCouponOnCart, ClearCartItems, GetCartItems} from "../../Controllers/CartController";
import {BagCheck, CartX} from "react-bootstrap-icons";
import use_notification from "../../Controllers/use_notification";

const CartCheckout = () => {
    const navigate = useNavigate()
    const {handlerOnChangeInput, data, applyHandler, discountValue} = ApplyCouponOnCart()
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
        <div className="col-lg-4">
            <div className="cart__discount">
                <h6>Discount codes</h6>
                <form onSubmit={applyHandler}>
                    <input type="text" name="coupon" value={data.coupon} onChange={handlerOnChangeInput}
                           placeholder="Coupon code"/>
                    <button type="submit">Apply</button>
                </form>
            </div>
            <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                    <li>
                        Subtotal <span>$ {carts?.data?.totalCartPrice ||0}</span>
                    </li>
                    <li>
                        Total <span>$ {(carts?.data?.totalPriceAfterDiscount || carts?.data?.totalCartPrice)||0}</span>
                    </li>
                </ul>
                <a href="#" className="primary-btn" onClick={checkCart}>
                    Proceed to checkout
                </a>
            </div>
        </div>
    );
}

export default CartCheckout;

