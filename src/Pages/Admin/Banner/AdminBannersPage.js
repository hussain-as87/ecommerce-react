import Pagination from "../../../Components/Utility/Pagination";
import {GetBanners} from "../../../Controllers/BannerController";
import AdminBannersContainer from "../../../Components/Admin/Banners/AdminBannersContainer";

const AdminBannersPage = () => {
    const {banners, loading, getPage, pageCount} = GetBanners()
    return (
            <>
                <AdminBannersContainer banners={banners} loading={loading}/>
                {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage}/>}
            </>

    )
}
export default AdminBannersPage