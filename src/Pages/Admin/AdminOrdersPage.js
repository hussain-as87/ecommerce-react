import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utility/Pagination";
import AdminOrdersContainer from "../../Components/Admin/Orders/AdminOrdersContainer";

const AdminOrdersPage = () => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminOrdersContainer/>
                <Pagination/>
            </Col>
        </Row>
    )
}
export default AdminOrdersPage