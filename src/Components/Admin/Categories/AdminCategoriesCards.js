import React from "react";
import imageFail from "../../../assets/images/image.png"
import {Trash2} from "react-bootstrap-icons";
import {DestroyCategory} from "../../../Controllers/CategoryController";
import AdminEditCategory from "./AdminEditCategory";

const AdminCategoriesCards = ({category}) => {
    const {deleteHandler} = DestroyCategory(category?._id)
    return (
        <tr>
            <th><img onError={(e) => (e.target.src = imageFail)}
                     src={category?.image} alt={category?.name} width={20}/></th>
            <th>{category?.name}</th>
            <th>{/*<Link to={`/admin/products/edit/${_id}`}>*/}
                {/*</Link>*/}
                <AdminEditCategory id={category?._id} key={category?._id}/>
            </th>
            <th>
                <Trash2 size={20} className="text-danger" onClick={deleteHandler}/>
            </th>
        </tr>
    )
}
export default AdminCategoriesCards