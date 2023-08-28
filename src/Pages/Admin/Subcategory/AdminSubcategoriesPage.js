import Pagination from "../../../Components/Utility/Pagination";
import {GetSubcategories} from "../../../Controllers/SubcategoryController";
import AdminSubcategoriesContainer from "../../../Components/Admin/SubCategories/AdminSubcategoriesContainer";

const AdminProductsPage = () => {
    const {subcategories, loading, getPage, pageCount} = GetSubcategories()
    return (
        <>
            <AdminSubcategoriesContainer subcategories={subcategories} loading={loading}/>
            {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
        </>
    )
}
export default AdminProductsPage