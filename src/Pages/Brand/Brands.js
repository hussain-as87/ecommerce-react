import Pagination from "../../Components/Utility/Pagination";
import BrandContainer from "../../Components/Brand/BrandCardItemContainer";
import {GetBrands} from "../../Controllers/BarandController";

const Brands = () => {
    const {brands,getPage,pageCount,loading} = GetBrands()
    return (<>
        <BrandContainer brands={brands.data} loading={loading}/>
        {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
    </>)
}
export default Brands