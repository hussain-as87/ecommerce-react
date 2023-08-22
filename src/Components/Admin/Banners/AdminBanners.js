import React from "react";
import imageFail from "../../../assets/images/image.png"
import AdminEditBrand from "./AdminEditBannerCards";
import {DestroyBanner} from "../../../Controllers/BannerController";
import {Trash2} from "react-bootstrap-icons";

const AdminBanners = ({banner}) => {
    const {deleteHandler} = DestroyBanner(banner?._id)
    return (
        <tr>
            <th><img onError={(e) => (e.target.src = imageFail)}
                     src={banner?.image} alt={banner?.name} width={20}/></th>
            <th>{banner?.title}</th>
            <th>{banner?.subtitle}</th>
            <th>{banner?.summary}</th>
            <th>{banner?.description}</th>
            <th>
                <AdminEditBrand id={banner?._id} key={banner?._id}/>
            </th>
            <th>
                <Trash2 size={20} className="text-danger" onClick={deleteHandler}/>
            </th>
        </tr>
    )
}
export default AdminBanners