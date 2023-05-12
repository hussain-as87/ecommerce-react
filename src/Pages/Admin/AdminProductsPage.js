import {Col, Container, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminProductsContainer from "../../Components/Admin/Products/AdminProductsContainer";
import Pagination from "../../Components/Utility/Pagination";

const AdminProductsPage = () => {
    return (<Container>
        <Row className="py-3">
            <Col sm={3} xs={2} md={2}>
                <AdminSideBar/>
            </Col>
            <Col sm={9} xs={10} md={10}>
                <AdminProductsContainer/>
                <Pagination/>
            </Col>
        </Row>
    </Container>)
}
export default AdminProductsPage