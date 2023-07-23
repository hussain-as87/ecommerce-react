import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import UserProfile from "../../Components/User/UserProfile";

const AdminCreateBrandPage = () => {
    return (
        <Row className='py-3 pb-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <UserProfile/>
            </Col>
        </Row>
    )
}

export default AdminCreateBrandPage
