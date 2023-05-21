import Pagination from "../../Components/Utility/Pagination";
import BrandContainer from "../../Components/Brand/BrandCardItemContainer";
import IndexBrandForm from "../../Controllers/Brand/IndexBrandForm";

const Brands = () => {
    const {brands,getPage,pageCount,loading} = IndexBrandForm()
    return (<>
        <BrandContainer brands={brands.data} loading={loading}/>
        {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
    </>)
}
export default Brands