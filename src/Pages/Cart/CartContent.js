import {Col, Container, Row} from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";
import CartCheckout from "../../Components/Cart/CartCheckout";

const CartContent = () => {
  return(<Container style={{ minHeight: '670px' }}>
      <Row>
          <div className='cart-title mt-4'>Cart</div>
      </Row>
      <Row className='d-flex justify-content-center'>
          <Col xs={12} sm={12} md={8} xl={8}>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
          </Col>

          <Col xs={12} sm={12} md={4} xl={4}>
              <CartCheckout />
          </Col>
      </Row>
  </Container>)
}
export default CartContent