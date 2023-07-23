import {Col, Row} from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import Pagination from "../../Components/Utility/Pagination";
import {GetBrands} from "../../Controllers/BarandController";
import AdminBrandsContainer from "../../Components/Admin/Brands/AdminBrandsContainer";

const AdminProductsPage = () => {
    const {brands, loading, getPage, pageCount} = GetBrands()
    return (
        <Row className='py-3'>
            <Col sm="4" xs="3" md="3">
                <AdminSideBar/>
            </Col>

            <Col sm="8" xs="9" md="9">
                <AdminBrandsContainer brands={brands} loading={loading}/>
                {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
            </Col>
        </Row>
    )
}
export default AdminProductsPage