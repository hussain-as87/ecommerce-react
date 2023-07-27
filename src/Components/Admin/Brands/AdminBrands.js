import React from "react";
import imageFail from "../../../assets/images/image.png"
import {Backspace, Check2Circle, Pen, StarFill, Trash2} from "react-bootstrap-icons";
import {Button, Card, FloatingLabel, Form, Modal, Spinner} from "react-bootstrap";
import {DestroyCategory, EditCategory} from "../../../Controllers/CategoryController";
import {DestroyBrand, EditBrand} from "../../../Controllers/BarandController";
import AdminEditBrand from "./AdminEditBrandCards";

const AdminBrands = ({brand}) => {
    const {deleteHandler} = DestroyBrand(brand?._id)
    return (
        <tr>
            <th><img onError={(e) => (e.target.src = imageFail)}
                     src={brand?.image} alt={brand?.name} width={20}/></th>
            <th>{brand?.name}</th>
            <th>{/*<Link to={`/admin/products/edit/${_id}`}>*/}
                {/*</Link>*/}
              <AdminEditBrand id={brand?._id} key={brand?._id}/>
            </th>
            <th>
                <Trash2 size={20} className="text-danger" onClick={deleteHandler}/>
            </th>
        </tr>
    )
}
export default AdminBrands