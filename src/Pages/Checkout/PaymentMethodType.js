import {Container} from "react-bootstrap";
import PaymentMethod from "../../Components/Checkout/PaymentMethod";
import {Link} from "react-router-dom";

const PaymentMethodType = () => {
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Check Out</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <Link to="/shop">Shop</Link>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Checkout Section Begin */}
            <PaymentMethod/>
            {/* Checkout Section End */}
        </>
    )
}
export default PaymentMethodType
