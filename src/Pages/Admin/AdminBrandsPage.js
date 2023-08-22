import Pagination from "../../Components/Utility/Pagination";
import {GetBrands} from "../../Controllers/BrandController";
import AdminBrandsContainer from "../../Components/Admin/Brands/AdminBrandsContainer";

const AdminBrandsPage = () => {
    const {brands, loading, getPage, pageCount} = GetBrands()
    return (
            <>
                <AdminBrandsContainer brands={brands} loading={loading}/>
                {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
            </>

    )
}
export default AdminBrandsPage