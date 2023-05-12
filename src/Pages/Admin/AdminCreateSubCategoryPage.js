import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminCreateSubCategories from "../../Components/Admin/SubCategories/AdminCreateSubCategories";

const AdminCreateSubCategoryPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminCreateSubCategories />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminCreateSubCategoryPage
