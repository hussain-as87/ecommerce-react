import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminEditProduct from "../../Components/Admin/Products/AdminEditProduct";

const AdminCreateProductPage = () => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminEditProduct/>
            </Col>
        </Row>
    )
}

export default AdminCreateProductPage
