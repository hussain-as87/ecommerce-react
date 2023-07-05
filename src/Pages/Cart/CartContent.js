import {Button, Col, Container, Row} from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";
import {ClearCartItems, GetCartItems} from "../../Controllers/CartController";
import {CartX} from "react-bootstrap-icons";

const CartContent = () => {
    const {carts} = GetCartItems()
    const {clearHandler} = ClearCartItems()
    return (<Container style={{minHeight: '670px'}}>
        <Row>
            <div className='cart-title mt-4'>Cart</div>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col xs={12} sm={12} md={8} xl={8}>
                <Button variant="outline-danger" onClick={clearHandler}>Clear Cart <CartX size={20}/></Button>
                {carts?.data?.cartItems.slice(0, 4).map((item, index) => (
                    <CartItem item={item} key={item._id}/>
                ))}
            </Col>

            <Col xs={12} sm={12} md={4} xl={4}>
                <CartCheckout/>
            </Col>
        </Row>
    </Container>)
}
export default CartContent