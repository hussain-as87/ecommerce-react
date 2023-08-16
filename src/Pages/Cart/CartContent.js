import {Col, Container, Row} from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import {ClearCartItems, GetCartItems} from "../../Controllers/CartController";
import {Link} from "react-router-dom";


const CartContent = () => {
    const {carts} = GetCartItems()
    const {clearHandler} = ClearCartItems();

    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <Link to="/shop">Shop</Link>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Shopping Cart Section Begin */}
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {carts?.data?.cartItems.slice(0, 4).map((item, index) => (
                                        <CartItem item={item} key={item._id}/>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <Link to="/shop">Continue Shopping</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn" onClick={clearHandler}>
                                        <a href="#">
                                            <i className="fa fa-refresh"/> Clear cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CartCheckout/>
                    </div>
                </div>
            </section>
            {/* Shopping Cart Section End */}
        </>
    )
}
export default CartContent
