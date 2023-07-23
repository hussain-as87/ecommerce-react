import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utility/Pagination";
import {GetSubcategories} from "../../Controllers/SubcategoryController";
import AdminSubcategoriesContainer from "../../Components/Admin/SubCategories/AdminSubcategoriesContainer";

const AdminProductsPage = () => {
    const {subcategories, loading, getPage, pageCount} = GetSubcategories()
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminSubcategoriesContainer subcategories={subcategories} loading={loading}/>
                {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
            </Col>
        </Row>
    )
}
export default AdminProductsPage