import Pagination from "../../../Components/Utility/Pagination";
import {GetCategories} from "../../../Controllers/CategoryController";
import AdminCategoriesContainer from "../../../Components/Admin/Categories/AdminCategoriesContainer";

const AdminProductsPage = () => {
    const {categories, loading, getPage, pageCount} = GetCategories()
    return (
        <>
            <AdminCategoriesContainer categories={categories} loading={loading}/>
            {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
        </>
    )
}
export default AdminProductsPage