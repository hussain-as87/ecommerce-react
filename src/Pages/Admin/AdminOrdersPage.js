import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utility/Pagination";
import AdminOrdersContainer from "../../Components/Admin/Orders/AdminOrdersContainer";

const AdminOrdersPage = () => {
    return (<Container>
        <Row className="py-3">
            <Col sm={3} xs={2} md={2}>
                <AdminSideBar/>
            </Col>
            <Col sm={9} xs={10} md={10}>
                <AdminOrdersContainer/>
                <Pagination/>
            </Col>
        </Row>
    </Container>)
}
export default AdminOrdersPage