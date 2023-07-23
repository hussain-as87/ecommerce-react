import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utility/Pagination";
import {GetCategories} from "../../Controllers/CategoryController";
import AdminCategoriesContainer from "../../Components/Admin/Categories/AdminCategoriesContainer";

const AdminProductsPage = () => {
    const {categories, loading, getPage, pageCount} = GetCategories()
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminCategoriesContainer categories={categories} loading={loading}/>
                {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
            </Col>
        </Row>
    )
}
export default AdminProductsPage