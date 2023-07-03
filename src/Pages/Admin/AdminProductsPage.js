import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminProductsContainer from "../../Components/Admin/Products/AdminProductsContainer";
import Pagination from "../../Components/Utility/Pagination";
import IndexProductForm from "../../Controllers/Product/IndexProductForm";

const AdminProductsPage = () => {
    const {products, loading, getPage, pageCount} = IndexProductForm()
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminProductsContainer products={products} loading={loading}/>
                {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
            </Col>
        </Row>
    )
}
export default AdminProductsPage