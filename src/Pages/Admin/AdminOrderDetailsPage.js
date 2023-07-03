import {Row, Col} from 'react-bootstrap'
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminOrderDetails from "../../Components/Admin/Orders/AdminOrderDetails";

const AdminOrderDetailsPage = () => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminOrderDetails/>
            </Col>
        </Row>
    )
}

export default AdminOrderDetailsPage
