import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utility/Pagination";
import AdminOrdersContainer from "../../Components/Admin/Orders/AdminOrdersContainer";
import {GetOrders} from "../../Controllers/OrderController";

const AdminOrdersPage = () => {
    const {orders} = GetOrders()

    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminOrdersContainer orders={orders.data}/>
                <Pagination/>
            </Col>
        </Row>
    )
}
export default AdminOrdersPage