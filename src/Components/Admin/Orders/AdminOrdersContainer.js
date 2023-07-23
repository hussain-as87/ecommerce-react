import {CardGroup, Container, Row} from "react-bootstrap";
import AdminOrdersCards from "./AdminOrdersCards";

const AdminOrdersContainer = ({orders}) => {
    return <Container>
        <div className="admin-content-text">Management all orders</div>
        <Row className="justify-content-start">
            {orders?.map((item) => (
                <AdminOrdersCards item={item} key={item._id}/>
            ))}
        </Row>
    </Container>
}
export default AdminOrdersContainer