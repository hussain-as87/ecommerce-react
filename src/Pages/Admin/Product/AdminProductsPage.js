import AdminProductsContainer from "../../../Components/Admin/Products/AdminProductsContainer";
import Pagination from "../../../Components/Utility/Pagination";
import {GetProducts} from "../../../Controllers/ProductController";

const AdminProductsPage = ({index}) => {
    const {products, loading, getPage, pageCount} = index
    return (
        <>
            <AdminProductsContainer products={products} loading={loading}/>
            {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
        </>
    )
}
export default AdminProductsPage