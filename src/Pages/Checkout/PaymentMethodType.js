import {Container} from "react-bootstrap";
import PaymentMethod from "../../Components/Checkout/PaymentMethod";

const PaymentMethodType = () => {
    console.log('payment method type')
    return (
        <Container style={{minHeight:'670px'}}>
            <PaymentMethod />
        </Container>)
}
export default PaymentMethodType