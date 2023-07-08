import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminCreateCategory from "../../Components/Admin/Categories/AdminCreateCategory";

const AdminCreateCategoryPage = () => {
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminCreateCategory/>
            </Col>
        </Row>
    )
}

export default AdminCreateCategoryPage
