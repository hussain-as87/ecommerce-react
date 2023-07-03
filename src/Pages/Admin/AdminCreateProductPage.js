import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminCreateProduct from "../../Components/Admin/Products/AdminCreateProduct";

const AdminCreateProductPage = () => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminCreateProduct/>
            </Col>
        </Row>
    )
}

export default AdminCreateProductPage
