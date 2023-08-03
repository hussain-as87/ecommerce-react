import React from "react";
import { DestroyProduct } from "../../../Controllers/ProductController";
import LimitCharacters from "../../../Hooks/LimitCharacters";
import image from "../../../assets/images/image.png";
import { StarFill, Trash2, Pen } from "react-bootstrap-icons";
import AdminEditProduct from "./AdminEditProduct";
import { Link } from "react-router-dom";
const AdminProductsCards = ({
  product: { _id, imageCover, title, rattingAverage, description },
}) => {
  const { deleteHandler } = DestroyProduct(_id);

  return (
    <tr>
      <th>
        <img
          onError={(e) => (e.target.src = image)}
          src={imageCover}
          alt={title}
          width={20}
        />
      </th>
      <th>
        {title}
        {rattingAverage && (
          <>
            {rattingAverage} <StarFill size={15} className="text-warning" />
          </>
        )}
      </th>
      <th>{LimitCharacters(description || " ", 20)}</th>
      <th>
        <Link to={`/admin/products/edit/${_id}`}>
          <Pen size={20} className="text-warning" />
        </Link>
        {/* <AdminEditProduct id={_id} key={_id} /> */}
      </th>
      <th>
        <Trash2 size={20} className="text-danger" onClick={deleteHandler} />
      </th>
    </tr>
  );
};
export default AdminProductsCards;
