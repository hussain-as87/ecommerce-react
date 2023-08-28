import {CreateOrder} from "../../Controllers/OrderController";
import React from "react";
import {GetCartItems} from "../../Controllers/CartController";

const PaymentMethod = () => {
      const {
          handleSubmit,
          data,
          handlerOnChangeInput,
          handleChangeCashValue,
          isCash,
      } = CreateOrder(localStorage.getItem("cartId")||"")
    const {carts} = GetCartItems()
    return (
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <h6 className="coupon__code">
                                    <span className="icon_tag_alt"/> Have a coupon?{" "}
                                    <a href="#">Click here</a> to enter your code
                                </h6>
                                <h6 className="checkout__title">Billing Details</h6>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>
                                                Fist Name<span>*</span>
                                            </p>
                                            <input type="text"
                                                   id="firstName"
                                                   placeholder=""
                                                   name="firstName"
                                                   onChange={handlerOnChangeInput}
                                                   value={data.shippingAddress.firstName}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>
                                                Last Name<span>*</span>
                                            </p>
                                            <input type="text"
                                                   id="lastName"
                                                   placeholder=""
                                                   name="lastName"
                                                   onChange={handlerOnChangeInput}
                                                   value={data.shippingAddress.lastName}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout__input">
                                    <p>
                                        Address<span>*</span>
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        className="checkout__input__add"
                                        id="details"
                                        name="details"
                                        onChange={handlerOnChangeInput}
                                        value={data.shippingAddress.details}
                                    />
                                </div>
                                <div className="checkout__input">
                                    <p>
                                        Town/City<span>*</span>
                                    </p>
                                    <input type="text"
                                           id="city"
                                           placeholder=""
                                           name="city"
                                           onChange={handlerOnChangeInput}
                                           value={data.shippingAddress.city}
                                    />
                                </div>
                                <div className="checkout__input">
                                    <p>
                                        Country/State<span>*</span>
                                    </p>
                                    <input type="text"
                                           id="country"
                                           placeholder=""
                                           name="country"
                                           onChange={handlerOnChangeInput}
                                           value={data.shippingAddress.country}
                                    />
                                </div>
                                <div className="checkout__input">
                                    <p>
                                        Postcode / ZIP<span>*</span>
                                    </p>
                                    <input type="text"
                                           id="postalCode"
                                           placeholder=""
                                           name="postalCode"
                                           onChange={handlerOnChangeInput}
                                           value={data.shippingAddress.postalCode}/>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>
                                                Phone<span>*</span>
                                            </p>
                                            <input type="text"
                                                   id="phone"
                                                   placeholder=""
                                                   name="phone"
                                                   onChange={handlerOnChangeInput}
                                                   value={data.shippingAddress.phone}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>
                                                Email<span>*</span>
                                            </p>
                                            <input type="text"
                                                   id="phone"
                                                   placeholder=""
                                                   name="phone"
                                                   onChange={handlerOnChangeInput}
                                                   value={data.shippingAddress.phone}phone/>
                                        </div>
                                    </div>
                                </div>

                                <div className="checkout__input">
                                    <p>
                                        Order notes<span>*</span>
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                        id="notes"
                                        name="notes"
                                        onChange={handlerOnChangeInput}
                                        value={data.shippingAddress.notes}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4 className="order__title">Your order</h4>

                                    <div className="checkout__order__products">
                                        Product <span>Total</span>
                                    </div>
                                    <ul className="checkout__total__products">
                                        {carts?.data?.cartItems.slice(0,4).map((product,index)=>(
                                            <li>
                                                0{index+1}. {product.product.title} <span>$ {product.quantity*product.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="checkout__total__all">
                                        <li>
                                            Subtotal <span>${carts?.data?.totalCartPrice ||0}</span>
                                        </li>
                                        <li>
                                            Total <span>${(carts?.data?.totalPriceAfterDiscount || carts?.data?.totalCartPrice)||0}</span>
                                        </li>
                                    </ul>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="payment">
                                            Check Payment
                                            <input type="checkbox" id="payment" onChange={handleChangeCashValue}/>
                                            <span className="checkmark"/>
                                        </label>
                                    </div>
                                    <button type="submit" className="site-btn" onClick={handleSubmit}>
                                        PLACE ORDER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethod;
